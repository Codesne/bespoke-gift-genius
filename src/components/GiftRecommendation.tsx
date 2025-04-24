
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

type GiftRecommendationProps = {
  title: string;
  description: string;
  reasonMatchDescription: string;
  priceRange: string;
  category: string;
  favorite?: boolean;
  index: number;
};

const GiftRecommendation = ({
  title,
  description,
  reasonMatchDescription,
  priceRange,
  category,
  index,
}: GiftRecommendationProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success(`${title} added to favorites`);
    } else {
      toast.info(`${title} removed from favorites`);
    }
  };

  return (
    <Card 
      className="overflow-hidden shadow-md animate-slide-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gift-purple/10 p-2 rounded-full">
              <Gift className="h-5 w-5 text-gift-purple" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleFavorite}
            className={isFavorite ? "text-gift-purple" : "text-gray-400"}
          >
            <Bookmark className="h-5 w-5" fill={isFavorite ? "#9b87f5" : "none"} />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="outline">{priceRange}</Badge>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Why this might match:</span> {reasonMatchDescription}
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
          <Button className="bg-gift-purple hover:bg-gift-darkpurple">
            Find Online
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default GiftRecommendation;
