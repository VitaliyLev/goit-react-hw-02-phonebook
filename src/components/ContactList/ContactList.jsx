import React from 'react';

import { Button, Item, List } from './ContactList.styled';

export function ContactList({ contactsByRender, onDeleteContact }) {
  return (
    <>
      <ul>
        {contactsByRender.map(({ name, number, id }) => (
          <Item key={id}>
            {name}: {number}
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
          </Item>
        ))}
      </ul>
    </>
  );
}
