import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoView from "./Increment.jsx";
import LoginPage from "./userss/Login.jsx";
import LoginPageW from "./userss/LoginPage.jsx";
import SignINpage from "./items/aa.jsx";
import Addimg from "./Addimages.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/images" element={<PhotoView />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/login" element={<SignINpage />} />
          <Route path="/addimg" element={<Addimg />} />
          <Route path="/" element={<LoginPageW />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;