import styled from "styled-components"
import React, { useEffect, useState } from "react"
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import CircularSlider from "@fseehawer/react-circular-slider"
import TextField from "@mui/material/TextField"

function AddClock({ setTaskData, timerRadius, boxCenter }) {
  const size = 2 * boxCenter - 4 * timerRadius - 20

  return (
    <Clock modHeight={size.toString() + "px"} modWidth={size.toString() + "px"}>
      <CircularProgressbarWithChildren
        strokeWidth={7}
        styles={buildStyles({
          strokeLinecap: "butt",
          trailColor: "white",
          pathColor: "#2C699A",
          textSize: "12",
          textColor: "black",
          boxShadow: "1px 1px 1px 1px gray",
        })}
      >
        <div style={{ width: "84%" }}>
          <CircularProgressbarWithChildren
            strokeWidth={7}
            value={70}
            styles={buildStyles({
              strokeLinecap: "butt",
              trailColor: "transparent",
              pathColor: "#0DB39E",
            })}
          >
            <div style={{ width: "84%" }}>
              <CircularProgressbarWithChildren
                strokeWidth={7}
                value={70}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  trailColor: "transparent",
                  pathColor: "#F1C453",
                })}
              >
                <div>
                  <TextField></TextField>
                  <input type="number"></input>
                  <input type="number"></input>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </CircularProgressbarWithChildren>
    </Clock>
  )
}

export default AddClock

const Clock = styled.div`
  position: relative;
  display: flex;
  margin: auto auto;
  transform: rotateZ(90deg);
  // height: 200px;
  // width: 200px;
  // height: ${(props) => props.modHeight};
  // width: ${(props) => props.modWidth};
`
