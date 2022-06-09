import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import "./style.css";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Cards() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 350 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          jargonBody
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          jargonDef
        </Typography>
        <Typography variant="body2">
          Comment here.          
        </Typography>
      </CardContent>
      <CardActions>
        
        {/* <Button size="large"><ThumbUpIcon style={{ color: "black" }}/></Button>
        <Button size="large"><ThumbDownIcon style={{ color: "black" }}/></Button> */}
        <Button size="large"><DeleteIcon style={{ color: "black" }}/></Button>
        {/* <Button size="large"><SaveIcon style={{ color: "black" }}/></Button> */}

      </CardActions>
    </Card>
  );
}