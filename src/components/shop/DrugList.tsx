import DrugCard from './DrugCard';

const drugs = [
  { id: 1, name: 'Testosterone', amount: '10ml', price: 50, enabled: true },
  { id: 2, name: 'Dianabol', amount: '100 tabs', price: 40, enabled: false },
  { id: 3, name: 'Trenbolone', amount: '10ml', price: 80, enabled: true },
];

const DrugList = () => (
  <div className="space-y-3 mt-4">
    {drugs.map(drug => (
      <DrugCard key={drug.id} drug={drug} />
    ))}
  </div>
);

export default DrugList; 