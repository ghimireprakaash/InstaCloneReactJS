import "./HomePage.css";
import SideNav from "./navigation/SideNav";
import Timeline from "./timeline/Timeline";

export default function HomePageComponent() {
  return (
    <div className="homepage">
      <div className="homepage-nav">
        <SideNav />
      </div>
      <div className="homepage-timeline">
        <Timeline />
      </div>
    </div>
  );
}
