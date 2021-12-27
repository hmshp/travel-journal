import "./style.css";
import data from "./data"
import Post from "./components/Post"
import Navbar from './components/Navbar';

export default function App() {
  const posts = data.map(post => {
  return (
          <Post 
              key={post.id}
              post={post}
          />
  )
})

  return (
      <div>
          <Navbar />
          <section>
              {posts}
          </section>
      </div>
  )
}