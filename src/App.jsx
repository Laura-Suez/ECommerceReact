import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;
