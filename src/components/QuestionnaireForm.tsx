
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

type QuestionnaireFormProps = {
  onComplete: (data: Recipient) => void;
};

const QuestionnaireForm = ({ onComplete }: QuestionnaireFormProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [recipientData, setRecipientData] = useState<Recipient>({
    name: "",
    age: "",
    gender: "",
    relationship: "",
    interests: "",
    personality: "",
    occasion: "",
    budget: "",
  });

  const handleChange = (field: keyof Recipient, value: string) => {
    setRecipientData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete(recipientData);
      navigate("/recommendations");
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Card className="p-6 shadow-md max-w-2xl w-full mx-auto animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            {step === 1 && "Who's the gift for?"}
            {step === 2 && "Tell us about them"}
            {step === 3 && "What's the occasion?"}
            {step === 4 && "Final details"}
          </h2>
          <span className="text-sm text-gray-500">Step {step} of 4</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-gift-purple h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4 animate-slide-in">
        {step === 1 && (
          <>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Recipient's name
              </label>
              <Input
                id="name"
                placeholder="Enter name"
                value={recipientData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="relationship" className="block text-sm font-medium">
                Relationship to you
              </label>
              <Select
                value={recipientData.relationship}
                onValueChange={(value) => handleChange("relationship", value)}
              >
                <SelectTrigger id="relationship">
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="partner">Partner/Spouse</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                  <SelectItem value="sibling">Sibling</SelectItem>
                  <SelectItem value="colleague">Colleague</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="age" className="block text-sm font-medium">
                  Age range
                </label>
                <Select
                  value={recipientData.age}
                  onValueChange={(value) => handleChange("age", value)}
                >
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="child">Child (0-12)</SelectItem>
                    <SelectItem value="teen">Teen (13-19)</SelectItem>
                    <SelectItem value="young-adult">Young Adult (20-29)</SelectItem>
                    <SelectItem value="adult">Adult (30-49)</SelectItem>
                    <SelectItem value="senior">Senior (50+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <Select
                  value={recipientData.gender}
                  onValueChange={(value) => handleChange("gender", value)}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interests" className="block text-sm font-medium">
                Interests and hobbies
              </label>
              <Textarea
                id="interests"
                placeholder="What does this person enjoy doing? (e.g., cooking, reading, sports, tech)"
                value={recipientData.interests}
                onChange={(e) => handleChange("interests", e.target.value)}
                className="h-24"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="personality" className="block text-sm font-medium">
                Personality traits
              </label>
              <Textarea
                id="personality"
                placeholder="How would you describe their personality? (e.g., adventurous, creative, practical)"
                value={recipientData.personality}
                onChange={(e) => handleChange("personality", e.target.value)}
                className="h-24"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="space-y-2">
              <label htmlFor="occasion" className="block text-sm font-medium">
                Occasion
              </label>
              <Select
                value={recipientData.occasion}
                onValueChange={(value) => handleChange("occasion", value)}
              >
                <SelectTrigger id="occasion">
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="graduation">Graduation</SelectItem>
                  <SelectItem value="holiday">Holiday</SelectItem>
                  <SelectItem value="housewarming">Housewarming</SelectItem>
                  <SelectItem value="baby-shower">Baby Shower</SelectItem>
                  <SelectItem value="thank-you">Thank You</SelectItem>
                  <SelectItem value="just-because">Just Because</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-medium">
                Budget
              </label>
              <Select
                value={recipientData.budget}
                onValueChange={(value) => handleChange("budget", value)}
              >
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Under $25</SelectItem>
                  <SelectItem value="moderate">$25 - $50</SelectItem>
                  <SelectItem value="generous">$50 - $100</SelectItem>
                  <SelectItem value="premium">$100 - $250</SelectItem>
                  <SelectItem value="luxury">Over $250</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">Ready to get gift recommendations!</h3>
              <p className="text-gray-600">
                Our AI will analyze the information and suggest personalized gift ideas for{" "}
                {recipientData.name || "your recipient"}.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between mt-8">
        {step > 1 ? (
          <Button variant="outline" type="button" onClick={previousStep}>
            Back
          </Button>
        ) : (
          <div></div>
        )}
        <Button 
          type="button" 
          onClick={nextStep} 
          className="bg-gift-purple hover:bg-gift-darkpurple"
        >
          {step === 4 ? "Get Recommendations" : "Continue"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default QuestionnaireForm;
