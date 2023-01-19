import Catalog from '../components/catalog/catalog';
import Heading from '../components/heading/heading';
import { products } from '../data/products';

function App() {
  return (
    <main>
      <div className="container">
        <Heading title="Ты сегодня покормил кота?" />
        <Catalog items={products.items} />
      </div>
    </main>
  );
}

export default App;
