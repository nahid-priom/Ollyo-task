import ImageGallery from "./components/ImageGallery";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <ImageGallery />
      </div>
    </DndProvider>
  );
}

export default App;
