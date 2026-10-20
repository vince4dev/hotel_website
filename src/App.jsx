import About from "./Components/About/About";
import BookTable from "./Components/BookTable/BookTable";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Offer from "./Components/Offer/Offer";
import Rooms from "./Components/Rooms/Rooms";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Rooms />
      <BookTable />
      <Offer />
    </>
  );
}

export default App;
