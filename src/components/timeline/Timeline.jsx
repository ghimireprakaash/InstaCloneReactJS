import SuggestionsComponent from "../suggestions/SuggestionsComponent";
import "./Timeline.css";
import Posts from "./posts/Posts";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-left">
        <div className="timeline-posts">
          <Posts />
          <Posts />
        </div>
      </div>
      <div className="timeline-right">
        <SuggestionsComponent />
      </div>
    </div>
  );
}
