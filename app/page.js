import { Box, Grid2 } from "@mui/material";
import SearchBox from "./components/search-box/SearchBox";
import FoodCard from "./components/food-card/FoodCard";
import beef from "@/public/beef.jpg";
import recipeapp from "@/public/recipeapp.png";

export default function Home() {
  const recipe = [
    {
      foodImage: beef,
      foodName: "Chilly Beef",
      tag: "beef",
      recipe:
        "Beef is the best food in the world. Beef nis very famous in Bangladesh.",
    },
    {
      foodImage: recipeapp,
      foodName: "Recipe Logo",
      tag: "logo",
      recipe: "This is a good logo.",
    },
  ];
  return (
    <Box>
      <SearchBox />
      <Grid2 container rowSpacing={4} columnSpacing={4}>
        {recipe.map((item, i) => (
          <FoodCard
            key={i}
            foodImage={item.foodImage}
            foodName={item.foodName}
            tag={item.tag}
            recipe={item.recipe}
          />
        ))}
      </Grid2>
    </Box>
  );
}
