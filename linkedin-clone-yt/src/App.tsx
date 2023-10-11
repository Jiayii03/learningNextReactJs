import "./css/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
