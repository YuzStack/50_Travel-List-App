export default function Item({
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
