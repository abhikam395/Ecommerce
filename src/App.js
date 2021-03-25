import './App.css';
import NavbarComponent from './components/NavbarComponent';
import SliderLayout from './layouts/SliderLayout';
import CollectionLayout from './layouts/CollectionLayout';
import CategoryLayout from './layouts/CategoryLayout';
import ProductSection from './layouts/ProductSection';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SliderLayout />
      <CollectionLayout />
      <CategoryLayout />
      <ProductSection />
    </div>
  );
}

export default App;
