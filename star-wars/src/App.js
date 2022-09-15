import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navber from './components/Navbar';
import Plants from './components/Planets';
import People from './components/People';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  const [page, setPage] = useState('plants');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star wars Info</h1>
        <Navber setPage={setPage}/>
        <div className='content'>
          {page === 'plants' ? <Plants/> : <People/>}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
