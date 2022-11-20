import { Avatar } from "@mantine/core";
import React from "react";
import { IBook } from "../../types/common";
import "./InfoCard.scss";

interface InfoCardProps {
  book: IBook;
  setSelectedBook: (book: IBook) => void;
}
const InfoCard = ({ book, setSelectedBook }: InfoCardProps) => {
  return (
    <div className="info-card" onClick={() => setSelectedBook(book)}>
      <div className="info-card-image">
        <Avatar src={`../../../images/${book.image}.png`} size="xl" alt="img" />
      </div>
      <div className="info-card-content">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    </div>
  );
};

export default InfoCard;
