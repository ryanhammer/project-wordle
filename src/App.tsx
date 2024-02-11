import Game from './components/Game';
import Header from './components/Header';

function App() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />

      <div className='flex flex-1 flex-col my-0 mx-auto py-2 px-8 min-w-[250px] lg:max-w-[500px] md:max-w-[58vh] sm:max-w-full'>
        <Game />
      </div>
    </div>
  );
}

export default App;
