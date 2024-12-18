import { HobbyForm } from './components/HobbyForm';
import { TimeList } from './components/TimeList';
import { WeeklySummary } from './components/WeeklySummary';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [entries, setEntries] = useLocalStorage('hobby-entries', []);

  const handleAddEntry = (entry) => {
    setEntries(prev => [entry, ...prev]);
  };

  return (
    <div>
      <h1>Hobby Time Tracker</h1>
      <HobbyForm onAdd={handleAddEntry} />
      <WeeklySummary entries={entries} />
      <TimeList entries={entries} />
    </div>
  );
}
