import { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postSlice"

const AllPost = () => {
  // const [posts, setPosts] = useState([]);
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.post.posts) || [];

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        dispatch(setPost(posts.documents));
      }
    });
  }, [dispatch]);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
