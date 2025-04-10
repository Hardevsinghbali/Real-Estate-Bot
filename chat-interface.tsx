"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Send,
  Bot,
  Home,
  Building,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import MessageItem from "./message-item";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle form submission
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleSubmit(e);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Card className="w-full shadow-xl border-2 border-slate-300 overflow-hidden rounded-2xl">
      <CardHeader className="border-b-2 gradient-blue text-white">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <span>Real Estate Chat Assistant</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 bg-gradient-to-b from-slate-100 to-white">
        <ScrollArea className="h-[60vh] p-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 text-slate-600">
              <div className="relative w-24 h-24 mb-6 animate-float">
                <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-xl"></div>
                <Bot className="h-16 w-16 text-cyan-600 absolute inset-0 m-auto" />
              </div>
              <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent gradient-blue">
                Welcome to Real Estate Assistant
              </h3>
              <p className="text-sm max-w-md mb-8">
                Ask me about property listings, market trends, price
                predictions, or any other real estate questions you might have.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-lg">
                {[
                  {
                    icon: <Home className="h-4 w-4" />,
                    text: "Find properties",
                  },
                  {
                    icon: <Building className="h-4 w-4" />,
                    text: "Market trends",
                  },
                  {
                    icon: <DollarSign className="h-4 w-4" />,
                    text: "Price predictions",
                  },
                  {
                    icon: <TrendingUp className="h-4 w-4" />,
                    text: "Investment advice",
                  },
                ].map((item, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="flex flex-col items-center justify-center bg-white/80 h-20 p-2 hover:bg-cyan-50 hover:border-cyan-200 text-gray-900 transition-all duration-300 group"
                    onClick={() =>
                      handleInputChange({ target: { value: item.text } } as any)
                    }
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mb-2 group-hover:bg-cyan-200 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs text-center">{item.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 pt-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`opacity-1 ${
                    message.role === "user"
                      ? "animate-slide-in"
                      : "animate-slide-in-left"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <MessageItem message={message} />
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 animate-fade-in">
                  <Avatar className="h-10 w-10 shadow-md">
                    <AvatarFallback className="gradient-blue text-white">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex h-8 items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <div
                      className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4 bg-white">
        <form
          onSubmit={onSubmit}
          className="flex w-full items-center space-x-2"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 border-[hsl(var(--chat-input-border))] text-gray-900 placeholder:text-[hsl(var(--chat-input-placeholder))] focus:border-cyan-400 rounded-full py-6 px-4 shadow-sm transition-all duration-300 focus:ring-2 focus:ring-cyan-200"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || input.trim() === ""}
            className={`rounded-full h-12 w-12 shadow-md transition-all duration-300 ${
              input.trim() === ""
                ? "bg-slate-400"
                : "gradient-blue hover:shadow-lg hover:scale-105"
            }`}
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
