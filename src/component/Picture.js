import React from "react";
import {useDrag} from "react-dnd";

function Picture({ident, name, thumb,type}) {
  console.log("thumb", thumb)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: {id: ident},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
  return (
        <li key={ident}>
          {type == "chart"  
          ?<><div className="characters-thumb">
          <img ref={drag} src={thumb} style={{ border: isDragging ? "2px solid pink" : "0px" }} />
           </div><p> {name}</p></>
          :<div className="characters-board">
          <img ref={drag} src={thumb} style={{ border: isDragging ? "2px solid pink" : "0px" }} />

          </div>
          
          }
         
        </li>
  );
}

export default Picture;