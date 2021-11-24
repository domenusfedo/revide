import React, {useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from './app/store';

import {Board, SignIn, SignUp, Home} from './components/index';

import { useLocation } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {AppHolder} from './App.elements'

const App = () => {
  let location = useLocation();

  const {isAuth} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <AppHolder>
      <TransitionGroup component={null}>
        <CSSTransition
          timeout={300}
          classNames="page"
          key={location.key}
        >
          <Routes location={location}>
            <Route path='signin' element={<SignIn />}/>
            <Route path='signup' element={<SignUp />}/>
            {isAuth && <Route path='/board' element={<Board/>}/>}
            {/* <Route path='/*' element={<Navigate replace to='/'/>}/> */}
            <Route path='/*' element={<Home />}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </AppHolder>
  );
}

export default App;

