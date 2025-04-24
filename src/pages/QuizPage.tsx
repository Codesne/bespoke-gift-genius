
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionnaireForm from "@/components/QuestionnaireForm";
import { useNavigate } from "react-router-dom";

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

const QuizPage = () => {
  const navigate = useNavigate();

  const handleQuestionnaireComplete = (data: Recipient) => {
    // Store the recipient data in local storage
    localStorage.setItem("recipientData", JSON.stringify(data));
    navigate("/recommendations");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-8">Tell Us About Your Gift Recipient</h1>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Answer a few questions about the person you're shopping for, and our AI will suggest perfect gift ideas tailored to their personality and preferences.
          </p>
          
          <QuestionnaireForm onComplete={handleQuestionnaireComplete} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
