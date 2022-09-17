import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';


export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={css.wrap}>
      Enter name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
Filter.propTypes = {
  filter: PropTypes.string,
  onchangeFilter: PropTypes.func,
};