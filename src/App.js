import Routers from "./Routers";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;
