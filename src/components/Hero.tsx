import { Button } from "@/components/ui/button";
import { GraduationCap, Calculator, Trophy } from "lucide-react";
import heroImage from "@/assets/math-hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(25, 41, 88, 0.8), rgba(76, 29, 149, 0.8)), url(${heroImage})` }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <GraduationCap className="w-12 h-12 text-white" />
              <Calculator className="w-10 h-10 text-white opacity-80" />
              <Trophy className="w-10 h-10 text-white opacity-80" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Central Jersey
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Math Circle
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Preparing middle school students for mathematical excellence through
            <br className="hidden md:block" />
            comprehensive AMC 8 competition training
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfYQ129htg_WcuUpXr8A5oJPPubLCAbBljSY49lDYgk5hr96g/viewform?usp=dialog', '_blank')}
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">10</h3>
              <p className="text-sm opacity-80">Weekly Sessions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">4</h3>
              <p className="text-sm opacity-80">Core Math Topics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">Jan 24  </h3>
              <p className="text-sm opacity-80">AMC 8 Exam Date</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;