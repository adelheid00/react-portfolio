import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const ContactPageComponent = () => {
  const name = "Jayson M. Quilar";
  const email = "jemaqii.gg@gmail.com";

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1d] p-6">
      {/* Greeting */}
      <Typography variant="h4" className="mb-8 font-bold text-white">
        Get in Touch
      </Typography>

      {/* Contact Card */}
      <Card className="bg-primary-dark text-white max-w-md w-full rounded-lg shadow-lg">
        <CardContent>
          <Typography variant="h6" className="mb-4 font-semibold">
            {name}
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <LanguageIcon className="text-blue-400" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="https://www.linkedin.com/in/jayson-quilar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LinkedIn Profile
                  </Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <EmailIcon className="text-red-400" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="mailto:jemaqii.gg@gmail.com"
                    className="text-red-400 hover:underline"
                  >
                    {email}
                  </Link>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactPageComponent;
