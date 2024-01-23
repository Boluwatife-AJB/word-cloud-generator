import './App.css';
// import WordCloud from './components/WordCloud';
import WordCloudGenerator from './components/WordCloudGenerator';

function App() {
  return (
    <main>
      <h1 className="title-text">Word Cloud Generator</h1>
      {/* TODO: Add an introductory text here like - Transform your piece of text into a word cloud format. Enter your text in the input box below ⬇️⬇️⬇️ */}
      <WordCloudGenerator />
      {/* <WordCloud /> */}
    </main>
  );
}

export default App;
