import React from 'react';
import classes from './CardComponent.module.css';
import { Box, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const CardComponent = ({
  cardTitle,
  value,
  lastModified,
  description,
  color,
}) => {
  return (
    <div className={classes.Container}>
      <Box marginTop={7} marginBottom={7}>
        <Typography
          style={{ marginTop: '15px' }}
          color='textSecondary'
          variant='h6'
        >
          {cardTitle}
        </Typography>
      </Box>
      <Box>
        <Typography variant='h3' component='h2'>
          {/* <CountUp start={0} end={value} duration={0.7} separator=',' /> */}
          {value ? parseInt(value, 10).toLocaleString() : 'N/A'}
        </Typography>
      </Box>
      <Box marginTop={10}>
        <Typography color='textSecondary' variant='h6'>
          {new Date(lastModified).toDateString()}
        </Typography>
      </Box>
      <Box marginTop={3} marginBottom={3}>
        <Typography variant='body1' component='p'>
          {description}
        </Typography>
      </Box>
    </div>
  );
};

export default CardComponent;
