
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ExplorePage } from './pages/ExplorePage';
import { Homepage } from './pages/Homepage';
import { RulesPage } from './pages/Rules';



export   const Router = ()=> {

  return (
    <div>
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/explore" element={<ExplorePage/>}/>
      <Route path="/rules" element={<RulesPage/>}/>
    </Routes>

</div>
);
}
