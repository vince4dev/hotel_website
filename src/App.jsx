import About from "./Components/About/About";
import BookTable from "./Components/BookTable/BookTable";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Rooms from "./Components/Rooms/Rooms";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Rooms />
      <BookTable />
    </>
  );
}

export default App;
