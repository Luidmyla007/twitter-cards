import { ScreenSaver } from "./ScreenSaver/ScreenSaver";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ScreenSaver />
      <h1>Check out our cards and follow us! Go!</h1>
 
    </div>
  );
};
