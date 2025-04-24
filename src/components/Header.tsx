
import { Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Gift className="h-6 w-6 text-gift-purple" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gift-purple to-gift-darkpurple bg-clip-text text-transparent">
            Bespoke Gift Genius
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-gift-darkgray hover:text-gift-purple transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quiz" className="text-gift-darkgray hover:text-gift-purple transition-colors">
                Find a Gift
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
