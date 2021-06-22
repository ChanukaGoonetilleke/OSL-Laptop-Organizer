import React, {useState, useCallback, useEffect} from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import InputForm from "./components/inputForm/InputForm";
import ItemList from './components/items/ItemList';

function App() {

  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItemHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://osl-inventory-default-rtdb.firebaseio.com/items.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedItems = [];

      for (const key in data) {
        loadedItems.push({
          id: key,
          type: data[key].type,
          price: data[key].price,
          upc: data[key].upc,
          quantity: data[key].quantity,
          description: data[key].description,
        });
      }
      setItems(loadedItems);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchItemHandler();
  },[]);

  async function addItemHandler(item:any) {
    const response = await fetch('https://osl-inventory-default-rtdb.firebaseio.com/items.json', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    fetchItemHandler();
  }

  let content = <p>Found no items.</p>;

  if (items.length > 0) {
    content = <ItemList items={items} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Layout>
        <InputForm onAddItem={addItemHandler}/>
        {content}
      </Layout>
    </div>
  );
}

export default App;
