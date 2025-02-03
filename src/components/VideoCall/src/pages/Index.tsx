import VideoChat from "@/components/VideoChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b">
        <h1 className="text-2xl font-bold text-center">AI Video Chat</h1>
      </header>
      <main>
        <VideoChat />
      </main>
    </div>
  );
};

export default Index;