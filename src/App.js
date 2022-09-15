import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import General from './components/General/General';
import { Todo } from './components/Todo/Todo';
import Calculator from './components/Calculator/Calculator';
import Time from './components/Time/Time';

export default class App extends Component {
  render() {
    return (
      <>
        <General/>
        <main>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Todo />} />
              <Route path='/calc' element={<Calculator />} />
              <Route path='/time' element={<Time />} />
            </Routes>
          </div>
        </main>
      </>
    )
  }
};
