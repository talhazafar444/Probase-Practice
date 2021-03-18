import logo from './logo.svg';
import './App.css';
import AddPost from './components/post/add-post.component';

function App() {
  return (
    <div className="App">
      <AddPost />
      <br />
      <PostList />
    </div>
  );
}

export default App;
