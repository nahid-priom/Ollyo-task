import { useDrag, useDrop } from "react-dnd";

function ImageItem({
    id,
    src,
    onDrop,
    isFeatured,
    isChecked,
    onCheckboxChange,
    isDragging,
    setIsDragging,
  }) {
    const [, ref] = useDrag({
      type: "image",
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [, drop] = useDrop({
      accept: "image",
      drop: (item) => {
        if (item.id !== id) {
          onDrop(item.id, id);
        }
      },
    });
  
    return (
      <div
        className={`image${isFeatured ? " featured-image" : ""} ${
          isChecked ? "checked" : ""
        }`}
        ref={(node) => {
          ref(drop(node));
          setIsDragging(isDragging);
        }}
      >
        <label className="checkbox-label">
          <input
            type="checkbox"
            className={`checkbox ${isChecked ? "visible" : ""}`}
            checked={isChecked}
            onChange={onCheckboxChange}
          />
          <div className={`checkbox-icon ${isChecked ? "visible" : ""}`}></div>
          <img className="img" src={src} alt={src} />
          <span className="checkbox-custom"></span>
        </label>
      </div>
    );
  }
  
  export default ImageItem;
  