import "./Component.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

function Sidebar() {
  const route = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const[data,setData] =useState();


  useEffect(() => {
    var dataFromLs = JSON.parse(localStorage.getItem("CurrentUserIn"));
    if (dataFromLs) {
      setIsUser(true);
    }
  }, []);

  if (data) {
    setIsUser(true);
  }

  function logout() {
    localStorage.removeItem("CurrentUserIn");
    route("/login");
    toast.success("logout sucessful");
  }

  return (
    <div className="home-sidenav">
      <div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
            alt="logo"
          />
        </div>
        <div className="home-side-links">
          <div>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
          <div>
            <i className="fa-regular fa-compass"></i>
            <p>Explore</p>
          </div>
          <div>
            <i className="fa-solid fa-camera-retro"></i>
            <p>Reels</p>
          </div>
          <div>
            <i className="fa-solid fa-location-arrow"></i>
            <p>Messages</p>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <p>Notification</p>
          </div>
          <div
            onClick={() => {
              route("/post");
            }}
          >
            <i className="fa-solid fa-plus"></i>
            <p>Create</p>
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
      </div>

      {isUser ? (
        <div
          className="cursor"
          onClick={() => {
            logout();
          }}
        >
          <i className="fa-solid fa-user"></i>
          <p>LogOut</p>
        </div>
      ) 
      : 
      (
        <div
          className="cursor"
          onClick={() => {
            route('/login');
          }}
        >
          <i className="fa-solid fa-user"></i>
          <p>Login</p>
        </div>
      )}
    </div>
  );
}
export default Sidebar;
