import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List, Item } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem
              name={name}
              id={id}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
