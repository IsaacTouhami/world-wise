import PageFooter from "../components/PageFooter";
import PageNav from "../components/PageNav";

function Home() {
  return (
<>
  <PageNav current={1}/>
    <h1>Home</h1>
    <PageFooter/>
</>
  );
}

export default Home;