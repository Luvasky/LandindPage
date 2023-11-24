import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import servicio from "../assets/servicio.jpg";
import construccion from "../assets/construccion.jpg";
import ph from "../assets/ph.jpg";
import repaacion from "../assets/Reparacion.jpg";

function Carruse() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const contenido = [
    {
      contenido: "Mantenimineto",
      img: servicio,
    },

    {
      contenido: "Diseñamos",
      img: construccion,
    },

    {
      contenido: "Mantenimiento",
      img: repaacion,
    },

    {
      contenido: "Evaluamos el ph",
      img: ph,
    },
  ];

  useEffect(() => {
    const updateSlidesToShow = () => {
      // Ajustar la cantidad de imágenes según el ancho de la ventana
      const isMobile = window.innerWidth <= 600; // Puedes ajustar este valor según tus necesidades
      setSlidesToShow(isMobile ? 1 : 3);
    };

    // Llamar a la función inicialmente y suscribirse a cambios de tamaño de la ventana
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    // Limpiar el evento de cambio de tamaño al desmontar el componente
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: 0,
  };

  return (
    <Box className="container_carrusel">
      <Slider {...settings}>
        {contenido.map((item) => (
          <Box className="container_item_carrusel">
            <Box className="item_carrusel">
              <img src={item.img} className="img_item" loading="lazy"></img>
              <h5 className="ocupacion_style">{item.contenido}</h5>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
export default Carruse;
