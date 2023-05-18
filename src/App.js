import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight:300,date:'5-17-2023'},{weight:290,date:'5-18-2023'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />

    </div>
  );
}

export default App;
