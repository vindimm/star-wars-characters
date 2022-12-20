import Header from "../../header/header";
import "./style.css"

function HomePage(): JSX.Element {
  return (
    <>
      <Header currentLink={'Home'} />
      <h1>Home Page</h1>
    </>
  );
}

export default HomePage;
