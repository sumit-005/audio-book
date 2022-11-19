import { Avatar } from "@mantine/core";
import React from "react";
import "./InfoCard.scss";

interface InfoCardProps {
  title: string;
  author: string;
  image: string;
}
const InfoCard = ({ title, author, image }: InfoCardProps) => {
  return (
    <div className="info-card">
      <div className="info-card-image">
        <Avatar src={`../../../images/${image}.png`} size="xl" alt="img" />
      </div>
      <div className="info-card-content">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default InfoCard;
