import React from 'react';
import './App.css';
import DataFetch from './components/DataFetch';
import Component1 from './components/Component1';

export const UserContext = React.createContext()

const App = () => {
  return (
    <div className="App">
      we are here
      <DataFetch/>
      <UserContext.Provider value={{github: 'joelethan'}}>
        <Component1/>
      </UserContext.Provider>
    </div>
  )
}

export default App;
