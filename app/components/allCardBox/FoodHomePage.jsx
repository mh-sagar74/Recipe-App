"use client";

import { Box, Grid2, Typography } from "@mui/material";
import FoodCard from "../food-card/FoodCard";
import SearchBox from "../search-box/SearchBox";
import getSearchedRecipes from "@/lib/getSearchedRecipes";
import { useState } from "react";
import ReadMorePopup from "../food-card/ReadMorePopup";

export default function FoodHomePage() {
  const [searchItem, setSearchItem] = useState("");
  const [allData, setAllData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [searchResult, setSearchResult] = useState("Search Recipes!");

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    if (searchItem) {
      const getDataBySearch = await getSearchedRecipes(searchItem);
      if (getDataBySearch.length > 0) {
        setSearchResult("Recipe available " + getDataBySearch.length);
      } else {
        setSearchResult("Sorry, no such recipe found! Please try another.");
      }
      setAllData(getDataBySearch);
    } else {
      setSearchResult("Search Recipes!");
      setAllData([]);
    }
  };

  return (
    <Box>
      <SearchBox
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        onSubmit={handleSubmitBtn}
      />
      <Typography className="bg-gray-700 pt-2 pb-2 text-center rounded-sm text-white">
        <span className="text-2xl font-semibold">{searchResult}</span>
      </Typography>
      <Grid2 container rowSpacing={4} columnSpacing={4}>
        {allData.map((data) => (
          <span key={data.id}>
            <FoodCard
              recipe={data}
              readMore={readMore}
              setReadMore={setReadMore}
              allData={allData}
              setSelectedData={setSelectedData}
            />
          </span>
        ))}
        {readMore ? (
          <ReadMorePopup
            setReadMore={setReadMore}
            selectedData={selectedData}
          />
        ) : null}
      </Grid2>
    </Box>
  );
}
