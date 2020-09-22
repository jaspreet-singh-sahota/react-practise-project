import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Subscribe from './components/Subscribe';
import Count from './components/Count';
import EventHandlers from './components/EventHandlers';
import ParentComponent from './components/ParentComponent';
// import FormComponent from './components/LifeCycleA';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import FocusedInputField from './components/FocusedInputField';
import SuperHeros from './components/SuperHeros';
import ErrorBoundary from './components/ErrorBoundary';
import Hover from './components/Hover';
import RenderProps from './components/RenderProps';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <SuperHeros superHero={'Batman'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <SuperHeros superHero={'Superman'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <SuperHeros superHero={'Joker'} />
      </ErrorBoundary> */}
      {/* <FocusedInputField></FocusedInputField> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventHandlers></EventHandlers> */}
      <RenderProps render={(count, incrementCount) => (<Count count={count} incrementCount={incrementCount}></Count>)}/>
      <RenderProps render={(count, incrementCount) => (<Hover count={count} incrementCount={incrementCount}></Hover>)}/>
      {/* <Subscribe></Subscribe> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is the children</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Click</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman">
        <button>Click</button>
      </Welcome>
      <Welcome /> */}
    </div>
  );
}

export default App;
