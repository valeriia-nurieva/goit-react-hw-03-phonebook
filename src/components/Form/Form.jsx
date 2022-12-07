import { Component } from 'react';
import PropTypes from 'prop-types';
import { FormStyled, FormLabel, FormInput, Button } from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
    contact: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
  };

  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { contacts } = this.props;
    const { name } = this.state;
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is is already in contacts.`);
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    );
  }
}

export default Form;
