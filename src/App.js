import './App.css';
import Profile from './profile/Profile';
function App() {
  const styleApp={ textAlign:'center'}
  return (
    <div style={styleApp} className="content">
      <Profile fullName={"Rchid Baccouchi"} bio={`Hello, I'm rchid baccouchi , I'am 23 years old, i enjoy developing and music.`} />
      </div>
  );
}

export default App;
