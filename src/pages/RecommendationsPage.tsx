
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftRecommendation from "@/components/GiftRecommendation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Recipient = {
  name: string;
  age: string;
  gender: string;
  relationship: string;
  interests: string;
  personality: string;
  occasion: string;
  budget: string;
};

// Sample gift recommendations based on different profiles
const GIFT_RECOMMENDATIONS = {
  tech: [
    {
      title: "Smart Home Speaker",
      description: "A voice-controlled smart speaker for music, information, and home automation.",
      reasonMatchDescription: "Perfect for tech enthusiasts who enjoy modern conveniences.",
      priceRange: "$50 - $100",
      category: "Tech & Gadgets",
    },
    {
      title: "Wireless Earbuds",
      description: "Premium wireless earbuds with noise cancellation and long battery life.",
      reasonMatchDescription: "Great for music lovers who are always on the go.",
      priceRange: "$100 - $250",
      category: "Tech & Gadgets",
    },
    {
      title: "Digital Art Frame",
      description: "A high-resolution digital frame that rotates through favorite photos and artwork.",
      reasonMatchDescription: "Combines technology with personalization for a meaningful gift.",
      priceRange: "$100 - $250",
      category: "Home & Decor",
    },
  ],
  creative: [
    {
      title: "Artist Subscription Box",
      description: "Monthly delivery of premium art supplies and creative projects.",
      reasonMatchDescription: "Encourages creativity and provides new materials to experiment with.",
      priceRange: "$25 - $50",
      category: "Arts & Crafts",
    },
    {
      title: "Personalized Sketchbook",
      description: "High-quality sketchbook with custom engraving or monogram.",
      reasonMatchDescription: "A thoughtful gift for someone who loves to draw or journal.",
      priceRange: "Under $25",
      category: "Arts & Crafts",
    },
    {
      title: "Creative Workshop Experience",
      description: "A paid workshop in pottery, painting, or other creative pursuits.",
      reasonMatchDescription: "Provides both an experience and a chance to learn new skills.",
      priceRange: "$50 - $100",
      category: "Experiences",
    },
  ],
  outdoors: [
    {
      title: "National Parks Pass",
      description: "Annual pass providing access to all national parks and federal recreational lands.",
      reasonMatchDescription: "Perfect for nature lovers who enjoy outdoor adventures.",
      priceRange: "$50 - $100",
      category: "Outdoors & Adventure",
    },
    {
      title: "Insulated Water Bottle",
      description: "Premium insulated water bottle that keeps drinks hot or cold all day.",
      reasonMatchDescription: "Practical yet thoughtful gift for hikers and outdoor enthusiasts.",
      priceRange: "$25 - $50",
      category: "Outdoors & Adventure",
    },
    {
      title: "Hammock",
      description: "Portable, lightweight hammock for relaxing outdoors.",
      reasonMatchDescription: "Great for someone who enjoys relaxing in nature.",
      priceRange: "$25 - $50",
      category: "Outdoors & Adventure",
    },
  ],
  cooking: [
    {
      title: "Gourmet Spice Set",
      description: "Collection of premium spices from around the world with recipe suggestions.",
      reasonMatchDescription: "Perfect for home chefs who love experimenting with new flavors.",
      priceRange: "$25 - $50",
      category: "Food & Cooking",
    },
    {
      title: "Cooking Class Experience",
      description: "A hands-on cooking class to learn new cuisines or techniques.",
      reasonMatchDescription: "Combines learning with fun for cooking enthusiasts.",
      priceRange: "$50 - $100",
      category: "Experiences",
    },
    {
      title: "Cast Iron Skillet",
      description: "High-quality, pre-seasoned cast iron skillet that will last a lifetime.",
      reasonMatchDescription: "A practical yet special gift for someone who enjoys cooking.",
      priceRange: "$25 - $50",
      category: "Kitchen & Dining",
    },
  ],
  reading: [
    {
      title: "Book Subscription",
      description: "Monthly delivery of new books tailored to their reading preferences.",
      reasonMatchDescription: "Introduces them to new authors and stories they'll love.",
      priceRange: "$25 - $50",
      category: "Books & Reading",
    },
    {
      title: "Premium Bookmarks Set",
      description: "Set of elegant, durable bookmarks with inspirational quotes.",
      reasonMatchDescription: "A thoughtful accessory for the avid reader.",
      priceRange: "Under $25",
      category: "Books & Reading",
    },
    {
      title: "Reading Light",
      description: "Rechargeable LED book light with adjustable brightness levels.",
      reasonMatchDescription: "Perfect for late-night reading without disturbing others.",
      priceRange: "Under $25",
      category: "Books & Reading",
    },
  ],
  default: [
    {
      title: "Personalized Photo Album",
      description: "Custom photo album with selected memories and personal messages.",
      reasonMatchDescription: "A meaningful gift that celebrates your relationship.",
      priceRange: "$25 - $50",
      category: "Personalized Gifts",
    },
    {
      title: "Subscription Box",
      description: "Monthly subscription box tailored to their interests, delivered to their door.",
      reasonMatchDescription: "A gift that continues giving throughout the year.",
      priceRange: "$25 - $50",
      category: "Subscription Gifts",
    },
    {
      title: "Gourmet Gift Basket",
      description: "Assortment of premium snacks, treats, and beverages.",
      reasonMatchDescription: "Everyone appreciates delicious food and drinks.",
      priceRange: "$50 - $100",
      category: "Food & Drink",
    },
  ],
};

const RecommendationsPage = () => {
  const [recipientData, setRecipientData] = useState<Recipient | null>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get recipient data from localStorage
    const storedData = localStorage.getItem("recipientData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setRecipientData(parsedData);
      
      // Simulate API call to get recommendations
      setTimeout(() => {
        // Determine which set of recommendations to show based on interests
        const interests = parsedData.interests.toLowerCase();
        
        let selectedRecommendations: any[] = [];
        
        if (interests.includes("tech") || interests.includes("gadget") || interests.includes("computer")) {
          selectedRecommendations = GIFT_RECOMMENDATIONS.tech;
        } else if (interests.includes("art") || interests.includes("paint") || interests.includes("craft") || interests.includes("creat")) {
          selectedRecommendations = GIFT_RECOMMENDATIONS.creative;
        } else if (interests.includes("hike") || interests.includes("camp") || interests.includes("outdoor") || interests.includes("nature")) {
          selectedRecommendations = GIFT_RECOMMENDATIONS.outdoors;
        } else if (interests.includes("cook") || interests.includes("bake") || interests.includes("food") || interests.includes("recipe")) {
          selectedRecommendations = GIFT_RECOMMENDATIONS.cooking;
        } else if (interests.includes("book") || interests.includes("read") || interests.includes("novel") || interests.includes("literature")) {
          selectedRecommendations = GIFT_RECOMMENDATIONS.reading;
        } else {
          // Default recommendations
          selectedRecommendations = GIFT_RECOMMENDATIONS.default;
        }
        
        setRecommendations(selectedRecommendations);
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-gift-purple border-solid mb-4"></div>
            <h2 className="text-2xl font-semibold mb-2">Finding Perfect Gifts</h2>
            <p className="text-gray-600">Our AI is analyzing preferences to find the best matches...</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  if (!recipientData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow py-10 px-4 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">No recipient information found</h2>
            <p className="text-gray-600 mb-6">
              Please complete the questionnaire to get gift recommendations.
            </p>
            <Link to="/quiz">
              <Button className="bg-gift-purple hover:bg-gift-darkpurple">
                Go to Questionnaire
              </Button>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/quiz" className="inline-flex items-center text-gift-purple hover:underline mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Questionnaire
            </Link>
            
            <h1 className="text-3xl font-bold mb-4">
              Gift Recommendations for {recipientData.name}
            </h1>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h2 className="font-medium mb-2">Based on your answers:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><span className="font-medium">Relationship:</span> {recipientData.relationship}</li>
                <li><span className="font-medium">Age range:</span> {recipientData.age}</li>
                <li><span className="font-medium">Occasion:</span> {recipientData.occasion}</li>
                <li><span className="font-medium">Budget:</span> {recipientData.budget}</li>
              </ul>
            </div>
          </div>
          
          <div className="grid gap-6">
            {recommendations.map((gift, index) => (
              <GiftRecommendation
                key={index}
                index={index}
                title={gift.title}
                description={gift.description}
                reasonMatchDescription={gift.reasonMatchDescription}
                priceRange={gift.priceRange}
                category={gift.category}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4">Looking for more options?</h3>
            <Link to="/quiz">
              <Button className="bg-gift-purple hover:bg-gift-darkpurple">
                Refine Your Answers
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecommendationsPage;
