import React, { useState } from 'react';
import './Todolist.css';
const ItemList = () => {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);
 
 
  const addItem = () => {

      setItemsList([...itemsList, item]);
     // setItem('');
   
  };
 
  const deleteItem = (index) => {
    const updatedList = [...itemsList];
    updatedList.splice(index, 1);
    setItemsList(updatedList);
  };
  
 
  return (
    <div className="div_main">
      <h2>ToDo - ITEM</h2>
      <table>
        {itemsList.map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
            <td><button onClick={() => deleteItem(index)}>X</button></td>
          </tr>
        ))}
      </table>
      <div className='inputwrap'>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={addItem}>Add Item</button>
      </div>
     
    </div>
  );
};
 
export default ItemList;