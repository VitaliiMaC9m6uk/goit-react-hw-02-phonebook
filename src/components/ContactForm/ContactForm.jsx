const ContactForm = ({ name, valueName, submit, valueNumer }) => {
  return (
    <form onSubmit={submit}>
      <h2>Name</h2>
      <input
        onChange={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={valueName}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
      <h2>Number</h2>
      <input
        type="tel"
        value={valueNumer}
        onChange={name}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;