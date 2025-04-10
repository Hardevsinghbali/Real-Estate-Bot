"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  Search,
  Menu,
  X,
  MessageSquare,
  Building,
  TrendingUp,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white bg-opacity-90 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center">
              <Building className="h-5 w-5 text-white" />
            </div>
            <span
              className={`font-bold text-xl ${
                isScrolled ? "text-slate-800" : "text-white drop-shadow-md"
              }`}
            >
              RealEstate<span className="text-cyan-400">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`flex items-center gap-1 font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? "text-slate-700" : "text-slate-300"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/chat">
              <Button
                variant="outline"
                className={`flex items-center gap-1 ${
                  isScrolled
                    ? "border-blue-500 text-blue-500 hover:bg-blue-50"
                    : "border-white text-white hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat with AI</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-xl shadow-lg animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                href="/chat"
                className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Chat with AI</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
