import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/Itemlistcontainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings="hola como estas?" />
    </div>
  );
};

export default App;
