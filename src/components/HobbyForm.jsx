import { useState } from 'react';

export function HobbyForm({ onAdd }) {
  const [name, setName] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !minutes) return;
    
    onAdd({
      name,
      minutes: parseInt(minutes, 10),
      date: new Date().toISOString(),
    });
    
    setName('');
    setMinutes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Hobby name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <button type="submit">Add Time</button>
    </form>
  );
}
