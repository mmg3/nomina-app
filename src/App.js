import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./Routers/AppRouter";
import { store } from "./Stores/Store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
