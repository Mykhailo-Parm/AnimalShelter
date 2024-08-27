import Header from "../../../components/Header/Header";
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <Header />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh"
                textAlign="center"
                padding={2}
            >
                <Typography variant="h1" component="h1" gutterBottom>
                    Oops! Something went wrong.
                </Typography>
                <Typography variant="h4" gutterBottom>
                    We're sorry, but there was an error processing your request.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Please try again later or contact support for assistance.
                </Typography>
                <Link to={"/"}>Home page</Link>
            </Box>
        </>
    )
}

export default ErrorPage;