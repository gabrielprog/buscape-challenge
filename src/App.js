import './assets/css/style.css';

import { CartProvider } from './providers/Cart'

import Header from './components/Header'
import Main from './components/Main'


function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}

export default App;
