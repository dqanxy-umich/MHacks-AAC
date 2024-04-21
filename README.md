The frontend for our 2024 MHacks x Google Hackathon submission, GeminAAC. Built in React, off of an open-source AAC, [Cboard](https://app.cboard.io). You can find our work in src/components/Board, where we have modified multiple components to add a Copilot feature and a list of recommended responses.

## Getting Started

Install dependencies by calling `yarn install`.

### `yarn start`

Ensure you have the GeminAAC backend running.

Runs the app in development mode.<br>
Open [http://localhost:3000/board/root](http://localhost:3000/board/root) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### Usage

Press generated responses to generate a list of current responses based on the last 5 seconds of audio and the user's camera feed. After it finishes, select one of the responses if desired.

Press A to use the next copilot suggested word.
