import { Outlet } from "react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 m-4 bg-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <button
          className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          onClick={setIsVisible}
        >
          {isVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {isVisible && (
        <p className="mt-3 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      )}
    </div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">
      <h1 className="text-4xl font-extrabold text-center py-6 text-gray-800">
        About Us
      </h1>
      <Outlet />
      <Section
        title="About"
        description={`Hey there, hungry human! 👋
Welcome to Foodie Hub — your ultimate food fix partner. Whether it’s midnight cravings, lazy Sundays, or just a bad day needing good biryani, we’ve got your back. We deliver hot, delicious food from your favorite restaurants faster than you can say "extra cheese, please!" 🍕🚀

Crave it. Tap it. Eat happy. 😋`}
        isVisible={isVisible === "about"}
        setIsVisible={() => setIsVisible(isVisible === "about" ? "" : "about")}
      />
      <Section
        title="Careers at Foodie Hub"
        description={`Join the feast behind the scenes! 🍽️
At Foodie Hub, we're not just delivering food — we're building the future of convenience. If you're passionate about tech, food, or solving real-world problems, come build with us.

🚀 Open Opportunities:
• Frontend Developer (React.js): Craft slick, responsive UIs that make ordering food feel like magic.

• Backend Developer (Node.js, MongoDB): Cook up fast, scalable APIs to keep the orders rolling and the food flowing.

• UI/UX Designer: Design intuitive, mouth-watering experiences users can’t resist.

Drop your CV at: careers@foodiehub.com`}
        isVisible={isVisible === "career"}
        setIsVisible={() =>
          setIsVisible(isVisible === "career" ? "" : "career")
        }
      />
      <Section
        title="Meet the Team 👨‍💻👩‍🍳"
        description={`We're a small team with big appetites — for both food and innovation!

• John (Founder & Fullstack Dev): The brain behind the build, balancing backend logic with frontend flair.

• Sara (Product Designer): The eyes of the user, turning tasty ideas into beautiful, clickable pixels.

• Dev (DevOps & Infra): Keeps our app fast, smooth, and always hungry for scale.

Together, we're cooking up something amazing. And we're just getting started!`}
        isVisible={isVisible === "team"}
        setIsVisible={() => setIsVisible(isVisible === "team" ? "" : "team")}
      />
    </div>
  );
};

export default About;
