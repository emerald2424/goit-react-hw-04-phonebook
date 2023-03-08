import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, onDelete }) => (
  <List>
    {filteredContacts.map(contact => (
      <ContactListItem
        contact={contact}
        onDelete={onDelete}
        key={contact.id}
      ></ContactListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })),
  onDelete: PropTypes.func
}