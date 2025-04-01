import { useState} from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum ] = useState(0);
  const oncClickCountuUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  }

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue" >お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green" >元気です！</ColorfulMessage>
      <button onClick={oncClickCountuUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
