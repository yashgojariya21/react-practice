import { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Link, useNavigate } from "react-router-dom";

function MyPost() {
  const [posts, setPost] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (userData) {
      appwriteService.getPostByUserId(userData.$id).then((post) => {
        if (post) setPost(post.documents);
        else navigate("/");
      });
    } else navigate("/");
  }, [navigate, dispatch]);

    if (posts.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <Container>
          <div className="p-4 w-full">
            <h1 className="text-2xl font-bold text-gray-700">
              You haven't created any posts yet.
            </h1>
            <p className="text-gray-600 mt-2">
              Click{" "}
              <Link to="/add-post" className="text-blue-600 hover:underline font-medium">
                Add Post
              </Link>{" "}
              to publish your first article!
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-3xl bg-blue-100 rounded-xl px-10 py-4 mx-2">
          My Posts
        </h1>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-2/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyPost;
