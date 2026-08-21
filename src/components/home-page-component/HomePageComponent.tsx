import { Box, Fade, Slide, Typography } from "@mui/material";
import AboutMeComponent from "../about-me-component/AboutMeComponent";
import NavigationBarComponent from "../navigation-bar-component/NavigationBarComponent";
import TechStackComponent from "../tech-stack-component/TechStackComponent";

const HomePageComponent = () => {
  return (
    <>
      <NavigationBarComponent />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          bgcolor: "#162456",
          p: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Slide direction="down" in timeout={600}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 12,
              mt: 20,
            }}
          >
            Greetings, Wonderer!
          </Typography>
        </Slide>

        <Fade in timeout={1000}>
          <Box sx={{ width: "100%" }}>
            <AboutMeComponent />
          </Box>
        </Fade>

        <Fade in timeout={1500}>
          <Box sx={{ width: "100%" }}>
            <TechStackComponent />
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default HomePageComponent;
