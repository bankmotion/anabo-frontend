import type { FC } from 'react';

type Option = { label: string; value: string };

type SelectProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
};

const Select: FC<SelectProps> = ({ label, value, onChange, options }) => (
  <label className="block text-sm font-medium text-gray-700 mb-1">
    {label}
    <select
      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">Select {label}</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </label>
);

export default Select; 