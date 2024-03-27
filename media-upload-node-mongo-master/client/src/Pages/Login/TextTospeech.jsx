// src/components/TextToSpeech.js
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    speak({ text });
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text to convert to speech"
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
