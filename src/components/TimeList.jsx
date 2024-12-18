import { format } from 'date-fns';

export function TimeList({ entries }) {
  return (
    <div>
      <h3>Recent Entries</h3>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name}: {entry.minutes} minutes on{' '}
            {format(new Date(entry.date), 'MMM d, yyyy')}
          </li>
        ))}
      </ul>
    </div>
  );
}
