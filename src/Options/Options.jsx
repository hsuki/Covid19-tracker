import React from 'react';
import classes from './Options.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';

const Options = ({ handleChange, states }) => {
  return (
    <div className={classes.Container}>
      <FormControl className={classes.FormControl}>
        <NativeSelect
          defaultValue=''
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value=''>National</option>
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <div>Data Type</div>
    </div>
  );
};

export default Options;
