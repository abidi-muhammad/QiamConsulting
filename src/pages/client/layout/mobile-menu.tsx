import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import ThemeToggle from "./theme-toggle";
import BookConsultation from "@/components/custom/book-consultation";

interface MobileMenuProps {
  navLinks: {
    name: string;
    href: string;
  }[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
          <ThemeToggle />
        </div>

        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <BookConsultation />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}