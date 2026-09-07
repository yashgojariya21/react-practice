import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">User: {userid}</h1>
    </div>
  );
}
