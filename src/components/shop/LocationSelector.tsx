import { useState } from 'react';
import Select from '../ui/Select';

const countries = [
  { label: 'USA', value: 'usa', cities: [
    { label: 'New York', value: 'ny', neighborhoods: ['Manhattan', 'Brooklyn'] },
    { label: 'Los Angeles', value: 'la', neighborhoods: ['Hollywood', 'Venice'] },
  ]},
  { label: 'UK', value: 'uk', cities: [
    { label: 'London', value: 'london', neighborhoods: ['Chelsea', 'Camden'] },
  ]},
];

const LocationSelector = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const selectedCountry = countries.find(c => c.value === country);
  const selectedCity = selectedCountry?.cities.find(c => c.value === city);

  return (
    <div className="mb-4 space-y-2">
      <Select
        label="Country"
        value={country}
        onChange={setCountry}
        options={countries.map(c => ({ label: c.label, value: c.value }))}
      />
      {country && (
        <Select
          label="City"
          value={city}
          onChange={setCity}
          options={selectedCountry?.cities.map(c => ({ label: c.label, value: c.value })) || []}
        />
      )}
      {city && (
        <Select
          label="Neighborhood"
          value={neighborhood}
          onChange={setNeighborhood}
          options={selectedCity?.neighborhoods.map(n => ({ label: n, value: n })) || []}
        />
      )}
    </div>
  );
};

export default LocationSelector; 