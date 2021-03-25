import './App.css';
import NavbarComponent from './components/NavbarComponent';
import SliderLayout from './layouts/SliderLayout';
import CollectionLayout from './layouts/CollectionLayout';
import CategoryLayout from './layouts/CategoryLayout';
import ProductsLayout from './layouts/ProductsLayout';
import FooterLayout from './layouts/FooterLayout';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SliderLayout />
      <CollectionLayout />
      <CategoryLayout />
      <ProductsLayout />
      <FooterLayout />
    </div>
  );
}

export default App;
