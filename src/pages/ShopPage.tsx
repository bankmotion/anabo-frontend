import MobileContainer from '../components/layout/MobileContainer';
import LocationSelector from '../components/shop/LocationSelector';
import DrugList from '../components/shop/DrugList';
import CartButton from '../components/shop/CartButton';

const ShopPage = () => (
  <MobileContainer>
    <h1 className="text-2xl font-bold text-center mb-4 text-pink-500">Anabolic Shop</h1>
    <LocationSelector />
    <DrugList />
    <CartButton />
  </MobileContainer>
);

export default ShopPage; 