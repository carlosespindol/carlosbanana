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
  
  const CESocial = () => {
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
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                sx={{ width: 250, height: 250 }}
              />
              <Typography style={{ textAlign: "center" }} variant="h2">
                Facebook
              </Typography>
  
              <CardContent>
                <Tooltip title="Listen">
                  <Button
                    type="submit"
                    variant="outlined"
                    href="https://www.facebook.com/GojiraMusic/"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Siga
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
                src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                sx={{ width: 250, height: 250 }}
              />
              <Typography style={{ textAlign: "center" }} variant="h2">
                Twitter
              </Typography>
  
              <CardContent>
                <Tooltip title="Listen">
                  <Button
                    type="submit"
                    variant="outlined"
                    href="https://twitter.com/gojiramusic"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Siga
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
                src="https://t.ctcdn.com.br/eXQweorgzzB_ARsw7I9Bvp4O_Qg=/400x400/smart/filters:format(webp)/i489927.jpeg"
                sx={{ width: 250, height: 250 }}
              />
              <Typography style={{ textAlign: "center" }} variant="h2">
                Instagram
              </Typography>
  
              <CardContent>
                <Tooltip title="Listen">
                  <Button
                    type="submit"
                    variant="outlined"
                    href="https://www.instagram.com/gojiraofficial/"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Siga
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
                src="https://t.ctcdn.com.br/vGdlfPqw1P6t4B3FEdTg7OPNGxo=/400x400/smart/filters:format(webp)/i612632.png"
                sx={{ width: 250, height: 250 }}
              />
              <Typography style={{ textAlign: "center" }} variant="h2">
                Canal do Youtube
              </Typography>
  
              <CardContent>
                <Tooltip title="Listen">
                  <Button
                    type="submit"
                    variant="outlined"
                    href="https://www.youtube.com/gojira"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Inscreva-se!
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
                src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM"
                sx={{ width: 250, height: 250 }}
              />
              <Typography style={{ textAlign: "center" }} variant="h2">
                Spotify
              </Typography>
  
              <CardContent>
                <Tooltip title="Listen">
                  <Button
                    type="submit"
                    variant="outlined"
                    href="https://open.spotify.com/artist/0GDGKpJFhVpcjIGF8N6Ewt"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Siga, Ouça, Contemple!
                  </Button>
                </Tooltip>
              </CardContent>
            </Card>
  
          </Box>
        )}
      </Container>
    );
  };
  
  export default CESocial;
  