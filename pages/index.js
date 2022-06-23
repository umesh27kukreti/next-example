import Link from "next/link";

const Home = () => {
  return (
    <div className="container m-3 p-3">
      <Link href={"/post"}>
        <button className="outlined">Go to getStaticProps</button>
      </Link>
      <br></br>
      <hr />

      <Link href={"/with-dynamic-path"}>
        <button className="outlined">Go to getStaticPaths</button>
      </Link>
      <br></br>
      <hr />

      <Link href={"/client-side-path"}>
        <button className="outlined">Go to client side page</button>
      </Link>
    </div>
  );
};

export default Home;
