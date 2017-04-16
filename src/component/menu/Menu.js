import React from 'react';

export default () => {
  const exercises = ['DER / DIE / DAS', 'Perfekt'];
  
  return (
    <div>{exercises.map(exercise => <button key={exercise}>{exercise}</button>)}</div>
  );
};