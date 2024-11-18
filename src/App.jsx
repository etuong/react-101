import "./App.css";

import WithContextExample from "./hooks/context/useContextExample"
import WithNoContextExample from "./hooks/context/useNonContextExample"

import WithMemoExample from "./hooks/memo/useMemoExample"
import WithNoMemoExample from "./hooks/memo/useNonMemoExample"

import WithRefExample from "./hooks/ref/useRefExample"
import WithNoRefExample from "./hooks/ref/useNonRefExample"

import UseEffectExample from "./hooks/useEffectExample"
import UseStateExample from "./hooks/useStateExample"
import UseCallbackExample from "./hooks/useCallbackExample"

import RoutingExample from "./routes/RoutingExample";

import Exercise1 from "./exercises/exercise1/exercise"
import Exercise2 from "./exercises/exercise2/exercise"
import Exercise3 from "./exercises/exercise3/main"

import TicTacToe1 from "./tic-tac-toe/classes/javascript/Game";
import TicTacToe2 from "./tic-tac-toe/classes/typescript/Game";
import TicTacToe3 from "./tic-tac-toe/functional/javascript/Game";
import TicTacToe4 from "./tic-tac-toe/functional/typescript/Game";

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
      <WithNoContextExample />

      <header className="header">useMemo Example - With memoization</header>
      <WithMemoExample />

      <header className="header">useMemo Example - Without memoization</header>
      <WithNoMemoExample />

      <header className="header">useRef Example - With reference</header>
      <WithRefExample />

      <header className="header">useRef Example - Without reference</header>
      <WithNoRefExample />

      <header className="header">Exercise 1 - Color Input</header>
      <Exercise1 />

      <header className="header">Exercise 2 - ToDo App</header>
      <Exercise2 />

      <header className="header">Exercise 3 - Blog App</header>
      <Exercise3 />

      <header className="header">Tic Tac Toe using JavaScript Classes</header>
      <TicTacToe1 />

      <header className="header">Tic Tac Toe using TypeScript Classes</header>
      <TicTacToe2 />

      <header className="header">Tic Tac Toe using Functional JavaScript</header>
      <TicTacToe3 />

      <header className="header">Tic Tac Toe using Functional TypeScript</header>
      <TicTacToe4 />
    </>
  );
}

export default App;
