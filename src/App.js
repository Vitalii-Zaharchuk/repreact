import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import Message from './Components/Message/Message';

function App(props) {
  
  return (
    <div className="App">
      
      <Header/>
      <div className='component'>
        <Navbar/>
        <Route path='/profile' render={() =><Profile 
        profilePage={props.state.profilePage}
        dispatch={props.dispatch}
        />}/>
        <Route path='/message' render={() =><Message messagePage={props.state.messagePage}
        dispatch={props.dispatch} 
        />}/>
      </div>
    </div>
  );
}

export default App;
