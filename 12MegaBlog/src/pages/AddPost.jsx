import { PostForm, Container } from '../components/index'


function AddPost() {
  return (
    <div className='py-8'>
        <Container>
          <h1 className="text-3xl bg-blue-100 rounded-xl px-10 py-4 mx-2 mb-2">
          Add Posts
        </h1>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
