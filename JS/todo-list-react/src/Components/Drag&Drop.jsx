import React from "react";

export default function DragAndDrop(props) {
  this.dragstart_handler = (e) => {
    e.dataTransfer.setData("movedUl", e.target.closest("ul").id);
    e.dataTransfer.setData("idx", e.target.dataset.idx);
  };
  this.dragover_handler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  this.drop_handler = (e) => {
    const idx = e.dataTransfer.getData("idx");
    const movedUl = e.dataTransfer.getData("movedUl");
    try {
      const originUl = e.target.closest("ul").id;
      let isMoved = false;
      if (originUl !== movedUl) {
        isMoved = true;
      }
      this.onDrag(username, this.state[idx]._id, isMoved);
    } catch (error) {
      alert("드래그&드랍 영역을 벗어났습니다.");
    }
  };
}
