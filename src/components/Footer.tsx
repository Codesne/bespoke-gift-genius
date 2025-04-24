
const Footer = () => {
  return (
    <footer className="bg-gift-lightgray py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Bespoke Gift Genius. All rights reserved.</p>
          <p className="mt-1">Powered by AI to help you find the perfect gift for everyone in your life.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
