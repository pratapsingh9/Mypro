  import React from "react";
  import "./c.css"; // Assuming your CSS file is named c.css
  import "./photo.css";
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  const PhotoModel = (props) => {
    // const urlofimage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WQXmRGl4g23ljkBWMkvFibZB7QBez_gh5w&usqp=CAU";

    const {imageurl, Name, delte, id , edit } = props;
  
    const already_url = `https://www.google.com/search?q=${Name}&sca_esv=830b62208023c497&hl=en&authuser=0&tbm=isch&sxsrf=ACQVn0-r6rwKH4iDA5gLG9Sc4K3YX_A7Ig%3A1707548512910&source=hp&biw=1396&bih=663&ei=YB_HZdqsNaeMseMP4PmE-A0&iflsig=ANes7DEAAAAAZcctcBsu2bAQMpdJqvvch2p-KhF0znET&ved=0ahUKEwja3K_0maCEAxUnRmwGHeA8Ad8Q4dUDCA8&uact=5&oq=dakota+johnson&gs_lp=EgNpbWciDmRha290YSBqb2huc29uMgQQIxgnMgQQIxgnMggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI5B9QL1jbHXACeACQAQCYAa0CoAHBFqoBCDAuMTMuMS4xuAEDyAEA-AEBigILZ3dzLXdpei1pbWeoAgrCAgcQIxjqAhgnwgIOEAAYgAQYigUYsQMYgwHCAgQQABgD&sclient=img`;

    return (
      <>
      
          <div className="imgwrap">
            <button className="ed" onClick={edit}><EditIcon /></button>
            <button className="remove-button" onClick={delte}>
              X
            </button>
            <a href={already_url} target="_blank">
              <img src={imageurl} alt="" />
              
            </a>
          </div>
 
      </>
    );
  };

  export default PhotoModel;