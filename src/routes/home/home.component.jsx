import { Outlet } from "react-router-dom";
import CategoriesDirectory from "../../components/categories-directory/categories.component";

const Home = () => {
  return (
    <div>
      <CategoriesDirectory />
      <Outlet />
    </div>
  );
};

export default Home;
