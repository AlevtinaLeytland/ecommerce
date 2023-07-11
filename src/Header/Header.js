import "./Header.css";
import categories from "../fake-data/all-categories";

function Header(props) {
  console.log(props);
  return (
    <div className="header">
      <h1>Products</h1>
      <nav className="nav-menu">
        <ul className="categories-list">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => props.filter(category)}
              className="category"
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Header;
