import About from "./Components/About/About";
import BookTable from "./Components/BookTable/BookTable";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Offer from "./Components/Offer/Offer";
import Rooms from "./Components/Rooms/Rooms";
import Staffs from "./Components/Staffs/Staffs";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Rooms />
      <BookTable />
      <Offer />
      <Staffs />
      <Testimonials />
    </>
  );
}

export default App;
