<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->

# WORD CLOUD GENERATOR

This app generates a visual word cloud from input text, displaying keywords based on frequency.

<!-- Add Image here -->

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Technologies](#technologies)
- [Process](#process)
- [Improvement](#improvement)
- [Contributing](#contributing)
- [License](#license)

## Description

The Word Cloud Generator is a React component that takes user-inputted text and generates a visual representation of word frequency in the form of a word cloud. The component provides customization options such as font size, color, and rotation for each word in the cloud.

## Features

- Input text box for user to enter or paste text content
- Word cloud generation based on word frequency.
- Adjustable font size, color, and rotation.
- Centering the word with the highest frequency.
- Uppercase and margin for the word with the highest frequency.
- Reset functionality to clear the input and generated word cloud.

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Boluwatife-AJB/word-cloud-generator.git
   ```

2. Change into the project directory:

   ```bash
   cd word-cloud-generator
   ```

3. Install dependencies:

   ```bash
    npm install
   ```

4. Run the Vite development server:

   ```bash
   npm run dev
   ```

   This will start the development server, and you can view the Word Cloud Generator in your browser at `http://localhost:5173`.

## Usage

<!-- 1. Import the WordCloudGenerator component into your React application.

   ```bash
    import WordCloudGenerator from './path/to/WordCloudGenerator';
   ```

2. Add the `WordCloudGenerator` component to your JSX.

   ```bash
    <WordCloudGenerator />
   ```

3. Customize the component based on your requirements. -->

1. Paste or type text into input box
2. Press 'Generate Word Cloud' button
3. See visual word cloud populate with keywords
4. Click reset to clear and enter new text

Font size of each word represents its frequency - most used words are largest.

## Demo

You can preview the live project [here](here)

<!--TODO:  Add a link to video or add a video file or gif to show how it works -->

## Improvement

Some possible enhancements for the future:

- Make word cloud update live as user types instead of requiring button click.
- Improved responsive layout and sizing.
- Highlight or categorize words by part of speech.
- Add more customization like themes, implement dark and light themes.

## Contributing

If you would like to contribute to the development of this project, please follow the guidelines in [Contribution guidelines](CONTRIBUTING.md)

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this code for educational or commercial purposes.

<!-- TODO:  Make the word file downloadable as png, pdf, or jpeg -->

<!--

 Here is a README template you can use for the React Word Cloud Generator project:

# React Word Cloud Generator

This app generates a visual word cloud from input text, displaying keywords based on frequency.

![Word Cloud Generator Demo](wordcloud_screenshot.png)

## Features

- Input text box for user to enter or paste text content
- Generate button processes text and creates word cloud
- Reset button clears all text and the word cloud
- Most frequent words show in larger font sizes
- Random colors assigned to words
- Words positioned compactly using flexbox
- Most used word displayed prominently in center
- Misc common words removed during processing

## Usage

1. Paste or type text into input box
2. Press 'Generate Word Cloud' button
3. See visual word cloud populate with keywords
4. Click reset to clear and enter new text

Font size of each word represents its frequency - most used words are largest.

## Technologies

- React
- Typescript
- Flexbox for positioning
- React Hooks (useState)

## Process

The app processes the input text in a few key steps:

1. Split text into individual words
2. Remove common words (the, is, on, etc)
3. Count frequency of remaining words
4. Map words into visual elements
5. Size words by their frequency counts

These raw counts are then translated into font sizes to convey importance visually in the word cloud through larger sizes.

## Further Improvements

Some possible enhancements for the future:

- Make word cloud update live as user types instead of requiring button click
- Improved responsive layout and sizing
- Highlight or categorize words by part of speech
- Add more customization like themes

Let me know if you have any other questions!
 -->
