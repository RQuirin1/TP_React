import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router";

export const Page1 = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate(-1)
    }

    return (
        <div>
            <Container>
                <Typography variant={"h3"} align = {"center"}>
                    Page 1
                </Typography>
                <Typography variant={"h3"} align = {"center"}>
                    <Button
                        variant = {"contained"}
                        size = {"small"}
                        onClick = {() => {
                            goToHome()
                        }}>
                        Home
                    </Button>
                </Typography>
            </Container>


        </div>
    )
}