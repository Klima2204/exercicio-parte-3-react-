import { Grid, useMediaQuery } from '@mui/material';
import PlantCard from '../molecules/PlantCard';

export default function PlantGrid({ plants }) {
  // Define breakpoints
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:960px)');
  const columns = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Grid container spacing={2}>
      {plants.map((plant) => (
        <Grid item xs={12 / columns} key={plant.id}>
          <PlantCard plant={plant} />
        </Grid>
      ))}
    </Grid>
  );
}
