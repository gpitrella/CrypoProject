import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import imageBackground from "../../assets/BackgroundBanner.webp";
// import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url( ${ imageBackground } )`,
    backgroundSize: "cover"
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 110,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff"
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Coinverse
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize: "20px"              
            }}
          >
            Find all your Crypto Currency Information
          </Typography>
        </div>
        {/* <Carousel /> */} 
      </Container>
    </div>
  );
}

export default Banner;