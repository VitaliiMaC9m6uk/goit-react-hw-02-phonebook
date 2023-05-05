const ListContacts = ({list}) => {    
    return (
      <ul>       
        {list.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>
        ))}        
      </ul>
    );
}
export default ListContacts;