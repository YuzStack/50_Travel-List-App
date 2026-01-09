import { useState } from 'react';

export default function Form({ onAddItem }) {
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
      <div>
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
      </div>
    </form>
  );
}
