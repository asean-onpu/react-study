export const App = () => {
  const oncClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
    margin: 100,
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={oncClickButton}>ボタン</button>
    </>
  );
};
