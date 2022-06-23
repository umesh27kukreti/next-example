const PostDetails = ({ postDetails, fallback }) => {
  console.log({ fallback });
  return (
    <div className="card m-3 p-3">
      <h1>Static generation with dynamic paramseter</h1>
      <p>{postDetails?.title}</p>
      <p>{postDetails?.body}</p>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postid: "1" },
      },
      {
        params: { postid: "2" },
      },
      {
        params: { postid: "3" },
      },
      {
        params: { postid: "4" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );

  const data = await response.json();

  console.log(context);
  return {
    props: {
      postDetails: data,
    },
  };
}
