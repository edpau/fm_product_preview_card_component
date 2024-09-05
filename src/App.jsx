import Card from "./components/Card";
import { products } from "./constants/index";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <main className="flex min-h-screen w-screen items-center justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default App;
