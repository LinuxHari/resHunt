import { FileText } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-all duration-200"
    >
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
          ResHunt
        </span>
      </div>
    </Link>
  );
};

export default Logo;
