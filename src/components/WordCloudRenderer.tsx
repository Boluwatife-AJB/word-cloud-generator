import React from 'react';

interface WordCloudRendererProps {
  wordFrequency: { [key: string]: number };
}

const WordCloudRenderer: React.FC<WordCloudRendererProps> = ({
  wordFrequency,
}) => {
  const calculateFontSize = (count: number): number => {
    const minFontSize = 16;
    const maxFontSize = 45;
    const scaleFactor = 10;
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

  const centerWord = getCenterWord();
  return (
    <div
      className="word-cloud"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {Object.entries(wordFrequency).map(([word, count]) => {
        const fontSize = calculateFontSize(count);
        const color = getRandomColor();
        const angle = centerWord ? randomAngleGenerator(0, 90) : 0;

        return (
          <span
            key={word}
            style={{
              fontSize: `${fontSize}px`,
              color,
              transform:
                centerWord && word !== centerWord.word
                  ? `rotate(${angle}deg)`
                  : 'none',
              fontWeight: word === centerWord?.word ? '800' : '400',
              order: word === centerWord?.word ? 0 : 1,
              position: word === centerWord?.word ? 'absolute' : 'static',
              textTransform:
                centerWord && word !== centerWord.word
                  ? 'lowercase'
                  : 'uppercase',
              zIndex: word === centerWord?.word ? '1000' : '1',
              opacity: word === centerWord?.word ? '1' : '0.5',
            }}
            title={`Frequency: ${count}`}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default WordCloudRenderer;
