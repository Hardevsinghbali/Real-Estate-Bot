"use client";

import { useState, useEffect } from "react";
import type { Message } from "ai";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isUser = message.role === "user";

  // Function to check if content contains HTML
  const isHtmlContent = (content: string): boolean => {
    return (
      content.includes("<div") ||
      content.includes("<span") ||
      content.includes("<p") ||
      content.includes("<h") ||
      content.includes("<ul") ||
      content.includes("<li")
    );
  };

  // Function to enhance property listings in markdown
  const enhancePropertyContent = (content: string) => {
    // Check if content contains property listing patterns
    console.log(content);
    if (
      content.includes("## Property Details") ||
      content.includes("Location:") ||
      content.includes("Price:") ||
      content.includes("Bedrooms:")
    ) {
      return transformPropertyListing(content);
    }
    return content;
  };

  // Transform markdown property listings into enhanced UI
  const transformPropertyListing = (content: string) => {
    // This is a simplified transformation - in a real app you'd use regex or proper parsing
    const sections = content.split(/(?=##\s)/g);

    return sections
      .map((section, index) => {
        // If this looks like a property details section
        if (section.startsWith("## Property Details")) {
          // Extract property details using simple pattern matching
          const locationMatch = section.match(/\*\*Location:\*\*\s*([^\n]+)/);
          const priceMatch = section.match(/\*\*Price:\*\*\s*([^\n]+)/);
          const sizeMatch = section.match(/\*\*Size:\*\*\s*([^\n]+)/);
          const bedroomsMatch = section.match(/\*\*Bedrooms:\*\*\s*([^\n]+)/);
          const bathroomsMatch = section.match(/\*\*Bathrooms:\*\*\s*([^\n]+)/);

          const location = locationMatch
            ? locationMatch[1]
            : "Location not specified";
          const price = priceMatch ? priceMatch[1] : "Price not specified";
          const size = sizeMatch ? sizeMatch[1] : "Size not specified";
          const bedrooms = bedroomsMatch ? bedroomsMatch[1] : "Not specified";
          const bathrooms = bathroomsMatch
            ? bathroomsMatch[1]
            : "Not specified";

          // Return enhanced property card
          return `
<div class="property-card mb-4">
  <div class="p-4 gradient-blue text-white rounded-t-xl">
    <h3 class="text-lg font-bold">Property Details</h3>
  </div>
  <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex items-center gap-2">
      <span class="p-2 bg-cyan-100 rounded-full text-cyan-600">🏠</span>
      <div>
        <div class="text-sm text-slate-500">Location</div>
        <div class="font-medium">${location}</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="p-2 bg-green-100 rounded-full text-green-600">💰</span>
      <div>
        <div class="text-sm text-slate-500">Price</div>
        <div class="font-medium">${price}</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="p-2 bg-purple-100 rounded-full text-purple-600">📏</span>
      <div>
        <div class="text-sm text-slate-500">Size</div>
        <div class="font-medium">${size}</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="p-2 bg-amber-100 rounded-full text-amber-600">🛏️</span>
      <div>
        <div class="text-sm text-slate-500">Bedrooms</div>
        <div class="font-medium">${bedrooms}</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="p-2 bg-teal-100 rounded-full text-teal-600">🚿</span>
      <div>
        <div class="text-sm text-slate-500">Bathrooms</div>
        <div class="font-medium">${bathrooms}</div>
      </div>
    </div>
  </div>
</div>
`;
        } else if (
          section.startsWith("## Price Prediction") ||
          section.startsWith("## Market Insights")
        ) {
          // Enhanced styling for other sections
          return `
<div class="message-card mb-4">
  <div class="p-4 ${
    section.startsWith("## Price Prediction")
      ? "gradient-purple"
      : "gradient-green"
  } text-white rounded-t-xl">
    <h3 class="text-lg font-bold">${section
      .split("\n")[0]
      .replace("## ", "")}</h3>
  </div>
  <div class="p-4 bg-white text-gray-900">
    ${section.split("\n").slice(1).join("\n")}
  </div>
</div>
`;
        }

        return section;
      })
      .join("\n");
  };

  return (
    <div
      className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <Avatar
        className={`h-10 w-10 shadow-md ${
          isUser ? "" : "ring-2 ring-cyan-200"
        }`}
      >
        {isUser ? (
          <AvatarFallback className="bg-gradient-to-br from-slate-700 to-slate-900 text-white">
            <User className="h-5 w-5" />
          </AvatarFallback>
        ) : (
          <AvatarFallback className="gradient-blue text-black">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        )}
      </Avatar>
      <div
        className={`rounded-2xl px-5 py-3 max-w-[85%] shadow-md ${
          isUser
            ? "gradient-blue text-white font-medium"
            : "bg-white text-black border-2 border-slate-300"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {isHtmlContent(message.content) ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: enhancePropertyContent(message.content),
                }}
              />
            ) : (
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-xl font-bold mb-3 bg-clip-text text-transparent gradient-blue"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-lg font-bold mt-4 mb-2 text-cyan-700"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-md font-bold mt-3 mb-2 text-cyan-600"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="my-3 space-y-1" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span {...props} />
                    </li>
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-cyan-700" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="mb-3" {...props} />,
                }}
              >
                {message.content}
              </ReactMarkdown>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
