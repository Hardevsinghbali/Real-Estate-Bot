import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import {
  Search,
  MapPin,
  HomeIcon,
  Building,
  DollarSign,
  TrendingUp,
  Users,
  Star,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-16 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Find Your Dream Home with AI Assistance
            </h1>
            <p
              className="text-xl text-white/90 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Discover the perfect property with our AI-powered real estate
              platform. Get personalized recommendations, market insights, and
              expert advice.
            </p>

            {/* Search Box */}
            {/* <div
              className="bg-white p-4 rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-slate-500 mb-1 block">
                    Location
                  </label>
                  <div className="flex items-center border rounded-lg px-3 py-2 bg-slate-50">
                    <MapPin className="h-5 w-5 text-slate-400 mr-2" />
                    <input
                      type="text"
                      placeholder="City, neighborhood, or address"
                      className="bg-transparent w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-32">
                    <label className="text-sm font-medium text-slate-500 mb-1 block">
                      Price Range
                    </label>
                    <select className="w-full border rounded-lg px-3 py-2 bg-slate-50 appearance-none">
                      <option>Any Price</option>
                      <option>$100k - $200k</option>
                      <option>$200k - $500k</option>
                      <option>$500k - $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                  <div className="w-32">
                    <label className="text-sm font-medium text-slate-500 mb-1 block">
                      Property Type
                    </label>
                    <select className="w-full border rounded-lg px-3 py-2 bg-slate-50 appearance-none">
                      <option>Any Type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Condo</option>
                      <option>Land</option>
                    </select>
                  </div>
                </div>
                <Button className="gradient-blue h-full mt-auto">
                  <Search className="h-4 w-4 mr-2" />
                  <span>Search</span>
                </Button>
              </div>
            </div> */}

            <div
              className="flex items-center gap-4 mt-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Link href="/chat">
                <Button
                  variant="outline"
                  className="border-white bg-white text-gray-900 hover:bg-white hover:bg-opacity-10"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Chat with AI Assistant</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-slate-50 px-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties that match
              your lifestyle and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Downtown Apartment",
                location: "123 Main St, Downtown",
                price: "$450,000",
                beds: 2,
                baths: 2,
                sqft: "1,200",
                image:
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
              },
              {
                title: "Luxury Suburban Villa",
                location: "456 Park Ave, Westside",
                price: "$1,250,000",
                beds: 4,
                baths: 3.5,
                sqft: "3,500",
                image:
                  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
              },
              {
                title: "Cozy Beachfront Condo",
                location: "789 Ocean Dr, Seaside",
                price: "$650,000",
                beds: 3,
                baths: 2,
                sqft: "1,800",
                image:
                  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.price}
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-slate-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex text-slate-600 justify-between border-t pt-4">
                    <div className="flex items-center">
                      <HomeIcon className="h-4 w-4 text-slate-400 mr-1" />
                      <span className="text-sm">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <HomeIcon className="h-4 w-4 text-slate-400 mr-1" />
                      <span className="text-sm">{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <HomeIcon className="h-4 w-4 text-slate-400 mr-1" />
                      <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="py-20 px-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Real Estate Market Insights
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Stay informed with the latest market trends and statistics to make
              better investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Average Home Price",
                value: "$425,000",
                change: "+5.2%",
                icon: <DollarSign className="h-6 w-6" />,
              },
              {
                title: "Properties Listed",
                value: "1,240",
                change: "+12.8%",
                icon: <Building className="h-6 w-6" />,
              },
              {
                title: "Days on Market",
                value: "32",
                change: "-8.5%",
                icon: <TrendingUp className="h-6 w-6" />,
              },
              {
                title: "Mortgage Rate",
                value: "4.5%",
                change: "+0.3%",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md border-none hover:bg-opacity-20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded-full ${
                        stat.change.startsWith("+")
                          ? "bg-green-500 bg-opacity-20 text-green-300"
                          : "bg-red-500 bg-opacity-20 text-red-300"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-blue-100 mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the dedicated professionals behind our real estate platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Utsav Mukherjee",
                id: "12300475",
                role: "Lead Developer",
                image: "/utsav.jpeg",
              },
              {
                name: "Bhumika Narula",
                id: "12305859",
                role: "UX Designer",
                image: "/bhumi.jpeg",
              },
              {
                name: "Hardev Singh Bali",
                id: "12319774",
                role: "Project Manager",
                image: "/balli.jpeg",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group relative h-96"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-300"></div>
                <CardContent className="p-6 text-center absolute bottom-0 left-0 right-0 text-white z-10">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-300 text-sm mb-1">{member.role}</p>
                  <p className="text-slate-300 text-sm mb-4">ID: {member.id}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 px-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl text-gray-900 font-bold mb-6">
                Meet Your AI Real Estate Assistant
              </h2>
              <p className="text-slate-600 mb-8">
                Our advanced AI assistant helps you navigate the complex real
                estate market with ease. Get instant answers to your questions,
                personalized recommendations, and expert insights.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Get property recommendations based on your preferences",
                  "Receive accurate price predictions and market analysis",
                  "Ask questions about neighborhoods, schools, and amenities",
                  "Compare properties and investment opportunities",
                  "Stay updated on market trends and opportunities",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <Link href="/chat">
                <Button className="gradient-blue text-white px-8 py-6 text-lg">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  <span>Chat with AI Assistant</span>
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>

              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="p-4 gradient-blue text-white rounded-t-xl">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Real Estate AI Assistant</span>
                  </h3>
                </div>

                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-blue flex items-center justify-center shrink-0">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-slate-100 text-black rounded-lg p-3 max-w-[80%]">
                        <p>
                          Hello! I'm your AI real estate assistant. How can I
                          help you today?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[80%]">
                        <p>
                          I'm looking for a 3-bedroom house in the downtown area
                          with a budget of $500,000.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-blue flex items-center justify-center shrink-0">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-slate-100 text-black rounded-lg p-3 max-w-[80%]">
                        <p>
                          I found 5 properties that match your criteria. Here's
                          one of the best options:
                        </p>
                        <div className="mt-3 bg-white rounded-lg p-3 border border-slate-200">
                          <h4 className="font-bold">
                            Modern Downtown Townhouse
                          </h4>
                          <p className="text-sm text-slate-500 mb-2">
                            123 Main Street, Downtown
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">$485,000</span>
                            <span>3 beds • 2.5 baths</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask about properties, markets, or prices..."
                      className="flex-1 border bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <Button className="rounded-full gradient-blue w-10 h-10 p-0 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Start your journey today with our AI-powered real estate platform
            and discover properties that perfectly match your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
              <Search className="h-5 w-5 mr-2" />
              <span>Search Properties</span>
            </Button>
            <Link href="/chat">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-6 text-lg"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>Chat with AI Assistant</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">
                  RealEstate<span className="text-blue-500">AI</span>
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                Your AI-powered real estate platform for finding the perfect
                property with personalized recommendations and market insights.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/chat"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    AI Assistant
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate-400">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    123 Real Estate Ave
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:info@realestateai.com"
                    className="hover:text-white transition-colors"
                  >
                    info@realestateai.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-white transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} RealEstateAI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
