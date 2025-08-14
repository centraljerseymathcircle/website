import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Triangle, Hash, Shuffle } from "lucide-react";

const Syllabus = () => {
  const topics = [
    {
      icon: Calculator,
      title: "Algebra",
      description: "Algebra is one of the first subjects that students learn in mathematics. Subjects covered for the AMC 8 include solving linear equations, graphing and solving inequalities, solving quadratic equations, sequences, series, exponents/logarithms, and complex numbers.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Triangle,
      title: "Geometry", 
      description: "Geometry is the study of shapes and figures, and is another key part of the AMC 8 and the regular middle school math curriculum. AMC 8 Geometry topics include right triangles, similar triangles, areas of polygons, angles, and circles.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Hash,
      title: "Number Theory",
      description: "Despite its absence in the school math curriculum, Number Theory is one of the most important areas of math, explaining all properties of numbers. Topics covered on the AMC 8 include modular arithmetic and prime and composite numbers.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: Shuffle,
      title: "Combinatorics",
      description: "Combinatorics is the study of math relating to counting groups or objects. Combinatorics topics that are covered on the AMC 8 include stars and bars, combinations and permutations, casework, constructive counting, and probability.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Middle School Math Course
          </h2>
          <p className="text-xl text-muted-foreground mb-4">AMC 8 Syllabus</p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            CJMC offers an annual course in preparation for the AMC 8 Exam each year in January. 
            Students are taught the essentials of competition math, specifically Algebra, Geometry, 
            Number Theory, and Combinatorics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${topic.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Syllabus;