const WithDynamicPath = ({ postDetails }) => {
  return (
    <div className="card m-3 p-3">
      <h1>Static generation with dynamic paramseter</h1>
      <p>{postDetails?.title}</p>
      <p>{postDetails?.body}</p>
    </div>
  );
};

export default WithDynamicPath;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();
  const arr = [];

  if (data?.length) {
    data.map((item, index) => {
      arr.push({
        params: {
          postid: item?.id?.toString(),
        },
      });
    });
  }

  return {
    paths: arr,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );

  const data = await response.json();

  return {
    props: {
      postDetails: data,
    },
  };
}
