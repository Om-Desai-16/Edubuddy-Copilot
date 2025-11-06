import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, X } from 'lucide-react';

interface VoiceAssistantProps {
  onClose: () => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Setup speech recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const speechResult = event.results[0][0].transcript;
        setTranscript(speechResult);
        stopListening();
        processCommand(speechResult);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event);
        stopListening();
      };

      recognitionRef.current = recognition;
    }

    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setTranscript('');
      setResponse('');
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  const processCommand = async (command: string) => {
    setIsProcessing(true);
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You're a helpful assistant. Answer in 2 lines then suggest 3 follow-up questions."
            },
            {
              role: "user",
              content: command
            }
          ]
        })
      });

      const data = await response.json();
      setResponse(data);

      // Speak the reply
      const utterance = new SpeechSynthesisUtterance(data);
      utterance.lang = 'en-US';
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('API error:', error);
      const fallback = "Sorry, I couldn't process your request.";
      setResponse(fallback);
      const utterance = new SpeechSynthesisUtterance(fallback);
      window.speechSynthesis.speak(utterance);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-20 border border-gray-200 transition-all duration-300 ease-in-out">
      <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-medium">Voice Assistant</h3>
        <button onClick={onClose} className="text-white hover:text-indigo-100">
          <X size={18} />
        </button>
      </div>

      <div className="p-4 bg-indigo-50 min-h-20 max-h-60 overflow-y-auto">
        {transcript ? (
          <div className="mb-3 text-right">
            <div className="inline-block bg-indigo-500 text-white px-3 py-2 rounded-lg rounded-br-none max-w-[90%]">
              {transcript}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 text-sm py-4">
            {isListening ? 'Listening...' : 'Click the microphone to speak'}
          </div>
        )}

        {isProcessing && (
          <div className="flex justify-center my-2">
            <div className="bg-gray-200 rounded-full h-1.5 w-16">
              <div className="bg-indigo-600 h-1.5 rounded-full animate-pulse"></div>
            </div>
          </div>
        )}

        {response && (
          <div className="mb-2">
            <div className="inline-block bg-white text-gray-800 px-3 py-2 rounded-lg rounded-bl-none max-w-[90%] shadow-sm">
              {response.split('\n').map((line, i) => (
                <p key={i} className={i < 2 ? 'font-medium' : 'text-sm text-gray-600'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-3 border-t border-gray-200 flex justify-between items-center bg-white">
        <div className="text-xs text-gray-500">
          {isListening ? 'Tap to stop' : 'Tap to speak'}
        </div>
        <button
          onClick={toggleListening}
          className={`p-3 rounded-full ${
            isListening
              ? 'bg-red-100 text-red-600 animate-pulse'
              : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
          }`}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
      </div>
    </div>
  );
};

export default VoiceAssistant;