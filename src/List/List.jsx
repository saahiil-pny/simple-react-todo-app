import React, { useState } from "react";
import {
  List,
  ListItem,
  ListContainer,
  ListInputForm,
  ListInput,
  ListButton,
} from "./List.styled";

export const ListComponent = () => {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.length > 0) {
      setItemsList([...itemsList, item]);
      setItem("");
    }
  };

  const handleDelete = (index) => {
    const newItemsList = [...itemsList];
    newItemsList.splice(index, 1);
    setItemsList(newItemsList);
  };

  return (
    <ListContainer>
      <ListInputForm onSubmit={handleSubmit}>
        <ListInput type="text" value={item} onChange={handleChange} />
        <ListButton disabled={item.length <= 0} type="submit">
          Add
        </ListButton>
      </ListInputForm>
      <List>
        {itemsList.map((item, index) => (
          <ListItem onClick={() => handleDelete(index)} key={index}>
            {item}
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};
