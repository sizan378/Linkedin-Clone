import Header from "./Header";
import "./styles.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

export default function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* sidebar */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Feed */}

      {/* widgets */}
    </div>
  );
}
