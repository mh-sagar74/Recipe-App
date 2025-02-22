import { Box } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box className="flex gap-5 justify-center mt-[300px] mb-[300px]">
      <Box>404</Box>
      <Box className="border-l-2 border-black h-6"></Box>
      <Box>Page Not Found</Box>
    </Box>
  );
}
