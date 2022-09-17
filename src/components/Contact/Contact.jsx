import PropTypes from 'prop-types';
import { Item, Button } from './Contact.styled';


export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <p> {name} : {number}</p>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};