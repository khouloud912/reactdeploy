import React, { useState,useEffect} from "react";
import Picture from "./Picture";
import "../App.css";
import {useDrop} from "react-dnd";
import axios from "axios";

const chartList = [
    {
      ident: 'pie',
      name: 'Pie Chart',
      thumb:  '/images/pie.png'  
    },
    {
      ident: 'line',
      name: 'Line Chart ',
      thumb: 'images/line.png'
    },
    {
      ident: 'funel',
      name: 'Funnel Chart ',
      thumb: 'images/funnel.png'
    },  
  ]

function DragDrop() {
  const [board, setBoard]=useState([]);
  const [databoard, setDboard]=useState("Drag and Drop Chart");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    }),
  }));
   
   const addImageToBoard = (id) =>{
       console.log(id); //where i make the logic with flask
       axios.get(`http://localhost:5000/chartin/${id}`)
      .then((response) => {
        console.log("response", response.data[0].identifier)
        const chartlink= response.data[0].identifier;
        console.log("chartlink", chartlink)
        setDboard(null)
        setBoard([chartlink])
        
      
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })
   };

    return (
      <>
<div class="row">
      <div className="column">
      <div className="Board" ref={drop}>
        {
          databoard != null &&
          <div className="container">
          <h4> {databoard}</h4>
          </div>
        }
     

        {board.map((chart) => {
                return (
                      <Picture ident={chart.ident} thumb={chart.link} type="board"/>
                );
              })}
           </div>
        </div>
      <div className="column">
      <div className="Board" >
         <div className="container">
         <h4> Drag and Drog an element or <br/>
         <a href="https://www.google.com/">Add new Gadget </a> </h4>
         </div>
           </div>
        


        </div>
        <div className="column">
          <ul className="characters">
              {chartList.map((chart) => {
                return (
                      <Picture ident={chart.ident} name={chart.name} thumb={chart.thumb} type="chart"/>
                );
              })}
            </ul>
          </div>
           </div>
     
      </>
  );
}

export default DragDrop;