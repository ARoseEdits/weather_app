// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Weather from './Weather.jsx'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'your_api_key_here'; // Replace with your actual API key
//   const city = 'your_city_here';

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then(data => setWeatherData(data))
  //     .catch(error => console.error("Error fetching the weather data:", error));
  // }, []);

function App() {
  return (
    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Local Weather App
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
    <Weather city="London" />
  </Box>


   <TableContainer component={Paper}>
   <Table aria-label="current weather">
     <TableHead>
       <TableRow>
         <TableCell>City</TableCell>
         <TableCell align="center">Temperature (°C)</TableCell>
         <TableCell align="center">Weather</TableCell>
         <TableCell align="center">Humidity (%)</TableCell>
         <TableCell align="center">Wind Speed (m/s)</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {weatherData ? (
         <TableRow>
           <TableCell>{weatherData.name}</TableCell>
           <TableCell align="center">{weatherData.main.temp.toFixed(1)}</TableCell>
           <TableCell align="center">
             <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
             {weatherData.weather[0].main}
           </TableCell>
           <TableCell align="center">{weatherData.main.humidity}</TableCell>
           <TableCell align="center">{weatherData.wind.speed}</TableCell>
         </TableRow>
       ) : (
         <TableRow>
           <TableCell colSpan={5} align="center">Loading...</TableCell>
         </TableRow>
       )}
     </TableBody>
   </Table>
 </TableContainer>
 </div>
);
};


export default App
