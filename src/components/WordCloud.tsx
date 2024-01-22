import React, { useState } from 'react';

// // Function to get a random position within the specified width and height
// function getRandomPosition(width: number, height: number) {
//   return {
//     top: Math.random() * height,
//     left: Math.random() * width,
//   };
// }

// // TODO: Create a reset button to reset the text input and clear the word cloud

// // Function to generate a random RGB color
// function getRandomColor() {
//   return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//     Math.random() * 255
//   })`;
// }

// Common words to exclude from the WordCloud
const commonWords = [
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
];

// React functional component for the WordCloud
function WordCloud() {
  // State hook to manage the text input value
  const [text, setText] = useState<string>('');

  // State hook to manage whether the word cloud should be generated
  const [generateWordCloud, setGenerateWordCloud] = useState<boolean>(false);

  // Function to handle the generation of the word cloud
  const handleGenerateWordCloud = () => {
    setGenerateWordCloud(true);
  };

  // Splitting the input text into an array of words, removing common words, non-word characters, and empty strings
  // const words: string[] = text
  //   .split(/\W+/)
  //   .filter(
  //     (word) => word.length > 0 && !commonWords.includes(word.toLowerCase())
  //   );

  // Counting the occurrences of each word in the array
  // const wordCounts: { [key: string]: number } = words.reduce((acc, word) => {
  //   if (!acc[word]) {
  //     acc[word] = 0;
  //   }
  //   acc[word]++;
  //   return acc;
  // }, {});

  // Finding the maximum count among all words
  // const maxCount: number = Math.max(...Object.values(wordCounts));

  // JSX structure for the WordCloud component
  return (
    <div className="cloud-container">
      {/* Textarea for input */}
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      {/* Button to generate the word cloud */}
      <button onClick={handleGenerateWordCloud}>Generate Word Cloud</button>
      {/* Container for the word cloud */}
      {generateWordCloud && (
        <div className="cloud">
          {/* Mapping over word counts to render each word with styling */}
          {/* {Object.entries(wordCounts).map(([word, count]) => {
            // Calculating font size based on word count
            const fontSize: number = Math.floor(20 + 70 * (count / maxCount));
            // Calculating font weight based on word count
            const weight: number = (count / maxCount) * 10;
            // Determining whether to set writingMode to horizontal for some words
            // const writingMode: string | undefined =
            //   count > maxCount / 2 ? 'horizontal-tb' : undefined;

            // Rendering each word as a span with random position, color, font size, font weight, and writing mode
            return (
              <span
                key={word}
                style={{
                  fontSize,
                  left: `${getRandomPosition(100, 100).left}%`,
                  top: `${getRandomPosition(100, 100).top}%`,
                  color: getRandomColor(),
                  fontWeight: weight,
                  // writingMode,
                }}
              >
                {word}
              </span>
            );
          })} */}
        </div>
      )}
    </div>
  );
}

export default WordCloud;
