import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';

const exercises = [
  { id: 'article', label: 'Der, Die, Das' },
  { id: 'plural', label: 'Plural' },
  { id: 'perfect', label: 'Perfekt' },
  { id: 'simple-past', label: 'Präteritum' },
  { id: 'all', label: 'Alles!' }
];

const style = {
  container: { textAlign: 'center' },
  title: { margin: '8vh 0 ' },
  button: { display: 'block', margin: '3vh 18vw' }
};

export default () => (
  <div style={style.container}>
    <Text style={style.title}>Was möchtest du üben ?</Text>
    {exercises.map(({ id, label }) => {
      return (
        <RaisedButton
          key={id}
          label={label}
          style={style.button}
          primary={true}
        />
      );
    })}
  </div>
);