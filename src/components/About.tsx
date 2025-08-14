import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Who Are We?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 shadow-elegant bg-gradient-card border-0">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-foreground">
                The Central Jersey Math Circle (CJMC) started as a collaboration between the 
                Central Jersey Math League (CJML) and students of the Edison Academy Magnet School. 
                Now in its fourth year, the circle has expanded to provide comprehensive 
                mathematical education for middle school students preparing for competitions.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Instruction</h3>
              <p className="text-muted-foreground">
                Led by experienced mathematicians with proven track records in competitive math
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Competition Focus</h3>
              <p className="text-muted-foreground">
                Specialized training designed specifically for AMC 8 success and mathematical excellence
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Critical Thinking</h3>
              <p className="text-muted-foreground">
                Comprehensive curriculum to prepare students with interactive problem-solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;