import  { useState } from 'react';
import './App.css';
import Header from './Components/header/header';
import NotMain from './Components/notmain/NotMain';
import SignUp from './Components/signup/SignUp';
import SignIn from './Components/signin/SignIn';
import Main from './Components/main/Main';

const App = () => {
  const [currentView, setCurrentView] = useState('Header');

  const switchToSignUp = () => {
    setCurrentView('SignUp');
  };

  const switchToSignIn = () => {
    setCurrentView('SignIn');
  };

  const switchToMain = () => {
    setCurrentView('Main');
  };

  const switchToNotMain = () => {
    setCurrentView('NotMain');
  };

  return (
    <div className="app-container">
      <Header />
      <Header switchToSignUp={switchToSignUp} switchToSignIn={switchToSignIn} />
      <div className="page-content">
        {currentView === 'SignUp' && <SignUp switchToSignIn={switchToSignIn} />}
        {currentView === 'SignIn' && <SignIn switchToSignUp={switchToSignUp} onSignIn={switchToMain} />}
        {currentView === 'Main' && <Main switchToNotMain={switchToNotMain} />}
        {currentView === 'NotMain' && <NotMain />}
      </div>
  </div>
  )
}
export default App;
