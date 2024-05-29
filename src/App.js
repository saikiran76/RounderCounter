import { Provider } from 'react-redux';
import './App.css';
// import { Beizer } from './components/Beizer';
import Counter from './components/Counter';
import { Form } from './components/Form';
import store from './utils/AppStore';
import Editor from './components/Editor';

function App() {
  return (
    <>
      <div className='bg-[#0F172A] flex gap-2 mb-3'>
        <Counter/>
        <Editor/>
        {/* <Beizer/> */}
      </div>
      <Provider store={store}>
          <Form/>
      </Provider>
    </>
  );
}

export default App;
