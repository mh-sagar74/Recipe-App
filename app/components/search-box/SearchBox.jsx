import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Btn from "../Btn";
import InputArea from "../InputArea";

export default function SearchBox({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex gap-3 mb-[40px] mt-[40px]">
      <InputArea label="Search Recipe" value={value} onChange={onChange} />
      <Btn
        label="SEARCH"
        icon={<SearchRoundedIcon />}
        variant="contained"
        color={"error"}
        onClick={onSubmit}
      />
    </form>
  );
}
