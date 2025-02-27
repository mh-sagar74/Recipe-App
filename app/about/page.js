import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
  return (
    <Box>
      <Typography className="text-center p-4">
        <span className="text-4xl font-semibold text-red-500">About</span>
      </Typography>
      <Box>
        <Typography className="flex justify-between bg-gray-700 text-white p-3 rounded-sm">
          <span className="text-2xl">Developer</span>
          <span className="text-2xl">
            <Link
              href={
                "https://www.linkedin.com/in/mominul-haque-sagar-3a270123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
            >
              Mominul Haque
            </Link>
          </span>
        </Typography>
        <Typography className="flex justify-between p-3 rounded-sm text-gray-800">
          <span className="text-2xl font-semibold">App Name</span>
          <span className="text-2xl font-semibold">Recipe App</span>
        </Typography>
        <Typography className="flex justify-between p-3 rounded-sm text-gray-800">
          <span className="text-2xl font-semibold">Purpose</span>
          <span className="text-2xl font-semibold">Recipe Library</span>
        </Typography>
        <Typography className="flex justify-between p-3 rounded-sm text-gray-800">
          <span className="text-2xl font-semibold">Published on</span>
          <span className="text-2xl font-semibold">Thu, 27 Feb, 2025</span>
        </Typography>
      </Box>
    </Box>
  );
}
