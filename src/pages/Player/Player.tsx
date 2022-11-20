import { Modal, Group, Button, Progress } from "@mantine/core";
import React from "react";
import ArrowDown2 from "../../assets/svg/ArrowDown2";
import ArrowDownSquare from "../../assets/svg/ArrowDownSquare";
import ArrowLeftCircle from "../../assets/svg/ArrowLeftCircle";
import ArrowRightCircle from "../../assets/svg/ArrowRightCircle";
import Bookmark from "../../assets/svg/Bookmark";
import Document from "../../assets/svg/Document";
import MoreSquare from "../../assets/svg/MoreSquare";
import Paper from "../../assets/svg/Paper";
import Play from "../../assets/svg/Play";
import TimeSquare from "../../assets/svg/TimeSquare";
import Upload from "../../assets/svg/Upload";
import VolumeUp from "../../assets/svg/VolumeUp";
import { IBook } from "../../types/common";
import "./Player.scss";

interface PlayerProps {
  selectedBook: IBook;
  openPlayer: boolean;
  setOpenPlayer: (openPlayer: boolean) => void;
}

export const Player = ({
  openPlayer,
  setOpenPlayer,
  selectedBook,
}: PlayerProps) => {

  const handleClose = () => {
    setOpenPlayer(false);
  };

  return (
    <Modal
      opened={openPlayer}
      onClose={handleClose}
      withCloseButton={false}
      fullScreen
    >
      <div className="player">
        <div className="player-header">
          <span onClick={handleClose}>
            <ArrowDown2 />
          </span>
          <p>{selectedBook.title}</p>
          <MoreSquare />
        </div>
        <div className="player-body">
          <div className="book-image">
            <img
              src={`../../../images/${selectedBook.image}.png`}
              alt="audio"
            />
          </div>
          <div className="book-info">
            <h3>{selectedBook.title}</h3>
            <p>{selectedBook.author}</p>
          </div>
          <div className="player-details">
            <Progress value={25} size={4} color="primary" />
            <div className="player-timing">
              <p>12.15</p>
              <p>47.32</p>
            </div>
          </div>
          <div className="player-controls">
            <VolumeUp />
            <ArrowLeftCircle />
            <Play />
            <ArrowRightCircle />
            <Upload />
          </div>
          <div className="player-extras">
            <div className="control">
              <Bookmark />
              <p>Bookmark</p>
            </div>
            <div className="control">
              <Paper />
              <p>Chapter 2 </p>
            </div>
            <div className="control">
              <TimeSquare />
              <p>Speed 10x</p>
            </div>
            <div className="control">
              <ArrowDownSquare />
              <p>Download</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal content */}
    </Modal>
  );
};
