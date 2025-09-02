import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/theme-context";

export function ThemeToggle() {
  const { setTheme, theme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          data-testid="theme-toggle-button"
        >
          {actualTheme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="quantum-card border-border/50 backdrop-blur-sm"
        data-testid="theme-dropdown-menu"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={`cursor-pointer transition-all duration-200 ${
            theme === "light" ? "bg-primary/10 text-primary" : "hover:bg-secondary"
          }`}
          data-testid="theme-option-light"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={`cursor-pointer transition-all duration-200 ${
            theme === "dark" ? "bg-primary/10 text-primary" : "hover:bg-secondary"
          }`}
          data-testid="theme-option-dark"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={`cursor-pointer transition-all duration-200 ${
            theme === "system" ? "bg-primary/10 text-primary" : "hover:bg-secondary"
          }`}
          data-testid="theme-option-system"
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}