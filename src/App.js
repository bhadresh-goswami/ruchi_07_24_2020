import React from 'react';
import Label from './Components/LabelComponent/Label';
import Th from './Components/TdThComponent/Th';
import Login from './Components/LoginComponent/login';
import ShowTable from './Components/tableExample/showtable';
import List from './Components/listComponent/list';


function App() {
  return <div>

    {/* <Login title="Form Title"/> */}
    {/* <ShowTable></ShowTable> */}

    <List />
    <ShowTable/>
  </div>
}

export default App;