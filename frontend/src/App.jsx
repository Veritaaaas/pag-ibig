
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}

export default App;