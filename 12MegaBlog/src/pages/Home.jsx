import { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postSlice";

function Home() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        dispatch(setPost(posts.documents));
      }
    });
  }, [dispatch]);

  if (posts.length === 0) {return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-3xl bg-blue-100 rounded-xl px-10 py-4 mx-2">
          Home Page
        </h1>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
