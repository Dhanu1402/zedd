import Child from './components/child';
import ClassExample from './components/classExample';
import CounterHook from './components/counterHook';
import CounterRedux from './components/counterRedux';
import FunctionExample from './components/functionExample';
import MainWindow from './components/mainWindow';

export default function App() {
  return (
    <div className="">
      <div className="h-screen grid md:grid-cols-2 grid-rows-2">
        <ClassExample />
        <FunctionExample />
      </div>
      <CounterRedux />
      <CounterHook />
      <MainWindow />
      <Child />
    </div>
  );
}
