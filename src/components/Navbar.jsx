import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from './';
import { logo } from '../utils/constants';

const  Navbar = () => (
    <Stack direction="row" alignment="center" p={2} sx={{ postition: 'sticky', background: "#000", top: 0, justifyContent: 'space-between'}} >
    <Link to="/" style={{display: "flex", alignItems: "center", }}>
     <img src={logo} alt="logo" height={45} /> 
    </Link>
    <SearchBar />
    </Stack>
  );


export default Navbar 