import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { Link } from "react-router";

const CategoryCard = ({ id, color, technology, icon }) => {
  return (
    <Card className="bg-zinc-900 hover:bg-zinc-700 rounded-2xl">
      <CardContent>
        <Box className="flex items-center gap-4">
          <div>
            <img
              style={{ backgroundColor: color }}
              src={icon}
              className={`w-15 h-15 rounded-[10px]`}
              alt={technology}
            />
          </div>
          <p className="text-[1.5rem] text-white">{technology}</p>
        </Box>
      </CardContent>

      <CardActions>
        <Button className="capitalize text-white hover:text-purple-600">
          <Link to={`/card/${technology}`}>Начать</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CategoryCard;
