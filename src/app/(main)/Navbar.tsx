"use client";

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Book } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  const buttonAppearance = {
    baseTheme: theme === "dark" ? dark : undefined,
    elements: {
      avatarBox: {
        width: 40,
        height: 40,
        border: "2px solid rgb(229 231 235)",
        transition: "all 0.2s ease",
      },
      userButtonPopoverCard: {
        borderRadius: "12px",
        border: "1px solid rgb(229 231 235)",
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      userButtonPopoverActionButton: {
        borderRadius: "8px",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "rgb(239 246 255)",
          color: "rgb(37 99 235)",
        },
      },
    },
    variables: {
      colorPrimary: "rgb(37 99 235)",
      colorTextOnPrimaryBackground: "white",
      borderRadius: "12px",
    },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md dark:border-gray-800/50 dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Logo />
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
            <ThemeToggle />
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur-sm transition-opacity duration-200 hover:opacity-20" />
            <UserButton appearance={buttonAppearance}>
               <UserButton.MenuItems>
                <UserButton.Link
                  label="My resumes"
                  labelIcon={<Book className="size-4" />}
                  href="/resumes"
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </header>
  );
}

export default Navbar