import Button from '../ui/Button';
import Badge from '../ui/Badge';

type Drug = {
  id: number;
  name: string;
  amount: string;
  price: number;
  enabled: boolean;
};

const DrugCard = ({ drug }: { drug: Drug }) => (
  <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3 shadow-sm">
    <div>
      <div className="font-semibold text-lg text-blue-700">{drug.name}</div>
      <div className="text-xs text-gray-500">{drug.amount}</div>
      <div className="text-pink-500 font-bold mt-1">${drug.price}</div>
      <Badge enabled={drug.enabled} />
    </div>
    <Button disabled={!drug.enabled} onClick={() => alert('Added to cart!')}>Add</Button>
  </div>
);

export default DrugCard; 