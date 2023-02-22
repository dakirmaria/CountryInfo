import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  linkWrapper: {
    textDecoration: "none",
    marginRight: "30px",
    color: "black"
  },
  unorderedListWrapper: {
    display: "flex",
    listStyle: "none"
  }
}));

export default useStyle;
