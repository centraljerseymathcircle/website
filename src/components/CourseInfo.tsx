import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Clock, Users, Book, User, BookOpen } from "lucide-react";

const CourseInfo = () => {
  const scheduleItems = [
    { date: "Saturday, Nov 15, 2025", topic: "Algebra" },
    { date: "Saturday, Nov 22, 2025", topic: "Geometry" },
    { date: "Saturday, Nov 29, 2025", topic: "Number Theory" },
    { date: "Saturday, Dec 6, 2025", topic: "Counting and Probability" },
    { date: "Saturday, Dec 13, 2025", topic: "Algebra" },
    { date: "Saturday, Dec 20, 2025", topic: "Geometry" },
    { date: "Saturday, Jan 3, 2026", topic: "Number Theory" },
    { date: "Sunday, Jan 11, 2026", topic: "Counting and Probability" },
    { date: "Sunday, Jan 18, 2026", topic: "Problem Solving" },
    { date: "Saturday, Jan 24, 2026", topic: "Final AMC 8 Exam" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            In-Person Course Details
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our comprehensive AMC 8 preparation program
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <Calendar className="w-6 h-6 text-primary" />
                  Course Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Time:</p>
                    <p className="text-muted-foreground">Saturdays or Sundays 1:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Structure:</p>
                    <p className="text-muted-foreground">10 sessions total: 9 topic classes + final exam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Curriculum:</p>
                    <p className="text-muted-foreground">Comprehensive AMC 8 preparation covering all essential topics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location & Logistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Location:</p>
                    <p className="text-muted-foreground">Crabiel Hall<br />Blue Colt Dr, Edison, NJ 08817</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Who:</p>
                    <p className="text-muted-foreground">Students in Grades 6, 7, and 8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <span style={{ color: 'red', fontSize:18}}>Note: 8 of our classes, including the final exam, are on Saturdays. Our classes on January 11th and January 18th are on Sundays to allow for the Woobridge Academy and Edison Academy entrance exams.</span>

          {/* Full width schedule section */}
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-foreground text-center justify-center">
                <Calendar className="w-7 h-7 text-primary" />
                Class Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="bg-secondary/50 rounded-lg p-6 border-l-4 border-primary hover:shadow-md transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <p className="font-semibold text-foreground text-base">{item.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <p className="text-base text-muted-foreground">1:00-4:00 PM</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <p className="text-primary font-medium text-base">{item.topic}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant bg-gradient-primary text-white border-0">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <DollarSign className="w-7 h-7" />
                Registration & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Regular Registration</h3>
                  <p className="text-3xl font-bold">$300</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Returning Students</h3>
                  <p className="text-3xl font-bold">$250</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-lg font-semibold mb-2">Early Bird Discount!</p>
                <p>10% off if you register by September 10th, 11:59 PM</p>
              </div>

              <Button 
                variant="hero"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                onClick={() => window.open('https://google.com', '_blank')}
              >
                Register Now
              </Button>

              <div className="text-base opacity-90 space-y-3">
                <p className="text-lg font-semibold">• All proceeds benefit the Central Jersey Math League ARML team</p>
                <p className="text-lg font-semibold">• Financial assistance available - contact centraljerseymathcircle@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;