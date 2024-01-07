import "./sidebar.css";
import Category from "./Sidebar/Category/Category";
import Price from "./Sidebar/Price/Price";
import Colors from "./Sidebar/Colors/Colors";

function Sidebar({ handleChange }) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1 className="emoji">🛒</h1>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </div>
  );
}

export default Sidebar;
