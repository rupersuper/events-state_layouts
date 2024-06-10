import React from "react";
import "./App.css";
import ListView from "./components/ListView";
import CardView from "./components/CardView";
import IconSwitch from "./components/IconSwitch";
import products from "./components/products.json";

function App() {
  const [view, setView] = React.useState("view_list");

  const onChangeView = (view) => {
    view === "view_list" ? setView("view_module") : setView("view_list");
  };

  return (
    <div className="container">
      <IconSwitch view={view} setView={onChangeView} />
      {view === "view_list" ? (
        <ListView item={products} />
      ) : (
        <CardView item={products} />
      )}
    </div>
  );
}

export default App;
