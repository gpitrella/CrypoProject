import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  Container,
  TableCell,
  LinearProgress,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
import { DataTest } from "../config/api";
import { useNavigate } from "react-router-dom";
// import { CryptoState } from "../CryptoContext";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles(() => ({
  row: {    
    backgroundColor: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f4f4f4",
    },
    fontFamily: "Montserrat",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "#9e00ff",
      fontSize: '18px'
    },
  }, 
    
}));

export default function CoinsTable() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = React.useState(0);

  // const { currency, symbol } = CryptoState();  
  
  const classes = useStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });


  const fetchCoins = async () => {
    setLoading(true);
    
    try {
      var { data } = await axios.get(CoinList());
    } catch (error) {
      console.error(error);
    }
    
    setCoins(data);
    setLoading(false);
  };  

  // useEffect(function () {
  //     const timeout = setTimeout(function () {
  //       fetchCoins();
  //       setCount(count + 1)
  //       console.log('ENTRE')
  //     }, 5000)
      
  //     return function ()  {
  //         clearTimeout(timeout)
  //     }
  // }, [count])

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center", maxWidth: "1230px" }}>
        <Typography
          variant="h4"
          style={{ margin: "20px 0px 30px", fontFamily: "Montserrat", textAlign: "left", fontSize: "24px" }}
        >
          Coinverse is the world's largest independent crypto data aggregator 
          that is integrated with more than 600 crypto exchanges and lists more than 10,000 coins.
        </Typography>
        <TextField
          label="Find a Crypto Currency ..."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
                <LinearProgress sx={{
                  backgroundColor: '#19f4ee',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#a839ec'
                  }}}/>
                                    
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ background: 'linear-gradient(to right, #19f4ee, #a839ec)' }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap", "Total Volume"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                        textTransform: "uppercase",
                        fontSize: "18px",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "#000" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right"
                          style={{
                            color: '#000',
                            fontWeight: 500,
                            fontSize: 18,
                          }}>
                          ${" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                            fontSize: 18,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right" style={{
                            color: '#000',
                            fontWeight: 500,
                            fontSize: 18,
                          }}>
                          ${" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell> 
                        <TableCell align="right" style={{
                            color: '#000',
                            fontWeight: 500,
                            fontSize: 18,
                          }}>
                          ${" "}
                          {numberWithCommas(
                            row.total_volume.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        /> 
      </Container>
    </ThemeProvider>
  );
}