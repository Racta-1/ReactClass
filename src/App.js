import React, { Component } from 'react';
import { Provider } from './context';
import TeachersForm from './components/teacher/TeachersForm';
import Teachers from './components/teacher/Teachers';
import StudentsForm from './components/student/StudentsForm';
import Students from './components/student/Students';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <TeachersForm />
          <Teachers />
          <StudentsForm />
          <Students />
        </div>
      </Provider>
    );
  }
}

export default App;
