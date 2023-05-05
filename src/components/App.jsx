import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ListContacts from "./ListContacts/ListContacts";
import Filter from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  hendleSaveFind = ({ target: { value } }) => {
    this.setState({
      filter: value,
    })
  };
  hendleFilter = () => {
    const filterContacts = this.state.contacts.filter(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .indexOf(this.state.filter.toLocaleLowerCase()) > -1      
    );
    return filterContacts;
  }  
  
  hendleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };
  hendleSubmit = e => {
    e.preventDefault();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          valueName={this.state.name}
          name={this.hendleChange}
          submit={this.hendleSubmit}
          valueNumer={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter filter={this.hendleSaveFind} />
        <ListContacts list={this.hendleFilter()} />

        {/* <ContactList /> */}
      </div>
    );
  }
}

