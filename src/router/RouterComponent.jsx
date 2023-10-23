import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LoginComponent from '../components/auth/LoginComponent';
import PageNotFoundComponent from '../components/PageNotFoundComponent';

export default function RouterComponent() {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/' element={<LoginComponent />}/>
            <Route path='*' element={<PageNotFoundComponent />}/>
        </Routes>
    </React.Fragment>
  )
}
