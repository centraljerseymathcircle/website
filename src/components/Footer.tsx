import { Mail, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:centraljerseymathcircle@gmail.com" className="hover:opacity-80 transition-opacity">
                  centraljerseymathcircle@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Crabiel Hall</p>
                  <p>Blue Colt Dr, Edison, NJ 08817</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Course Schedule</h3>
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5" />
              <span>Saturdays or Sundays 1:00 PM - 4:00 PM</span>
            </div>
            <p className="text-sm opacity-80">
              Classes run from November 2024 through January 2025
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About CJMC</h3>
            <p className="text-sm opacity-80 mb-4">
              Preparing middle school students for mathematical excellence through 
              comprehensive AMC 8 competition training.
            </p>
            <p className="text-xs opacity-60">
              All proceeds benefit the Central Jersey Math League ARML team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;