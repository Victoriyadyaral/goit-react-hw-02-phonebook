import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    phoneNumberInputId = shortid.generate();

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value , id: shortid.generate()});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    }


    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
          <label htmlFor = {this.nameInputId}>
            Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange = {this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id = {this.nameInputId}
          />
           </label>
                
            <label htmlFor={this.phoneNumberInputId}>
            Number
            <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange = {this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id = {this.phoneNumberInputId}
        />       
           </label>
                
          <button
        //className={s.button}
          type="submit"
          >
          Add contact
          </button>
        </form>
        )
    }
}

export default Form;