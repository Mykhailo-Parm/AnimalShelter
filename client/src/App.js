import './App.css';
import Header from "./components/Header/Header";
import {Container, Typography} from "@mui/material";
import AnimalList from "./components/AnimalList/AnimalList";
import {GlobalStateProvider} from "./context/GlobalStateContext";

function App() {
    return (
        <>
            <Header />
            <Container>
                <Typography align="center" variant="h2" mb={5}>Find your new best fur friend</Typography>
                <AnimalList/>
            </Container>
        </>
    );
}


export default App;
