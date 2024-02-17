import React, { useState, useEffect } from 'react';
import './ContextMenu.css'; // Assuming you've moved the CSS into this file

const ContextMenu = ({ targetSelector, menuItems, mode = 'dark' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    const { clientX: x, clientY: y } = e;
    setPosition({ x, y });
    setIsVisible(true);
  };

  const handleClick = () => {
    if (isVisible) setIsVisible(false);
  };

  useEffect(() => {
    const targets = document.querySelectorAll(targetSelector);
    targets.forEach(target => target.addEventListener('contextmenu', handleContextMenu));
    document.addEventListener('click', handleClick);
    return () => {
      targets.forEach(target => target.removeEventListener('contextmenu', handleContextMenu));
      document.removeEventListener('click', handleClick);
    };
  }, [targetSelector, isVisible]);

  return isVisible ? (
    <ul
      className={`contextMenu ${mode}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`
      }}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="contextMenu-item"
          data-divider={item.divider ? item.divider : undefined}
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <button
            className="contextMenu-button"
            onClick={item.events?.click}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

export default ContextMenu;

// Usage Example
