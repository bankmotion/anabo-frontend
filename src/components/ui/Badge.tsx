const Badge = ({ enabled }: { enabled: boolean }) => (
  <span className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${enabled ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-500'}`}>
    {enabled ? 'Available' : 'Unavailable'}
  </span>
);

export default Badge; 