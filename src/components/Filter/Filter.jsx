import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';


export default function Filter({ filter, changeFilter }) {
  return (
    <label className={css.label }>
      <p className={css.text }>Enter some name </p>
      <input className={css.input}     
        type="text"
        value={filter}
        onChange={changeFilter} />
    </label>
  );
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};