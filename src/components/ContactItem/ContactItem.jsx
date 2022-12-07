import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
