import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router";

export const Home = () => {
    const navigate = useNavigate()

    const goToPage1 = () => {
        navigate(`/lienPage1`)
    }
    const goToPage2 = () => {
        navigate(`/lienPage2`)
    }

    return (
        <Container maxWidth={"sm"} sx = {{mt:5}}>
            <Box
                sx={{
                    p:4,
                    boxShadow:16,
                    borderRadius:2,
                    background:"background.paper"
                }}>

                <Typography variant = {"h3"} align ={"center"}>
                    Home
                </Typography>
                <Typography variant = {"h5"} align = {"center"}>
                    <Button
                        variant = {"contained"}
                        size = {"small"}
                        onClick = {() => {
                            goToPage1()
                        }}>
                        Page 1
                    </Button>
                    <span> </span>
                    <Button
                        variant = {"contained"}
                        size = {"small"}
                        onClick = {() => {
                            goToPage2()
                        }}>
                        Page 2
                    </Button>
                </Typography>

            </Box>
        </Container>
    )
}