import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/all';
import RaisedButton from 'material-ui/RaisedButton';
import Text from '../core/Text';

const exercises = [
  { category: 'article', label: 'Der, Die, Das' },
  { category: 'plural', label: 'Plural' },
  { category: 'perfect', label: 'Perfekt' },
  { category: 'simple-past', label: 'Präteritum' },
  { category: 'all', label: 'Alles!' }
];

const style = {
  container: { textAlign: 'center' },
  title: { margin: '8vh 0 ' },
  button: { display: 'block', margin: '3vh 18vw' }
};

const mapProps = (state) => ({});

const mapCallbacks = (dispatch) => ({
  onButtonClick: (category) => dispatch({ type: actions.GET_QUESTION_REQUEST, category })
});

export default connect(mapProps, mapCallbacks)(({ onButtonClick }) => (
  <div style={style.container}>
    <Text style={style.title}>Was möchtest du üben ?</Text>
    {exercises.map(({ category, label }) => {
      return (
        <RaisedButton
          key={category}
          label={label}
          onClick={() => onButtonClick(category)}
          primary={true}
          style={style.button}
        />
      );
    })}
  </div>
));