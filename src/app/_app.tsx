// pages/_app.tsx
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }:any) {
  return (
    <Provider store={store}>
      {/* Rest of your application */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
