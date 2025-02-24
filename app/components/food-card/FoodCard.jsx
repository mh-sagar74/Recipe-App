"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Btn from "../Btn";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
import { useEffect, useState } from "react";

export default function FoodCard({ recipe }) {
  const [isLoading, setIsLoading] = useState(false);
  const { name, mealType, instructions, image } = recipe;

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box className="h-[460px] w-[350px] border-[2px] border-stone-500 rounded-[4px] transition duration-300 ease-in-out hover:border-red-600 hover:scale-105">
      <Box
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRadius: "4px",
        }}>
        <Image
          src={image}
          alt={"beef"}
          priority
          width={0}
          height={0}
          unoptimized
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
            {name.length > 15 ? name.slice(0, 15) + "..." : name}
          </span>
        </Typography>
        <Typography className="bg-green-500 text-white w-fit pl-1 pr-1 rounded-md">
          {mealType}
        </Typography>
        <Typography>
          <span className="text-green-500 font-semibold">Recipe : </span>
          <span>
            {instructions[0].length > 22
              ? instructions[0].slice(0, 22) + "..."
              : instructions[0]}
          </span>
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
