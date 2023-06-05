import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { useNavigate } from "react-router-dom";
  // import { CryptoState } from "../CryptoContext";
  import logo from "../assets/Coinverse2.png";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "#000",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
      margin: "0px"
    },
    logo: {
      maxWidth: "250px",
      padding: "10px 10px 0px 0px",
    }
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    // const { currency, setCurrency } = CryptoState();
  
    const navigate = useNavigate();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate(`/`)}
                variant="h6"
                className={classes.title}
              >
                <img
                  src={logo}
                  alt='Logo Coinverse'                  
                  className={classes.logo}
                />
              </Typography>
              {/* <Button color="inherit">Login</Button> 
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select> */}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;