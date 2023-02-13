import { useNavigate } from "react-router-dom";
import {
  CategoryItemContainer,
  CategoryBodyContainer,
  BackgroundImage,
} from "./category-item.styles.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>shop now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
