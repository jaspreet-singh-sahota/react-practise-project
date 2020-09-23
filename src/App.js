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
import PostList from './components/PostList';
import PostResquest from './components/PostResquest';
import CountHooks2 from './components/CountHooks2';
import FormHook from './components/FormHook';
import HooksArray from './components/HooksArray';
import UseEffect1 from './components/UseEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import HookTick from './components/HookTick';
import HookFetchData from './components/HookFetchData';
import UseReducerHook from './components/UseReducerHook';
import MultipleUseReducers from './components/MultipleUseReducers';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <FocusInput/>
      {/* <MultipleUseReducers/> */}
      {/* <UseReducerHook/> */}
      {/* <HookFetchData/> */}
      {/* <HookTick/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse></HookMouse> */}
      {/* <UseEffect1/> */}
      {/* <HooksArray></HooksArray> */}
      {/* <FormHook></FormHook> */}
      {/* <CountHooks2/> */}
      {/* <PostResquest></PostResquest> */}
      {/* <PostList></PostList> */}
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
      {/* <RenderProps render={(count, incrementCount) => (<Count count={count} incrementCount={incrementCount}></Count>)}/>
      <RenderProps render={(count, incrementCount) => (<Hover count={count} incrementCount={incrementCount}></Hover>)}/> */}
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
