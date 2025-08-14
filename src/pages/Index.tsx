import Hero from "@/components/Hero";
import About from "@/components/About";
import Syllabus from "@/components/Syllabus";
import CourseInfo from "@/components/CourseInfo";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Syllabus />
      <CourseInfo />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
