import { ListItem } from "./ContactListItem.styled";
import PropTypes from 'prop-types';

export const ContactListItem = ({contact, onDelete}) => {
  return (
    <ListItem key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
  onDelete: PropTypes.func
}