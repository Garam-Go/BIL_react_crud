import React from 'react';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © React & Express Study `}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;