import { Provider } from 'react-redux';
import './App.css';
// import { Beizer } from './components/Beizer';
import Counter from './components/Counter';
import { Form } from './components/Form';
import store from './utils/AppStore';

function App() {
  return (
    <>
      <div className='bg-[#0F172A] flex gap-2'>
        <Counter/>
        <Provider store={store}>
          <Form/>
        </Provider>
        {/* <Beizer/> */}
      </div>
    </>
  );
}

export default App;
