
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Palette, Download, Brain, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content",
      description: "Our AI suggests compelling content tailored to your industry and role, helping you highlight your best achievements."
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from 25+ beautiful, modern templates designed by professionals and optimized for ATS systems."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Build your resume in under 10 minutes with our intuitive drag-and-drop interface and smart suggestions."
    },
    {
      icon: Shield,
      title: "ATS Optimized",
      description: "All our templates are tested with major ATS systems to ensure your resume gets through the initial screening."
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Download your resume in PDF, Word, or plain text format. Perfect for any application requirement."
    },
    {
      icon: Users,
      title: "Expert Reviews",
      description: "Get your resume reviewed by industry experts and receive personalized feedback to improve your chances."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:text-white bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Our comprehensive suite of tools and features helps you create a resume that not only looks great but gets results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-white to-gray-50"
            >
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;