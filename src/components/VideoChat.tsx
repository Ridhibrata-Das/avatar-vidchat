import { useState, useEffect, useRef } from "react";
import { useConversation } from "@11labs/react";
import { Mic, MicOff, Video, VideoOff, PhoneOff } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "./ui/use-toast";

const VideoChat = () => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const conversation = useConversation({
    onConnect: () => {
      toast({
        title: "Connected",
        description: "AI assistant is ready to chat",
      });
    },
    onDisconnect: () => {
      setIsCallActive(false);
      toast({
        title: "Disconnected",
        description: "Call ended",
        variant: "destructive",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

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
          toast({
            title: "Camera Error",
            description: "Unable to access camera",
            variant: "destructive",
          });
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
      await conversation.startSession({
        agentId: "E7uRv9f5EFaBZCh3KN50",
      });
      setIsCallActive(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start call",
        variant: "destructive",
      });
    }
  };

  const endCall = async () => {
    try {
      await conversation.endSession();
      setIsCallActive(false);
      setIsMicOn(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to end call",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-6">
        {/* User Video */}
        <div className="video-container">
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
        <div className="video-container bg-teal-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mb-4 mx-auto flex items-center justify-center">
                <span className="text-4xl">AI</span>
              </div>
              <p className="text-gray-600">
                {isCallActive ? "AI Assistant Active" : "Start call to connect"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className={`control-button ${isMicOn ? "active" : ""}`}
          onClick={toggleMic}
        >
          {isMicOn ? <Mic /> : <MicOff />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`control-button ${isCameraOn ? "active" : ""}`}
          onClick={toggleCamera}
        >
          {isCameraOn ? <Video /> : <VideoOff />}
        </Button>
        {isCallActive && (
          <Button
            variant="destructive"
            size="icon"
            className="control-button"
            onClick={endCall}
          >
            <PhoneOff />
          </Button>
        )}
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
  );
};

export default VideoChat;