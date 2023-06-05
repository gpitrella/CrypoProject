import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage/CoinPage";
import Header from "./components/Header";
import NewCoin from "./Pages/NewCoin/NewCoin";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#fff",
    color: "000",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage/>} exact />
          <Route path="/newCoin" element={<NewCoin />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
