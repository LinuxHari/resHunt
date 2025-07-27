import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center border-b bg-white dark:bg-black">
      <div className="absolute inset-0 overflow-hidden dark:hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm dark:bg-white/10 dark:border-white/20">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium text-sm">
              ✨ AI-Powered Resume Builder
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-blue-600 dark:via-purple-600 dark:to-purple-900 bg-clip-text text-transparent leading-tight">
            Build Your Perfect Resume in Minutes
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto">
            Create professional, ATS-friendly resumes with our AI-powered builder.
            Stand out from the crowd and land your dream job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="btn-primary rounded-full text-lg">
              <Link
              href="/resumes"
              className="flex gap-x-1 items-center group"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
