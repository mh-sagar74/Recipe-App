import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Btn from "../Btn";
import InputArea from "../InputArea";

export default function SearchBox() {
  return (
    <form className="flex gap-3 mb-[40px] mt-[40px]">
      <InputArea label="Search Recipe" />
      <Btn
        label="SEARCH"
        icon={<SearchRoundedIcon />}
        variant="contained"
        color={"error"}
      />
    </form>
  );
}
