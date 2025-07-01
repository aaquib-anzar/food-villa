

const Footer = () => {
  return (
    <footer className="flex w-full justify-between items-center px-6 py-3 bg-white shadow fixed bottom-0 z-50">
      {/* Left: Copyright */}
      <p className="text-sm text-gray-600 font-medium">
        © {new Date().getFullYear()} Foodie Hub 🍔 – All Rights Reserved
      </p>

      {/* Right: Credits or Links */}
      <div className="text-sm text-gray-500 hover:text-black transition-colors">
      <a
      href="https://github.com/aaquib-anzar"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
        Built with ❤️ by Aaquib
    </a>
      </div>
    </footer>
  );
};

export default Footer;
