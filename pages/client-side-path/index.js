import Link from "next/link";
import { useState, useEffect } from "react";
import DetailsComp from "../../src/component/DetailsComp";

const ClientSide = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setPosts(res);
    });
  }, []);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    return data;
  };

  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row" style={{ height: "100%", overflow: "hidden" }}>
        <div className="col-4" style={{ height: "100%" }}>
          <div
            className="card m-3 p-3"
            style={{ height: "100%", overflow: "auto" }}
          >
            <h1>client side</h1>
            <div>
              {posts.map((item, index) => {
                return (
                  <Link href={`/client-side-path?postid=${item.id}&tabIndex=0`}>
                    <div key={index.toString()} className="card p-3 m-1">
                      <p>{item.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-8">
          <DetailsComp />
        </div>
      </div>
    </div>
  );
};

export default ClientSide;
