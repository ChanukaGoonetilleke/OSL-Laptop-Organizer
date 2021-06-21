import React from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import InputForm from "./components/inputForm/InputForm";

function App() {
  return (
    <div className="App">
      <Layout>
        <InputForm />
      </Layout>
    </div>
  );
}

export default App;
