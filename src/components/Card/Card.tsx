import * as React from "react";
import "./Card.css";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};
