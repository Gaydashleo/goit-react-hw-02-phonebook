import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onContactAdd({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}/>
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type='text'
            name='number'
            value={this.state.number}
            onChange={this.handleChange}/>
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
        
    )
  }
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactAdd:PropTypes.func.isRequired,
};