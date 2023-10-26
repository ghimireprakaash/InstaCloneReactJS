import "./SideNav.css";
import instagram from "../../assets/instagram-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faVideo,
  faMessage,
  faCirclePlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function SideNav() {
  return (
    <div className="side-nav">
      <img src={instagram} alt="" className="sidenav-logo" />
      <div className="sidenav-buttons">
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>Search</span>
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faCompass} />
          <span>Explore</span>
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faVideo} />
          <span>Reels</span>
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faMessage} />
          <span>Messages</span>
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faHeart} />
          <span>Notifications</span>
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faCirclePlus} />
          <span>Create</span>
        </button>
      </div>

      <div className="sidenav-more">
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faBars} />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}
