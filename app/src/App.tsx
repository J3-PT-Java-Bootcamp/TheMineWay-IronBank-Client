import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import AuthenticationProvider from './providers/authentication/AuthenticationProvider';
import Main from './view/Main';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      }
    }
  });

  return (
    <div
      className='main-div'
    >
      <QueryClientProvider
        client={queryClient}
      >
        <AuthenticationProvider>
          <Main />
        </AuthenticationProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
