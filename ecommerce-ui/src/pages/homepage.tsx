import Banner from "../components/banner/banner";
import Header from "../components/header/header";
import Categories from "../components/categories/category";
import HomeBody from "./homebody";
import Footer from "../components/footer/footer";

function Homepage() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Categories />
        <HomeBody />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
