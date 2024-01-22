import React, { useState } from 'react';

interface WordCloudGeneratorProps {}

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
        !stopWords.includes(word) && !word.includes("'") && !word.includes('.')
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

  const calculateFontSize = (count: number): number => {
    const minFontSize = 16;
    const maxFontSize = 45;
    const scaleFactor = 5;
    return Math.max(minFontSize, Math.min(maxFontSize, count * scaleFactor));
  };

  const getRandomColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  };

  const randomAngleGenerator = (...options: number[]) => {
    const randIndex = Math.floor(Math.random() * options.length);
    return options[randIndex];
  };

  const getCenterWord = (): { word: string; count: number } | undefined => {
    const sortedWords = Object.entries(wordFrequency).sort(
      (a, b) => b[1] - a[1]
    );
    return sortedWords[0]
      ? { word: sortedWords[0][0], count: sortedWords[0][1] }
      : undefined;
  };

  const resetWordCloud = () => {
    setText('');
    setWordFrequency({});
  };

  const centerWord = getCenterWord();

  return (
    <div className="word-cloud-generator">
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="generate-cloud" onClick={generateWordCloud}>
        Generate Word Cloud
      </button>
      <button className="reset-cloud" onClick={resetWordCloud}>
        Reset
      </button>
      <div
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
                  ? `rotate(${randomAngleGenerator(90, 0)}deg)`
                  : 'none',
              fontWeight: word === centerWord?.word ? 'bold' : 'normal',
              order: word === centerWord?.word ? 0 : 1, // Set order to 0 for the center word
              // transform: 'translateX(-50%) translateY(-50%)',
              position: word === centerWord?.word ? 'absolute' : 'static',
              top: '70%',
              left: '50%',
            }}
            title={`Frequency: ${count}`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCloudGenerator;
