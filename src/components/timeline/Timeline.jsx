import SuggestionsComponent from "../suggestions/SuggestionsComponent";
import "./Timeline.css";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-left">Timeline</div>
      <div className="timeline-right">
        <SuggestionsComponent />
      </div>
    </div>
  );
}
