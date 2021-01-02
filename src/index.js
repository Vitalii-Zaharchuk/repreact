import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, {addMessage, addPost, subscribe, updateMessageText, updateNewPostText} from './Redux/state';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
<style>
@import url('https://fonts.googleapis.com/css2?family=Langar&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
</style>
let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <App  state={store.getState()}/>
      </Provider>
      
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
