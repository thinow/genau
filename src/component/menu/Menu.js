import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default () => {
  const exercises = ['DER / DIE / DAS', 'Perfekt'];
  
  return (
    <div>{exercises.map(exercise => <FlatButton key={exercise} label={exercise} primary={true} />)}</div>
  );
};