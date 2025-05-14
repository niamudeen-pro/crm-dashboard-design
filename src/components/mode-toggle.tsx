import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Button
        variant="ghost"
        size="icon"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
      </Button>
      <p className="text-xs">{theme === "dark" ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
}
