import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-zinc-900">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-white text-center text-[1.5rem]"
          >
            {`</>`} FrontendFlex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
