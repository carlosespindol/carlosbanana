import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";

const CEWiki = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Typography style={{ textAlign: "center" }} variant="h2">
          About Gojira!
        </Typography>
        <Typography style={{ textAlign: "justify" }} variant="p">
        Gojira é uma banda de death metal progressivo francesa formada em 1996 em Baiona, França. Formado inicialmente com o nome de Godzilla, a banda alterou o nome em 2001.
        Gojira é composto pelo vocalista, guitarrista e compositor Joe Duplantier, seu irmão mais novo e baterista Mario Duplantier, Christian Andreu como segundo guitarrista, e 
        Jean-Michel Labadie como baixista, formação esta que é a mesma desde que a banda mudou de nome. A banda é conhecida por ter letras que tratam da natureza, espiritualidade, 
        vida e morte. Atualmente o Gojira é uma das principais bandas do metal moderno ao lado de nomes como: Slipknot, Opeth, Lamb of God e Mastodon.
        </Typography>
      </Container>
    </>
  );
};

export default CEWiki;
