import React from 'react';
import classes from './Options.module.css';
import { NativeSelect, FormControl, Box } from '@material-ui/core';

const Options = ({
  handleGraphSelectionChange,
  handleStateSelectionChange,
  states,
  isNational,
}) => {
  return (
    <div className={classes.Container}>
      <Box marginRight={5} className={classes.Box}>
        <FormControl className={classes.FormControl}>
          <NativeSelect
            defaultValue=''
            onChange={(e) => handleStateSelectionChange(e.target.value)}
          >
            <option value=''>National</option>
            {states.map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default Options;
