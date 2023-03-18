// import logo from './logo.svg';
import './App.css';
// import Father from './components/container/father';
// import GreetingStyled from './components/pure/greetingStyled';
// import Example4 from './hooks/Example4';
// import Greeting from './components/pure/greeting';
// import Fgreeting from './components/pure/fgreeting';
import TaskListComponent from './components/container/task_list';
import OptionalRender from './components/pure/optionalRender';
// import Example1 from './hooks/Example1';
// import Example2 from './hooks/Example2';
// import MiComponenteConContexto from './hooks/Example3.jsx'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Greeting name="Antonio"></Greeting> */}
          {/* <Fgreeting name="Antonio"></Fgreeting> */}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* <Example1></Example1> */}
          {/* <Example2></Example2> */}
          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Example4 nombre="Antonio">
            <h3>
              Contenido del props.children
            </h3>
          </Example4> */}
          {/* <GreetingStyled name="Antonio"></GreetingStyled> */}
      {/* </header> */}
      {/* <Father></Father> */}

      <OptionalRender></OptionalRender>
    </div>
  );
}

export default App;
