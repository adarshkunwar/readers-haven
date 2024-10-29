import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariant = cva("px-5 py-2 rounded-lg ", {
  variants: {
    variant: {
      primary: "bg-blue-600 text-white  hover:bg-blue-700 text-lg",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

const Button = ({
  onClick,
  disabled,
  size,
  variant,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariant({ size, variant }), className)}
      {...props}
    />
  );
};

export { Button, buttonVariant };
