import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      {/* line-spacing */}
      <Link to="/" className="tracking-[5px]">
        Fast Pizza Company
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
