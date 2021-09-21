import Tweet from './Tweet';
import './TweetsContainer.css';

function TweetsContainer() {
  return (
    <div className="TweetsContainer">
      <div className="home">
        <h3>Home</h3>
      </div>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default TweetsContainer;
