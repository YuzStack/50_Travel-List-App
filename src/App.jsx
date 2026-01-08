import { useState } from 'react';

/* const initialItems = [
  {
    id: crypto.randomUUID(),
    description: 'Passports',
    quantity: 2,
    isPacked: false,
  },
  {
    id: crypto.randomUUID(),
    description: 'Socks',
    quantity: 12,
    isPacked: true,
  },
  {
    id: crypto.randomUUID(),
    description: 'Phones',
    quantity: 2,
    isPacked: false,
  },
]; */

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = function (item) {
    setItems(curItems => [...curItems, item]);
  };

  const handleDeleteItem = function (id) {
    setItems(curItems => curItems.filter(item => item.id !== id));
  };

  const handleCheckItem = function (id) {
    setItems(curItems =>
      curItems.map(item =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  };

  return (
    <div className='app'>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
      />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!description.trim()) return;

    const newItem = {
      id: crypto.randomUUID(),
      description,
      quantity,
      isPacked: false,
    };

    onAddItem(newItem);

    setDescription('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onCheckItem }) {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            {...item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({
  id,
  description,
  quantity,
  isPacked,
  onDeleteItem,
  onCheckItem,
}) {
  return (
    <li>
      <input
        type='checkbox'
        checked={isPacked}
        onChange={() => onCheckItem(id)}
      />
      <span style={isPacked ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
