"use client"

import Script from 'next/script';
import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const VideoChat = () => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Add styles to position the widget in the AI frame
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .convai-widget {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
        max-width: none !important;
        transform: none !important;
        background: transparent !important;
        pointer-events: none !important;
      }
      .convai-widget > div {
        background: transparent !important;
      }
      .convai-widget button[data-convai-button],
      .convai-widget button[data-convai-language-button] {
        opacity: 0 !important;
        position: absolute !important;
        pointer-events: auto !important;
      }
      .convai-widget iframe {
        width: 100% !important;
        height: 100% !important;
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    if (isCameraOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Camera Error:", err);
          setIsCameraOn(false);
        });
    } else if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, [isCameraOn]);

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
    if (!isMicOn && !isCallActive) {
      startCall();
    }
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  const startCall = async () => {
    try {
      setIsCallActive(true);
      // Find and click the widget's button with retry
      const clickButton = () => {
        const widgetButton = document.querySelector('button[data-convai-button]') as HTMLButtonElement;
        if (widgetButton) {
          widgetButton.click();
        } else {
          // Retry after a short delay if button not found
          setTimeout(clickButton, 500);
        }
      };
      clickButton();
    } catch (error) {
      console.error("Failed to start call:", error);
    }
  };

  const toggleLanguage = () => {
    // Find and click the language button with retry
    const clickLanguageButton = () => {
      const languageButton = document.querySelector('button[data-convai-language-button]') as HTMLButtonElement;
      if (languageButton) {
        languageButton.click();
      } else {
        // Retry after a short delay if button not found
        setTimeout(clickLanguageButton, 500);
      }
    };
    clickLanguageButton();
  };

  const endCall = async () => {
    try {
      setIsCallActive(false);
      setIsMicOn(false);
      // Refresh the widget by reloading the iframe
      const iframe = document.querySelector('.convai-widget iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.src = iframe.src;
      }
    } catch (error) {
      console.error("Failed to end call:", error);
    }
  };

  return (
    <>
      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="lazyOnload" async type="text/javascript" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* User Video */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            {!isCameraOn && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Camera Off</p>
              </div>
            )}
          </div>

          {/* AI Video */}
          <div className="relative aspect-video bg-teal-50 rounded-lg overflow-hidden">
            {/* AI Avatar */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isCallActive ? 'opacity-30' : 'opacity-100'}`}>
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01M15 9h.01" />
                </svg>
              </div>
            </div>
            {/* ElevenLabs Widget */}
            <div className="absolute inset-0">
              <elevenlabs-convai agent-id="HlcOENs0pusehJ9BR0FH"></elevenlabs-convai>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Primary Controls */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className={`control-button ${isMicOn ? "bg-blue-50" : ""}`}
              onClick={toggleMic}
            >
              {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`control-button ${isCameraOn ? "bg-blue-50" : ""}`}
              onClick={toggleCamera}
            >
              {isCameraOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </Button>
            {isCallActive && (
              <Button
                variant="destructive"
                size="icon"
                className="control-button"
                onClick={endCall}
              >
                <PhoneOff className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Secondary Controls */}
          <div className="flex gap-4">
            <Button
              variant="default"
              className={`bg-black text-white hover:bg-gray-800 ${isCallActive ? 'bg-gray-700' : ''}`}
              onClick={startCall}
              disabled={isCallActive}
            >
              Talk with SERENE
            </Button>
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Change Language
            </Button>
          </div>
        </div>

        {/* Chat History */}
        <Card className="mt-8 p-6">
          <h2 className="text-xl font-semibold mb-4">Conversation History</h2>
          <div className="min-h-[200px] bg-gray-50 rounded-lg p-4">
            <p className="text-gray-500 text-center">
              {isCallActive
                ? "Conversation in progress..."
                : "Start a call to begin chatting"}
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default VideoChat;