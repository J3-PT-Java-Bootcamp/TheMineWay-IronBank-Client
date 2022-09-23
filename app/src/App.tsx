import './App.css';
import AuthenticationProvider from './providers/authentication/AuthenticationProvider';
import Main from './view/Main';

function App() {
  return (
    <div
      className='main-div'
    >
      <AuthenticationProvider>
        <Main />
      </AuthenticationProvider>
    </div>
  );
}

export default App;
