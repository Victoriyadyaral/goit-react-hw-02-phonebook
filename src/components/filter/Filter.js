import React from 'react';
import PropTypes from 'prop-types';
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <div className = {s.filter}>
  <label className={s.label}>
   Find contacts by name 
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
  </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;