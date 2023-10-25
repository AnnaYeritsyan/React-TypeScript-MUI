import './App.css';
import { Box } from '@mui/material';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Clients } from './dashboard/Clients/Clients';
import { Manipulations } from './dashboard/Manipulations/Manipulations';
import { Orders } from './dashboard/Orders/Orders';
import { Results } from './dashboard/Results/Results';
import { Nomenclature } from './dashboard/Nomenclature/Nomenclature';
import { PriceList } from './dashboard/PriceList/PriceList';
import { Reports } from './dashboard/Reports/Reports';
import { Employes } from './dashboard/Employes/Employes';
import { Admin } from './dashboard/Admin/Admin';
import Basic from './dashboard/Basic/Basic';
import { ErrorPage } from './dashboard/ErrorPage/ErrorPage';


function App() {
  return (
  <Box>
    <BrowserRouter>
    <Routes>
<Route path='/dashboard'>
<Route index element={<Basic/>}/>
  <Route path='clients' element={<Clients/>}/>
  <Route path='manipulations' element={<Manipulations/>}/>
  <Route path='orders' element={<Orders/>}/>
  <Route path='results' element={<Results/>}/>
  <Route path='nomenclature' element={<Nomenclature/>}/>
  <Route path='pricelists' element={<PriceList/>}/>
  <Route path='reports' element={<Reports/>}/>
  <Route path='employees' element={<Employes/>}/>
  <Route path='admin' element={<Admin/>}/>
</Route>
<Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
</BrowserRouter>
  </Box>
  );
}

export default App;

