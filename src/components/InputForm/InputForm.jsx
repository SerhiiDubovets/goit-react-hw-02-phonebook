import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { AddForm, AddFormLabel, AddFormInput, AddFormButton } from "./InputForm.styled";


class inputForm extends Component {

   state = {
      name: '',
      number: '',
    };

    hendelChange = (e) => {
      const {name, value} = e.currentTarget
      this.setState({[name]: value})
    };
  
    changeSubmit = (e) => {
      e.preventDefault()

      this.props.onSubmit(this.state)
      this.reset()
    };

  reset = () => {this.setState({
   name: '',
   number: '',
 })};
 
 nameId = nanoid();
 phoneId = nanoid();

    render(){
      const {number, name} = this.state;

      return (
      <AddForm onSubmit={this.changeSubmit}>
      <AddFormLabel htmlFor={this.nameId}>name
      <AddFormInput
      id={this.nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name} onChange={this.hendelChange}
      />
      </AddFormLabel>
     <AddFormLabel htmlFor={this.phoneId}>phone
     <AddFormInput
     id={this.phoneId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number} onChange={this.hendelChange}
      />
     </AddFormLabel>
      
      <AddFormButton type="submit">Add contact</AddFormButton>
    </AddForm>)
    }
};

export default inputForm;