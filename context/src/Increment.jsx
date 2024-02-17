/* eslint-disable no-unused-vars */
import "./error.css";
import { useState, useEffect } from "react";
import PhotoModel from "./items/PhotoModel";
import axios from "axios";
import {useSelector , useDispatch} from 'react-redux';

const PhotoView = () => {
  const namess = useSelector((state) => {
    state.img.name && state.img.url
  });
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [counter, setcounter] = useState(0);
  // const [editing, setediting] = useState(null
  const [update, setupdate] = useState(false);
  useEffect(() => {
    setcounter(counter + 1);
    fetchImages();
  }, []);
  const fetchImages = async () => {
    const apiurl = "http://localhost:4980/"; // Ensure this URL is correct and the server is running
    try {
      const response = await axios.get(apiurl);
      setCards(response.data.map((item) => ({ ...item, id: item._id })));
    } catch (error) {
      console.error("Failed to fetch images", error);
    }
    setupdate(false);
  };
  const removeItem = async (id) => {
    try {
      // Call the delete API
      await axios.delete(`http://localhost:4980/add/${id}`);
      // Filter out the removed item from the cards state
      setCards(cards.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const updateItem = async (id, newName, newUrl) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.patch(`http://localhost:4980/add/${id}`, {
        name: newName,
        url: newUrl,
      });
      fetchImages(); // Refetch images to update the UI
    } catch (error) {
      console.error("Error updating image", error);
    }
  };
  const updateImg = (item) => {
    console.log(item);
    setupdate(item.id);
    setName(item.name);
    setUrl(item.url);
  };
  const Add = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios
        .post("http://localhost:4980/img/add", { name, url })
        .then((res) => console.log(res));
      setcounter(counter + 1);
      fetchImages();
    } catch (error) { /* empty */ }
  };
  return (
    <>
      <div className="wrapper">
        <div className="inputs">
          <div className="formwrapes">
            <div className="second">

            </div>
          </div>
        </div>
     <div className="wrapaa">
     <div className="main_cards">
          {cards.map((item) => (
            <PhotoModel
              key={item.id}
              Name={item.name}
              imageurl={item.url}
              id={item.id}
              delte={() => removeItem(item.id)}
              edit={() => {
                updateImg(item);
              }}
            />
          ))}
        </div>
     </div>
      </div>
    </>
  );
};

export default PhotoView;