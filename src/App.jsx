import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
