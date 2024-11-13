import "./App.css";

import WithContext from "./hooks/context/with-context/index"
import WithNoContext from "./hooks/context/with-no-context/index"

import TicTacToe1 from "./tic-tac-toe/classes/javascript/Game";
import TicTacToe2 from "./tic-tac-toe/classes/typescript/Game";
import TicTacToe3 from "./tic-tac-toe/functional/javascript/Game";
import TicTacToe4 from "./tic-tac-toe/functional/typescript/Game";

function App() {
  return (
    <>
      <header className="header">Context API Example - With Context</header>
      <WithContext />

      <header className="header">Context API Example - Without Context</header>
      <WithNoContext />

      <header className="header">Tic Tac Toe using JavaScript Classes</header>
      <TicTacToe1 />

      <header className="header">Tic Tac Toe using TypeScript Classes</header>
      <TicTacToe1 />

      <header className="header">Tic Tac Toe using Functional JavaScript</header>
      <TicTacToe1 />

      <header className="header">Tic Tac Toe using Functional TypeScript</header>
      <TicTacToe1 />
    </>
  );
}

export default App;
