import MyAlbum from "./components/MyAlbum";

function App() {

  return (
    <div className="font-primary h-screen bg-slate-300">
      <div className="flex justify-center p-4">
        <h1 className="font-bold text-7xl">Welcome to my music list</h1>
      </div>
      <MyAlbum />
    </div>
  );
}

export default App;
