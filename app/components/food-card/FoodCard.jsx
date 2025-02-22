import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Btn from "../Btn";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";

export default function FoodCard({ foodImage, foodName, tag, recipe }) {
  return (
    <Box className="h-[460px] w-[350px] border-[2px] border-stone-500 rounded-[4px] transition duration-300 ease-in-out hover:border-red-600 hover:scale-105">
      <Box
        className={`bg-[url(@/public/beef.jpg)] bg-cover bg-center rounded-[4px]`}>
        <Image
          src={foodImage}
          alt={foodName}
          priority
          style={{
            width: "350px",
            height: "250px",
            objectFit: "contain",
            backdropFilter: "blur(6px)",
          }}
        />
      </Box>
      <Box className="m-4 flex flex-col text-left gap-3">
        <Typography>
          <span className="antialiased text-3xl font-semibold text-gray-800">
            {foodName.substring(0, 18)}...
          </span>
        </Typography>
        <Typography className="bg-green-500 text-white w-fit pl-1 pr-1 rounded-md">
          {tag}
        </Typography>
        <Typography>
          <span className="text-green-500 font-semibold">Recipe : </span>
          <span>{recipe.substring(0, 25)}...</span>
        </Typography>
        <Btn
          color={"inherit"}
          label="READ MORE"
          icon={<ReadMoreRoundedIcon />}
        />
      </Box>
    </Box>
  );
}
