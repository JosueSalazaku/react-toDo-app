import HeaderComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/react-todo-app/src/Components/HeaderComponents';
import FooterrComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/react-todo-app/src/Components/FooterComponents';
import TodoComponent from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/react-todo-app/src/Components/TodoComponent';


function App() {
  return (
    <div className="App h-screen bg-zinc-900 flex flex-col">
        <HeaderComponents/>
      <main className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-white text-6xl pb-20'>My to do's</h1>
        <TodoComponent/>
      </main>
      <FooterrComponents/>

    </div>
  );
}

export default App;
