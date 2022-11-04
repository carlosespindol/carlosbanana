import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const CEAlbuns = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
      {isLoading ? (
        <div>Aguarde um momento..</div>
      ) : (
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://m.media-amazon.com/images/I/61SccsLVaJL._AC_SL1000_.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Terra Incognita - 2001
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/0OB9EsykpiyNnAWSuahzW4"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://i.discogs.com/OxV7A_SampZR52VQRvsV7EKB2-sEjUrFoYt0RNZoNcQ/rs:fit/g:sm/q:90/h:537/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODky/NjEtMTYwNTk5OTk3/NS01NTc2LmpwZWc.jpeg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Link - 2003
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/5Iu8zwiAb0aKznGs0P1Rrz"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://m.media-amazon.com/images/I/71PgZkUb-eL._AC_SX569_.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              From Mars to Sirius - 2005
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/0AvFF0HlQYvYKHaRURGZBs"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://i.discogs.com/SzbBFjgUmtK1QmimJ6S6sHvJohYXnI2o9jTlSvusF50/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4Mzkw/MTY5LTE2MTg5OTQ0/MzEtOTA5NC5qcGVn.jpeg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              The Way of All Flesh - 2008
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/4J79cxsmRqZbI0BKmNFDy2"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://m.media-amazon.com/images/I/71ZjgmL2IeL._AC_SL1425_.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              L'Enfant Sauvage - 2012
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/2WrU1VLLBaZy4k5s0p5jzt"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/pt/a/a9/Magma_-_%C3%81lbum.png"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Magma - 2016
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/7D7V6M05UIOTjLdqbwRX0w"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://m.media-amazon.com/images/I/81HT2Qjxe5L._AC_SL1425_.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Fortitude - 2021
            </Typography>

            <CardContent>
              <Tooltip title="Listen">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/3bmdzJRZ4DLRTiA6yBBQcI"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ouvir
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

        </Box>
      )}
    </Container>
  );
};

export default CEAlbuns;
