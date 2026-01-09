import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = window.localStorage.getItem('items');

    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(
    () => window.localStorage.setItem('items', JSON.stringify(items)),
    [items],
  );

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

  const handleClearList = function () {
    const confirm = window.confirm(
      'Are you sure you want to delete all items?',
    );

    if (confirm) setItems([]);
  };

  return (
    <div className='app'>
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
