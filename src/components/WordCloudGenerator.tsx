import React, { useState } from 'react';
import WordCloudRenderer from './WordCloudRenderer';

interface WordCloudGeneratorProps {}

// FIXME: Prevent overlapping of the other words from the main word
// TODO: Make Mobile and Desktop responsive
// TODO: Make sure the colors are standard

const WordCloudGenerator: React.FC<WordCloudGeneratorProps> = () => {
  const [text, setText] = useState<string>('');
  const [wordFrequency, setWordFrequency] = useState<{ [key: string]: number }>(
    {}
  );

  const generateWordCloud = () => {
    const processedText = processText(text);
    const frequency = countWordFrequency(processedText);
    setWordFrequency(frequency);
  };

  const processText = (inputText: string): string[] => {
    const stopWords = [
      'the',
      'and',
      'is',
      'in',
      'it',
      'to',
      'of',
      'for',
      'with',
      'that',
      'this',
      'a',
      's',
      'd',
      'an',
      'if',
      'can',
      'by',
      'you',
      'your',
      'as',
      'get',
      'new',
      'not',
      'at',
      'on',
      'its',
      'are',
      't',
      'or',
      'be',
      'do',
      'don',
      'but',
    ];
    const words = (inputText.toLowerCase().match(/\b\w+\b/g) || []).filter(
      (word) =>
        !stopWords.includes(word) &&
        /^[a-zA-Z]+$/.test(word) && // Check if the word contains only letters
        !word.includes("'") &&
        !word.includes('.')
    );
    return words;
  };

  const countWordFrequency = (words: string[]): { [key: string]: number } => {
    const frequency: { [key: string]: number } = {};
    words.forEach((word) => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    return frequency;
  };

  const resetWordCloud = () => {
    setText('');
    setWordFrequency({});
  };

  return (
    <div className="word-cloud-generator">
      <div className="input-part">
        <p>Enter your text here:</p>
        <textarea
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="btn-container">
          <button className="generate-cloud" onClick={generateWordCloud}>
            Generate Word Cloud
          </button>
          <button className="reset-cloud" onClick={resetWordCloud}>
            Reset
          </button>
        </div>
      </div>
      <WordCloudRenderer wordFrequency={wordFrequency} />
      {/* <div
        className="word-cloud"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {Object.entries(wordFrequency).map(([word, count]) => (
          <span
            key={word}
            style={{
              fontSize: `${calculateFontSize(count)}px`,
              color: `${getRandomColor()}`,
              transform:
                centerWord && word !== centerWord.word
                  ? `rotate(${randomAngleGenerator(0, 90)}deg)`
                  : 'none',
              fontWeight: word === centerWord?.word ? '800' : '400',
              order: word === centerWord?.word ? 0 : 1, // Set order to 0 for the center word
              // transform: 'translateX(-50%) translateY(-50%)',
              position: word === centerWord?.word ? 'absolute' : 'static',
              top: '30%',
              left: '30%',
              textTransform:
                centerWord && word !== centerWord.word
                  ? 'lowercase'
                  : 'uppercase',
              // FIXME: The Higher the frequency the higher the opacity - Do the same for the z-index too
              zIndex: word === centerWord?.word ? '1000' : '1',
              opacity: word === centerWord?.word ? '1' : '0.5',
            }}
            title={`Frequency: ${count}`}
          >
            {word}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default WordCloudGenerator;

// Habits are the compound interest of self-improvement. The same way that money multiplies through compound interest, the effects of your habits multiply as you repeat them. They seem to make little difference on any given day and yet the impact they deliver over the months and years can be enormous. It is only when looking back two, five, or perhaps ten years later that the value of good habits and the cost of bad ones becomes strikingly apparent.
