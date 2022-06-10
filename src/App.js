import './App.css';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragDrop from './component/DragDrop';



function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
            <h1>Chart selection</h1>
         </header>
          <DragDrop/>        
  </div>
    </DndProvider>
 
  );
}

export default App;
