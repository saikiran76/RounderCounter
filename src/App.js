import './App.css';
// import { Beizer } from './components/Beizer';
import Counter from './components/Counter';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <div className='bg-[#0F172A] flex gap-2'>
        <Counter/>
        <Form/>
        {/* <Beizer/> */}
      </div>
    </>
  );
}

export default App;
