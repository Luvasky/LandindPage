import React from "react";
import { Box, Grid } from "@mui/material";
import pool2 from "../assets/pool2.jpg";
import pool3 from "../assets/pool3.jpg";
import pool4 from "../assets/pool4.jpg";
import pool5 from "../assets/pool5.jpg";
import pool6 from "../assets/pool6.jpg";
import pool7 from "../assets/pool7.jpg";

function Trabajos() {
  const imagenes = [
    {
      src: pool2,
      tamaño: 5,
    },
    {
      src: pool3,
      tamaño: 2,
    },
    {
      src: pool4,
      tamaño: 5,
    },
    {
      src: pool5,
      tamaño: 2,
    },
    {
      src: pool6,
      tamaño: 5,
    },
    {
      src: pool7,
      tamaño: 5,
    },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container xs={11}>
          {imagenes.map((imagen) => (
            <Grid item xs={12} sm={imagen.tamaño} padding={2}>
              <img
                className="imagen_trabajo_style"
                src={imagen.src}
                alt=""
                loading="lazy"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Trabajos;
