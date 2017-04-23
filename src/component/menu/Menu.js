import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';

const style = {
  container: { textAlign: 'center' },
  title: { margin: '8vh 0 ' },
  button: { display: 'block', margin: '3vh 18vw' }
};


const EXERCISES = ['Der, Die, Das', 'Plural', 'Perfekt', 'Präteritum', 'Alles!'];

export default () => {

  return (
    <div style={style.container}>
      <Text style={style.title}>Was möchtest du üben ?</Text>
      {
        EXERCISES.map(exercise => {
          return <RaisedButton key={exercise} label={exercise} style={style.button} primary={true} />;
        })
      }
    </div>
  );
};