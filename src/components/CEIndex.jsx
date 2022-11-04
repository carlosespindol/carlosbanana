import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";

const CEIndex = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Typography style={{ textAlign: "center" }} variant="h1">
          Conheça Gojira
        </Typography>
        <Typography style={{ textAlign: "justify" }} variant="p">
          Watch out for flying whales!
        </Typography>
      </Container>
    </>
  );
};

export default CEIndex;
