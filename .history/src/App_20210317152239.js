import logo from './logo.svg';
import './App.css';
import AddPost from './components/post/add-post.component';
import postListComponent from './components/post/post-list.component';

function App() {
  return (
    <div className="App">
      <AddPost />
      <br />
      <postListComponent />
    </div>
  );
}

export default App;
