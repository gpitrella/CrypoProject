import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  selectbutton: {
    border: "2px solid #a839ec",
    borderRadius: 5,
    maxWidth: "150px",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    textAlign: "center",
    cursor: "pointer",
    color: "#a839ec",
    "&:hover": {
      backgroundColor: "#a839ec",
      color: "#fff",
    },
    width: "22%",
    //   margin: 5,
  },
});

const SelectButton = ({ children, selected, onClick }) => {    

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton} 
      style={{
        backgroundColor: selected ? "#a839ec" : "", 
        color: selected ? "#fff" : "",
        fontWeight: selected ? 700 : 500, }}>
      {children}
    </span>
  );
};

export default SelectButton;