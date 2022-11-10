import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";
import background from "../img/whale.jpg";

const CEIndex = () => {
  return (
    <div className="backgroundgojira" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' }}>
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "3%" }}>
        <Typography style={{ textAlign: "center" }} variant="h1">
          Conheça Gojira
        </Typography>
        <Typography style={{ textAlign: "center" }} variant="h4">
          Watch out for flying whales!
        </Typography>
      </Container>
    </>
    </div>
  );
};

export default CEIndex;
