"use client";

import { Box, Grid2 } from "@mui/material";
import FoodCard from "../food-card/FoodCard";
import SearchBox from "../search-box/SearchBox";
import getSearchedRecipes from "@/lib/getSearchedRecipes";
import { useState } from "react";

export default function FoodHomePage() {
  const [searchItem, setSearchItem] = useState("");
  const [allData, setAllData] = useState([]);

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    if (searchItem) {
      const getDataBySearch = await getSearchedRecipes(searchItem);
      return setAllData(getDataBySearch);
    }
  };

  return (
    <Box>
      <SearchBox
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        onSubmit={handleSubmitBtn}
      />
      <Grid2 container rowSpacing={4} columnSpacing={4}>
        {allData.map((data) => (
          <FoodCard key={data.id} recipe={data} />
        ))}
      </Grid2>
    </Box>
  );
}
