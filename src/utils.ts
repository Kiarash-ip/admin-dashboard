import { PieChartColors } from "./types";

export function activeColorHandler(
  colors: { active: boolean; color: string }[],
  index: number
): PieChartColors[] {
  if (index !== -1) {
    return colors.map((color, i) => {
      if (index === i) {
        color.active = true;
        return color;
      } else {
        color.active = false;
        return color;
      }
    });
  } else {
    return colors.map((color, i) => {
      color.active = true;
      return color;
    });
  }
}
