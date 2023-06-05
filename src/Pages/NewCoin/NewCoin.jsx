import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './NewCoin.css';
 
const Login = () => {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)
    const [price, setPrice] = useState("")
    const [priceError, setPriceError] = useState(false)
    const [marketcap, setMarketcap] = useState("")
    const [marketcapError, setMarketcapError] = useState(false)
    const [totalVol, setTotalVol] = useState("")    
    const [totalVolError, setTotalVolError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setNameError(false)
        setPriceError(false)
        setMarketcapError(false)
        setTotalVolError(false)
 
        if (name == '') { setNameError(true) }
        if (price == '') { setPriceError(true) }
        if (marketcap == '') { setMarketcapError(true) }
        if (totalVol == '') { setTotalVolError(true) }
 
        if (name && totalVol) {
            console.log(name, totalVol)
        }
    }
     
    return ( 
        <React.Fragment >
        <div className="container_form">
        <form autoComplete="off" onSubmit={handleSubmit} >
            <h2>Set your Crypo Coin</h2>
                <TextField 
                    label="Crypto Name"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"                    
                    defaultValue="Default Value"
                    sx={{mb: 3}}
                    fullWidth
                    value={name}
                    error={nameError}
                 />
                 <TextField 
                    label="Crypto Price"
                    onChange={e => setPrice(e.target.value)}
                    required
                    variant="outlined"
                    type="number"
                    color="secondary"                    
                    defaultValue="Default Value"
                    sx={{mb: 3}}
                    fullWidth
                    value={price}
                    error={priceError}
                 />
                 <TextField 
                    label="Crypto Market Cap"
                    onChange={e => setMarketcap(e.target.value)}
                    required
                    variant="outlined"
                    type="number"
                    color="secondary"                    
                    defaultValue="Default Value"
                    sx={{mb: 3}}
                    fullWidth
                    value={marketcap}
                    error={marketcapError}
                 />
                <TextField 
                    label="Crypto Total Volume"
                    onChange={e => setTotalVol(e.target.value)}
                    required
                    variant="outlined"
                    type="number"
                    color="secondary"                    
                    defaultValue="Default Value"
                    sx={{mb: 3}}
                    fullWidth
                    value={totalVol}
                    error={totalVolError}
                 />
                 <TextField 
                    label="Crypto Total Volume"
                    onChange={e => setTotalVol(e.target.value)}
                    required
                    
                    
          multiline
          maxRows={4}
                    color="secondary"                    
                    defaultValue="Default Value"
                    sx={{mb: 3}}
                    fullWidth
                    value={totalVol}
                    error={totalVolError}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
        <small>Need an account? <Link to="/">Register here</Link></small>
        </div>
        </React.Fragment>
     );
}
 
export default Login;