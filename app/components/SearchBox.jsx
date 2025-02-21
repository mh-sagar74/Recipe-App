import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Btn from "./Btn";
import InputArea from "./InputArea";

export default function SearchBox() {
  return (
    <div className="flex m-10 gap-3">
      <InputArea label="Search Recipe" />
      <Btn
        label="SEARCH"
        icon={<SearchRoundedIcon />}
        variant="contained"
        color={"error"}
      />
    </div>
  );
}
