import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";

export default function LearnMoreButton({
  variant = "primary",
  buttonProps,
  buttonText = "Learn More",
  link = "about-us",
  external
}) {
  return (
    <Button
      as={Link}
      bgColor={variant === "primary" ? "brand.primary" : "brand.secondary"}
      color={"white"}
      rightIcon={<ImArrowUpRight2 />}
      alignSelf={"start"}
      {...buttonProps}
      href={link}
    >

      {buttonText}
    </Button>
  );
}
