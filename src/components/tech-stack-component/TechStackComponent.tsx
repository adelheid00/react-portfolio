import { Box, Button, Divider } from "@mui/material";

const TechStackComponent = () => {
  const techItems = [
    {
      label: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { label: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      label: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { label: "Node.js", link: "https://nodejs.org/" },
    { label: "React", link: "https://reactjs.org/" },
    { label: "Git", link: "https://git-scm.com/" },
    { label: "GitHub", link: "https://github.com/" },
    { label: "Tailwind", link: "https://tailwindcss.com/" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0a192f",
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
        mb: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        flexWrap: "wrap",
      }}
    >
      {techItems.map((item, index) => (
        <>
          <Button
            variant="contained"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "#1e293b",
              color: "#ffffff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#334155",
              },
            }}
          >
            {item.label}
          </Button>
          {index < techItems.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "#334155", height: 24 }}
            />
          )}
        </>
      ))}
    </Box>
  );
};

export default TechStackComponent;
