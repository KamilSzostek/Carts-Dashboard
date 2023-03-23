import Dashboard from "./components/layouts/Dashboard/Dashboard";
import StoreProvider from './store/StoreProvider';

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <Dashboard />
      </StoreProvider>
    </div>
  )
}

export default App
