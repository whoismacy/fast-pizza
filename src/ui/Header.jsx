import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast Pizza Company</Link>
      <p>Shem</p>
      <SearchOrder />
    </header>
  );
};

export default Header;
