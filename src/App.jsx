import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technologies data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = async (tech) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "bottom-right",
    });
  };

  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.error(`${itemToRemove?.name || "Item"} removed from stack!`, {
      position: "bottom-right",
    });
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from stack!", {
      position: "bottom-right",
    });
  };

  return (
    <>
      <Navbar />
      <Banner />

      {loading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <h2 className="text-xl font-bold text-gray-600 animate-pulse">
            Loading data, Please wait...
          </h2>
        </div>
      ) : (
        <div className=" mx-auto min-h-screen bg-[#ffffff] p-6 md:p-12 font-['Plus_Jakarta_Sans']">
          <div className="container mx-auto">
            <div className="mb-8">

              <h1 className="text-[36px] font-extrabold font-inter text-[#0F172A]  mb-2">
                Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
              </h1>

              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[#64748B] text-[16px]">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechnologyCard
                    key={tech.id}
                    tech={tech}
                    isAdded={stack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>
              <div className="lg:col-span-1">
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          </div>

          <ToastContainer position="bottom-right" autoClose={2000} />
        </div>
      )}

      <Footer />
    </>
  );
}