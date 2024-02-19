import HeaderComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/react-todo-app/src/Components/HeaderComponents';
import FooterrComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/react-todo-app/src/Components/FooterComponents';


function App() {
  return (
    <div className="App h-screen bg-zinc-900">
        <HeaderComponents/>
      <main className='flex flex-row justify-center items-center h-full'>
      <h1 className='text-white text-6xl'>My to do's</h1>
      </main>
      <FooterrComponents/>

    </div>
  );
}

export default App;
