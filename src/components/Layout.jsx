import { Outlet, Link } from "react-router-dom";
import "../index.css";

const links = [
  { path: "/shop", label: "Tienda", image: "coin.svg" },
  { path: "/inventory", label: "Inventario", image: "chest.svg" },
  { path: "/combat", label: "Combate", image: "sword.svg" },
  { path: "/agriculture", label: "Agricultura", image: "plant.svg" },
  { path: "/town", label: "Pueblo", image: "town.svg" },
  { path: "/chop", label: "Tala", image: "log.svg" },
  { path: "/fishing", label: "Pesca", image: "fish.svg" },
  { path: "/fire", label: "Dominio del fuego", image: "campfire.svg" },
  { path: "/cook", label: "Cocina", image: "cook.svg" },
  { path: "/mine", label: "Minar", image: "pickaxe.svg" },
  { path: "/smithy", label: "Herreria", image: "anvil.svg" },
];

const Layout = () => {
  return (
    <div id="App">
      <div id="Aside">
        <ul>
          {links.map(({ path, label, image }) => (
            <li key={path}>
              <Link to={path} className="AppLink">
                <img src={image} alt={label} className="LinkImage" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
