import ChatInterface from "@/components/chat-interface"
import Header from "@/components/header"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent gradient-blue">
              AI Real Estate Assistant
            </h1>
            <p className="text-slate-600">
              Ask questions about properties, get market insights, or receive personalized recommendations.
            </p>
          </div>

          <ChatInterface />
        </div>
      </div>
    </div>
  )
}

