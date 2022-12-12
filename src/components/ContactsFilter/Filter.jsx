import React from 'react';
import { nanoid } from 'nanoid';

import { Label } from './Filter.styled';

export function Filter({ filterValue, inputChange }) {
  const findInputId = nanoid();
  return (
    <>
      <Label htmlFor={findInputId}>
        Find contacts by name
        <input
          onChange={inputChange}
          value={filterValue}
          name="filter"
          type="text"
          placeholder="Input name to find"
        />
      </Label>
    </>
  );
}
