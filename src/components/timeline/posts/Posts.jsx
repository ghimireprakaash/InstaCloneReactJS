import "./Posts.css";
import avatar from "../../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

export default function Posts() {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-userProfile">
          <img src={avatar} />
          <h6>
            desperate_effort • <span>1d</span>
          </h6>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className="post-header-more" />
      </div>
      <div className="post-image">
        <img src="https://images.unsplash.com/photo-1514773994089-a0072e20d2af?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR5bmFtaWN8ZW58MHx8MHx8fDA%3D" />
      </div>
      <div className="post-footer">
        <div className="post-footerIcons">
          <div className="post-iconsMain">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <FontAwesomeIcon icon={faComment} className="icon" />
            <FontAwesomeIcon icon={faShare} className="icon" />
          </div>
          <div className="post-iconSave">
            <FontAwesomeIcon icon={faBookmark} className="icon" />
          </div>
        </div>
        <div className="post-footer-likedNumber">
          <h6>Liked by 2k people.</h6>
        </div>
      </div>
    </div>
  );
}
