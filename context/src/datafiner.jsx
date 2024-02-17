// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const DataFinder = () => {
  const [data, setdata] = useState(" ");
  const persondata = [
    {
      name: "pratap",
      id: 0,
      age: 45,
      proffesion: "programmer",
      habbits: "doing code",
      salary: 4654,
    },
    {
      name: "aakash",
      id: 1,
      age: 10,
      proffesion: "gamer",
      habbits: "Doing gaming",
      salary: 4654654,
    },
    {
      name: "Chindi",
      id: 2,
      age: 78,
      proffesion: "chaistall",
      habbits: "doing chindi things upside downl",
      salary: 1020,
    },
    {
      name: "lawda",
      id: 3,
      age: 54,
      proffesion: "carpainter",
      habbits: "doing carpiating",
      salary: 1030,
    },
    {
      name: "jhonny sins",
      id: 4,
      age: 30,
      proffesion: "porn star",
      habbits: "making porn videos",
      salary: 5605,
    },
    {
      name: "chitwan",
      id: 5,
      age: 50,
      proffesion: "engginner",
      habbits: "Security Guard",
      salary: 1050,
    },
  ];
  return (
    <>
      <input
        type="text"
        value={data}
        placeholder="Enter Value"
        onChange={(e) => {
          setdata(e.target.value);
        }}
      />
      <div>
        <ul>
          {persondata
            .filter((items) =>
              items.name.toLowerCase().includes(data.toLowerCase())
            )
            .map((filter_items) => {
              return (
                <>
                  <li id={filter_items.id}>
                    {filter_items.name} {filter_items.proffesion}{" "}
                    {filter_items.age} {filter_items.salary}{" "}
                    {filter_items.habbits}
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default DataFinder;
