
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gift, Search, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-purple-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gift-purple to-gift-darkpurple bg-clip-text text-transparent">
              Find the Perfect Gift for Anyone
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our AI-powered gift recommendation engine helps you discover thoughtful and unique gifts based on personality, interests, and occasion.
            </p>
            <Link to="/quiz">
              <Button className="bg-gift-purple hover:bg-gift-darkpurple text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all">
                Start Finding Gifts
              </Button>
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-gift-purple/10 rounded-full p-4 inline-flex justify-center mb-4">
                  <User className="h-8 w-8 text-gift-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tell Us About Them</h3>
                <p className="text-gray-600">
                  Share details about the recipient's personality, interests, and the occasion through our simple questionnaire.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-gift-purple/10 rounded-full p-4 inline-flex justify-center mb-4">
                  <Search className="h-8 w-8 text-gift-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analyzes Preferences</h3>
                <p className="text-gray-600">
                  Our AI analyzes the information to understand what kind of gifts would be meaningful and appreciated.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-gift-purple/10 rounded-full p-4 inline-flex justify-center mb-4">
                  <Gift className="h-8 w-8 text-gift-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Personalized Ideas</h3>
                <p className="text-gray-600">
                  Receive a curated list of gift suggestions tailored specifically to the person you're shopping for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gift-lightgray py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find the Perfect Gift?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              No more generic gifts or last-minute panic shopping. Get thoughtful recommendations in minutes.
            </p>
            <Link to="/quiz">
              <Button className="bg-gift-purple hover:bg-gift-darkpurple text-white px-8 py-2 rounded-md">
                Start the Quiz
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
