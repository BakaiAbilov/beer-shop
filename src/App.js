import React  from "react";
import { requests } from "./configs";

const App = () => {
  React.useEffect(() => {
    requests.getAllGoods('2', '20')
    .then(res => console.log(res))
  }, [] )
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
