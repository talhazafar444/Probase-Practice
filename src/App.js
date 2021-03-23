import logo from './logo.svg';
import './App.css';
import AddPost from './components/post/add-post.component';
import PostList from './components/post/post-list.component';
import LoginComponent from './components/authentication/login/LoginComponent';

function App() {
  return (
    <div className="App">

      <LoginComponent />
      {/* <AddPost />
      <br />
      <PostList /> */}
    </div>
  );
}

export default App;
