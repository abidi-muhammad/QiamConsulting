import { Link } from "react-router-dom"
// components/MobileMenu.tsx
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import ThemeToggle from "./theme-toggle";
import BookConsultation from "@/components/custom/book-consultation";

interface MobileMenuProps {
  navLinks: {
    name: string;
    href: string;
  }[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <ThemeToggle />

        <div className="flex flex-col space-y-4 mt-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <BookConsultation />
        </div>
      </SheetContent>
    </Sheet>
  );
}
