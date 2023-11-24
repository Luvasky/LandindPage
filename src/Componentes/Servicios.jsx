import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import servicio from "../assets/servicio.jpg";
import construccion from "../assets/construccion.jpg";
import ph from "../assets/ph.jpg";
import repaacion from "../assets/Reparacion.jpg";

export default function TitlebarImageList() {
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <ImageList sx={{ width: "100%", height: 450 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: construccion,
    title: "Construcción de Piscinas Personalizadas",

    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: servicio,
    title: "Limpieza Profunda de Piscinas:",
  },
  {
    img: repaacion,
    title: "Reparación de Equipos:",
  },
  {
    img: ph,
    title: "Servicio de pH y Equilibrio Químico:",

    cols: 2,
  },
];
