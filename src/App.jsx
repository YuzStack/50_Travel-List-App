import { useState } from 'react';

const initialItems = [
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
];

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = function (item) {
    setItems(curItems => [...curItems, item]);
  };

  return (
    <div className='app'>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
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

    console.log(newItem);
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

function PackingList({ items }) {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ description, quantity, isPacked }) {
  return (
    <li>
      <span style={isPacked ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
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
