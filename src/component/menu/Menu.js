import React from 'react';

export default () => {
  const exercises = ['DER / DIE / DAS', 'Perfekt'];
  
  return (
    <div>{exercises.map(exercise => <button>{exercise}</button>)}</div>
  );
};