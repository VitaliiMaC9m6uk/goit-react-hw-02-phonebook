const ListContacts = ({list}) => {    
    return (
      <ul>
        {list.map(contact => (
          
            <li key = {contact.id}>
              {contact.name} : {contact.number}
            <button
              onClick={console.log(`delete `)}
            >Delete</button>
            </li>
          
        ))}
      </ul>
    );
}
export default ListContacts;