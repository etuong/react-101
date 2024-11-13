import "./App.css";

import TTT1 from "./tic-tac-toe/classes/javascript/Game";
import TTT2 from "./tic-tac-toe/classes/typescript/Game";
import TTT3 from "./tic-tac-toe/functional/javascript/Game";
import TTT4 from "./tic-tac-toe/functional/typescript/Game";

function App() {
  return (
    <>
      <header className="header">Tic Tac Toe using JavaScript Classes</header>
      <TTT1 />

      <header className="header">Tic Tac Toe using TypeScript Classes</header>
      <TTT1 />

      <header className="header">Tic Tac Toe using Functional JavaScript</header>
      <TTT1 />

      <header className="header">Tic Tac Toe using Functional TypeScript</header>
      <TTT1 />
    </>
  );
}

export default App;
