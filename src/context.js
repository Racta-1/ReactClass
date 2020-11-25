import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TEACHER':
      return {
        ...state,
        teachers: state.teachers.filter((teach) => teach.id !== action.payload),
      };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter((stu) => stu.id !== action.payload),
      };
    case 'ADD_TEACHER':
      return {
        ...state,
        teachers: [action.payload, ...state.teachers],
      };
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [action.payload, ...state.students],
      };
    // case 'ADD_PHOTOS':
    //   return {
    //     ...state,
    //     photos: [action.payload, ...state.photos],
    //   };
    default:
      return state;
  }
};
// payload is just a data that you want to send along with the action

export class Provider extends Component {
  state = {
    teachers: [
      {
        id: 1,
        name: 'Funke Akindele',
        email: 'funke12@gmail.com',
        phone: '080567884223',
      },
      {
        id: 2,
        name: 'Favour Aliasa',
        email: 'aliasa@gmail.com',
        phone: '57789-7832-5678',
      },
      {
        id: 3,
        name: 'Joshua Mearch',
        email: 'mearch@gmail.com',
        phone: '8599-6733-6723',
      },
      {
        id: 4,
        name: 'Kenny Akindele',
        email: 'kdelew@gmail.com',
        phone: '5673-89556-712',
      },
      {
        id: 5,
        name: 'Chincha Makinde',
        email: 'makinrew@gmail.com',
        phone: '58322-48900-9238',
      },
    ],
    students: [
      {
        id: 1,
        name: 'Funke Akindele',
        email: 'funke12@gmail.com',
        phone: '080567884223',
      },
      {
        id: 2,
        name: 'Favour Aliasa',
        email: 'aliasa@gmail.com',
        phone: '57789-7832-5678',
      },
      {
        id: 3,
        name: 'Joshua Mearch',
        email: 'mearch@gmail.com',
        phone: '8599-6733-6723',
      },
      {
        id: 4,
        name: 'Kenny Akindele',
        email: 'kdelew@gmail.com',
        phone: '5673-89556-712',
      },
      {
        id: 5,
        name: 'Chincha Makinde',
        email: 'makinrew@gmail.com',
        phone: '58322-48900-9238',
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
