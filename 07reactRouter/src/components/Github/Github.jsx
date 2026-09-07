// import { useEffect, useState } from "react";
import {
  useLoaderData,
//   useParams
} from "react-router-dom";

function Github() {
//   const {username} = useParams()
//   const [data, setData] = useState(0)

//   useEffect(() => {
//       fetch(`https:api.github.com/users/${username}`)
//       .then(response => response.json())
//       .then(data => {
//           console.log("data>>", data);
//           setData(data)
//       })
//   }, [])

  const data = useLoaderData();

  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <h1>Github User: {data.name}</h1>
        <h1>Github Followers: {data.followers}</h1>
        <div className="flex justify-center mt-5">

        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
      </div>
    </div>
  );
}

export default Github;

// (For skip eslint error)
// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  //   const { username } = useParams();
  const response = await fetch(`https:api.github.com/users/yashgojariya21`);
  return response.json();
};
