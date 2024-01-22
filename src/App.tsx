import './App.css';
// import WordCloud from './components/WordCloud';
import WordCloudGenerator from './components/WordCloudGenerator';

function App() {
  return (
    <main>
      <h1 className="title-text">Word Cloud Generator</h1>
      <WordCloudGenerator />
      {/* <WordCloud /> */}
    </main>
  );
}

export default App;
