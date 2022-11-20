import { Input } from "@mantine/core";
import React, { useEffect } from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import { data } from "../../services/data";
import { IBook } from "../../types/common";
import { Player } from "../Player/Player";
import "./Library.scss";

const Library = () => {
  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState<IBook[]>(data);
  const [selectedBook, setSelectedBook] = React.useState<IBook>();
  const [openPlayer, setOpenPlayer] = React.useState(false);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(filtered);
  }, [search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCardClick = (book: IBook) => {
    setSelectedBook(book);
    setOpenPlayer(true);
  };

  return (
    <div className="wrapper">
      <div className="page-header">
        <h3>My Books</h3>
        <Input
          placeholder="Search Books or Author..."
          variant="filled"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="page-content">
        {search.length > 0 && filteredData.length === 0 && (
          <div className="no-results">
            <h3>No Results Found</h3>
          </div>
        )}

        {filteredData &&
          filteredData.map((item, index) => (
            <div className="page-content-item" key={index}>
              <InfoCard book={item} setSelectedBook={handleCardClick} />
            </div>
          ))}
      </div>

      {selectedBook && (
        <Player
          openPlayer={openPlayer}
          setOpenPlayer={setOpenPlayer}
          selectedBook={selectedBook}
        />
      )}
    </div>
  );
};

export default Library;
