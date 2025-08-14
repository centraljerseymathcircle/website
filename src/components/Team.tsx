import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Award, GraduationCap } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Vaibhav Sitaraman",
      role: "Lead Organizer & Instructor",
      bio: "Vaibhav is incredibly passionate about competitive math and math education. He was part of CJML's ARML A team in his freshman year and is a former MCAMC winner. He was also a top 5 individual at MATHCOUNTS Chapter and top 15 at MATHCOUNTS State, with 2x 1st place team at Chapter and 4th place team at State. Aside from math, Vaibhav is also very interested in competitive programming and software development as a member of the USACO Gold division.",
    },
    {
      name: "Ashwin Krishnamurthy",
      role: "Lead Instructor",
      bio: "Ashwin, a senior at Edison Academy Magnet School, is a one-time USAPhO and two-time AIME qualifier with a passion for the intersection of mathematics and physics. He applies this passion to real-world engineering projects, from building drones to CubeSats. In his free time, he enjoys sim racing, exploring the night sky with his telescope, and playing tennis. Having coached students for exams like the AMC 8, he is excited to help the students at CJMC grow.",
    },
    {
      name: "Eric Dai",
      role: "Instructor",
      bio: "Eric is an incoming junior at Edison Academy Magnet School with a strong passion for competitive math. He is a 4x AIME qualifier and a 2x USAJMO qualifier, earning JMO Honors twice. He was also a representative for New Jersey at MATHCOUNTS nationals. Aside from math, Eric is also interested in competitive programming and software development, achieving the USACO Platinum Top 50 rank.",
    },
    {
      name: "Ada Huang",
      role: "Instructor",
      bio: "Ada is a 3 time AIME qualifier and USAMO qualifier with a love for math and teaching. She is a senior at Edison Academy Magnet School and has been involved in math education for several years. She is excited to share her knowledge and passion to help students succeed on their competitive math endeavors.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced mathematicians and educators who are passionate about 
            developing mathematical talent and fostering a love for problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 bg-card border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;