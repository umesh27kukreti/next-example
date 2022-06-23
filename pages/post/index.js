import React from "react";
import Link from "next/link";

function index({ posts }) {
  return (
    <div>
      <h1>page with static generation</h1>
      {posts.slice(0, 3).map((item, index) => {
        return (
          <Link key={index.toString()} href={`/post/${item.id}`}>
            <div className="card p-3 m-3">
              <p className="cardTitle">{item.title}</p>
              <p>{item.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("context", context);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  // console.log(data);
  return {
    props: {
      posts: data ?? [],
    },
  };
}

export default index;
