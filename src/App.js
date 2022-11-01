import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home'
import Error from './pages/Error';
import ViewRepo from './pages/ViewRepo';
import Overview from './components/Overview';




function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Header/>
      <Routes>
       <Route   path='/' element={<Home/>}/>
       <Route   path='/repos/Folarh/:full_name' element={<ViewRepo/>}/>
       <Route   path='/overview' element={<Overview/>}></Route>
       <Route   path='*' element={<Error/>}></Route>
        </Routes>
</BrowserRouter>
     
      
    </div>
  );
}

export default App;
