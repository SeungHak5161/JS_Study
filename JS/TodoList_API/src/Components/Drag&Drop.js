export default function DragAndDrop(params) {
  this.state = params.initialState;
  function dragstart_handler(e) {
    console.log("dragStart");
    e.dataTransfer.setData("idx", e.target.dataset.idx);
  }
  function drop_handler(e) {
    console.log("onDrop");
    this.setState();
  }
  function dragover_handler(e) {
    console.log("onDragOver");
    e.dataTransfer.dropEffect = "move";
  }
}
