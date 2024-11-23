import "./App.css";

import WithContextExample from "./hooks/context/useContextExample";
import WithoutContextExample from "./hooks/context/useNonContextExample";

import WithMemoExample from "./hooks/memo/useMemoExample";
import WithoutMemoExample from "./hooks/memo/useNonMemoExample";

import WithRefExample from "./hooks/ref/useRefExample";
import WithoutRefExample from "./hooks/ref/useNonRefExample";

import UseEffectExample from "./hooks/useEffectExample";
import UseStateExample from "./hooks/useStateExample";
import UseCallbackExample from "./hooks/useCallbackExample";

import RoutingExample from "./routes/RoutingExample";

import ExerciseColorInput from "./exercises/exercise1/exercise";
import ExerciseTodoApp from "./exercises/exercise2/exercise";
import ExerciseBlogApp from "./exercises/exercise3/main";
import ExerciseMovieDatabase from "./exercises/exercise4/exercise";

import TicTacToeJSClasses from "./tic-tac-toe/classes/javascript/Game";
import TicTacToeTSClasses from "./tic-tac-toe/classes/typescript/Game";
import TicTacToeJSFunctional from "./tic-tac-toe/functional/javascript/Game";
import TicTacToeTSFunctional from "./tic-tac-toe/functional/typescript/Game";

function App() {
  return (
    <>
      <header className="header">Routing Example</header>
      <RoutingExample />

      <header className="header">useEffect Example</header>
      <UseEffectExample />

      <header className="header">useState Example</header>
      <UseStateExample />

      <header className="header">useCallback Example</header>
      <UseCallbackExample />

      <header className="header">Context API Example - With Context</header>
      <WithContextExample />

      <header className="header">Context API Example - Without Context</header>
      <WithoutContextExample />

      <header className="header">useMemo Example - With Memoization</header>
      <WithMemoExample />

      <header className="header">useMemo Example - Without Memoization</header>
      <WithoutMemoExample />

      <header className="header">useRef Example - With Reference</header>
      <WithRefExample />

      <header className="header">useRef Example - Without Reference</header>
      <WithoutRefExample />

      <header className="header">Exercise 1 - Color Input</header>
      <ExerciseColorInput />

      <header className="header">Exercise 2 - ToDo App</header>
      <ExerciseTodoApp />

      <header className="header">Exercise 3 - Blog App</header>
      <ExerciseBlogApp />

      <header className="header">Exercise 4 - Movie Database</header>
      <ExerciseMovieDatabase />

      <header className="header">Tic Tac Toe using JavaScript Classes</header>
      <TicTacToeJSClasses />

      <header className="header">Tic Tac Toe using TypeScript Classes</header>
      <TicTacToeTSClasses />

      <header className="header">Tic Tac Toe using Functional JavaScript</header>
      <TicTacToeJSFunctional />

      <header className="header">Tic Tac Toe using Functional TypeScript</header>
      <TicTacToeTSFunctional />
    </>
  );
}

export default App;

