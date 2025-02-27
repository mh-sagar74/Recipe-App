import { Box, Typography } from "@mui/material";
import Btn from "../Btn";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Image from "next/image";

export default function ReadMorePopup({ setReadMore, selectedData }) {
  const { name, ingredients, image, instructions } = selectedData;
  return (
    <Box
      className={`fixed inset-0 z-50 backdrop-brightness-50 flex justify-center items-center`}>
      <Box className={`bg-white p-10 rounded-md`}>
        <Box className="flex gap-10">
          <Box className="w-[400px]">
            <Image
              src={image}
              alt={name}
              height={0}
              width={0}
              unoptimized
              style={{ height: "auto", width: "auto", objectFit: "contain" }}
            />
            <Typography className="flex justify-left flex-col pt-5">
              <span className="text-xl pb-5">
                <span className="text-green-600 font-semibold">
                  Recipe Name :{" "}
                </span>
                {name}
              </span>
            </Typography>
          </Box>
          <Box className="w-[400px]">
            <span>
              <span className="text-green-600 font-semibold">
                Ingredients :{" "}
              </span>
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </span>
            <br />
            <br />
            <span className="text-green-600 font-semibold">
              Instructions :{" "}
            </span>
            <span>
              {instructions.map((item, i) => (
                <span key={i}>
                  <li>{item}</li>
                </span>
              ))}
            </span>
          </Box>
        </Box>
        <Btn
          label="CLOSE"
          icon={<CancelRoundedIcon />}
          color={"error"}
          onClick={() => setReadMore(false)}
        />
      </Box>
    </Box>
  );
}
