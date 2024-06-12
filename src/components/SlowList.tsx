import { useState } from "react";

const array = new Array(10000).fill().map((_, i) => ({ id: i, value: "" }));

const ListItem = ({ id }) => {
  return <li>{id}</li>;
};

const SlowList = () => {
  const [items, setItems] = useState(array);

  const updateItems = () => {
    setItems((prevItems) => prevItems.slice(1));
  };

  return (
    <div>
      <button onClick={updateItems}>remove first item</button>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default SlowList;
