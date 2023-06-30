import { Button } from "@chakra-ui/react";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";

export default function LearnMoreButton({
  variant = "primary",
  buttonProps,
  buttonText = "Learn More",
}) {
  return (
    <Button
      bgColor={variant === "primary" ? "brand.primary" : "brand.secondary"}
      color={"white"}
      rightIcon={<ImArrowUpRight2 />}
      alignSelf={"start"}
      {...buttonProps}
    >
      {buttonText}
    </Button>
  );
}
