import { startOfWeek, endOfWeek, isWithinInterval } from 'date-fns';

export function WeeklySummary({ entries }) {
  const now = new Date();
  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);

  const weeklyEntries = entries.filter(entry => 
    isWithinInterval(new Date(entry.date), { start: weekStart, end: weekEnd })
  );

  const summary = weeklyEntries.reduce((acc, entry) => {
    acc[entry.name] = (acc[entry.name] || 0) + entry.minutes;
    return acc;
  }, {});

  return (
    <div>
      <h3>This Week's Summary</h3>
      <ul>
        {Object.entries(summary).map(([hobby, minutes]) => (
          <li key={hobby}>
            {hobby}: {minutes} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}
