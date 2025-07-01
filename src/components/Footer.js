

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-3 bg-white shadow sticky bottom-0 z-50">
      {/* Left: Copyright */}
      <p className="text-sm text-gray-600 font-medium">
        © {new Date().getFullYear()} Foodie Hub 🍔 – All Rights Reserved
      </p>

      {/* Right: Credits or Links */}
      <div className="text-sm text-gray-500 hover:text-black transition-colors">
        Built with ❤️ by Aaquib
      </div>
    </footer>
  );
};

export default Footer;
