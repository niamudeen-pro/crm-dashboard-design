import { useTheme } from "@/components/theme-provider";
import SUN_ICON_IMAGE from "../assets/Sun.svg"
import MOON__ICON_IMAGE from "../assets/Moon.svg"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  }
  return (
    <button className="flex items-center cursor-pointer" onClick={toggleTheme}>
      {isDark ? (
        <img src={SUN_ICON_IMAGE} alt="Sun" className="size-6" />
      ) : (
        <img src={MOON__ICON_IMAGE} alt="Moon" className="size-6" />
      )}
    </button>
  );
}
