import "./Suggestions.css";
import avatar from "../../assets/avatar.png";

export default function SuggestionsComponent() {
  return (
    <div className="suggestions-container">
      <div className="suggestions-title">Suggestions for you</div>
      <div className="suggestions-usernames">
        <div className="suggestions-username">
          <div className="username-left">
            <img src={avatar} alt="" />
            <div className="username-info">
              <span className="username">TomatoCultivator</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </div>
  );
}
