import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

const initialState = {value: 0};

const reduce = (state = initialState, action) => {
  switch(action.type) {
    case "INC":
      return {
        value: state.value + 1
      };
    case "DEC":
      return {
        value: state.value - 1
      };
    case "RND":
      return {
        value: state.value * action.payload
      };
    default:
      return {
        value: state.value
      };
  }
}

const store = createStore(reduce);

const update = () => {
  return document.getElementById("counter").textContent = store.getState().value;
}

store.subscribe(() => {
  update();
});

const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const rnd = (value) => ({type: "RND", payload: value});

document.getElementById("inc").addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById("dec").addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById("rnd").addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

// let state = reduce(undefined, {type: 'INC'});
//  state = reduce(state, {type: 'INC'});
//  state = reduce(state, {type: 'INC'});
//  state = reduce(state, {type: 'INC'});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <></>
  </React.StrictMode>
);
