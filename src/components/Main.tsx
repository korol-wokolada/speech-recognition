import React from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

export default function Main() {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick={startListening}>Start listening</button>
          </div>
          <div>
            <button onClick={stopListening}>Stop listening</button>
          </div>

          {isListening ? <div>Your browser is currently listening</div> : null}
          {text}
        </>
      ) : (
        <h1> Your browser has no speech recognition support</h1>
      )}
    </div>
  );
}
