import { Box, Grid2 } from "@mui/material";
import FoodCard from "./food-card/FoodCard";
import SearchBox from "./search-box/SearchBox";
import getAllRecipes from "@/lib/getAllRecipes";

export default async function FoodHomePage() {
  const allData = await getAllRecipes();
  return (
    <Box>
      <SearchBox />
      <Grid2 container rowSpacing={4} columnSpacing={4}>
        {allData.map((data) => (
          <FoodCard key={data.id} recipe={data} />
        ))}
      </Grid2>
    </Box>
  );
}
