import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-radius10" };
const variants = {
  FillLightgreen200: "bg-light_green_200 text-black_900",
  FillDeeporangeA100: "bg-deep_orange_A100 text-black_900",
  FillGray500: "bg-gray_500 text-black_900",
};
const sizes = {
  sm: "p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px]",
  md: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] p-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillLightgreen200",
    "FillDeeporangeA100",
    "FillGray500",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillLightgreen200",
  size: "md",
};

export { Button };
