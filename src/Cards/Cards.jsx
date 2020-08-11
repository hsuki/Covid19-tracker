import React from 'react';
import classes from './Cards.module.css';
import CardComponent from './CardComponent/CardComponent';
import { Divider, Grid } from '@material-ui/core';

const Cards = ({
  currentUsData: { positive, recovered, death, lastModified },
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      className={classes.Container}
    >
      <Grid item className={classes.Item}>
        <CardComponent
          cardTitle='Confirmed'
          value={positive}
          lastModified={lastModified}
          description='Number of active cases'
          color='#0000ff'
        />
        <Divider />
      </Grid>
      <Grid item className={classes.Item}>
        <CardComponent
          cardTitle='Recovered'
          value={recovered}
          lastModified={lastModified}
          description='Number of recoveries'
        />
        <Divider />
      </Grid>
      <Grid item className={classes.Item}>
        <CardComponent
          cardTitle='Deaths'
          value={death}
          lastModified={lastModified}
          description='Number of deaths'
        />
      </Grid>
    </Grid>
  );
};

export default Cards;
