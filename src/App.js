import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";

function App() {
    const cartIsShow = useSelector(state =>state.cart.isShown );
    return (
    <Layout>
        {cartIsShow &&  <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
