import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Views from "./pages/view";


function App() { //Directs us to the view.js file which holds the graph itself
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Views/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
