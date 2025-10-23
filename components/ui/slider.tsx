import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, onValueChange, ...props }, ref) => {
    return (
      <input
        type="range"
        className={cn(
          "w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cavs-wine",
          className
        )}
        ref={ref}
        onChange={(e) => onValueChange?.(Number(e.target.value))}
        {...props}
      />
    );
  }
);
Slider.displayName = "Slider";

export { Slider };
