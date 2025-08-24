import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

export async function Loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

// create a loader.
// provide the loader.
// provide the data into the page.
