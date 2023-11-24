import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@mui/material";
import Besty from "../assets/Betsy.png";
import Luvasky from "../assets/Luvasky.png";
import Omar from "../assets/Omar.png";

const Resenas = () => {
  const resenas = [
    {
      nombre: "Betsy Hernández Ramírez",
      efecto: "zoom-in-up",
      imagen: Besty,
      opinion: `"Increíble servicio de limpieza de piscinas, ¡mi piscina nunca había estado tan cristalina! El equipo fue profesional y eficiente, definitivamente recomendaré sus servicios a mis amigos y vecinos."`,
    },

    {
      nombre: "Luvasky Hernández Ramírez",
      efecto: "zoom-in-up",
      imagen: Luvasky,
      opinion: `"La construcción de mi nueva piscina fue un proceso sin complicaciones gracias a este equipo experto. Cumplieron con los plazos y superaron mis expectativas en términos de calidad. "`,
    },
    {
      nombre: "Omar Castilla Martínez",
      efecto: "zoom-in-up",
      imagen: Omar,
      opinion: `"Contraté sus servicios de mantenimiento de piscinas y quedé asombrado por la atención al detalle. La limpieza fue impecable, y el personal fue amable y puntual. "`,
    },
  ];

  useEffect(() => {
    AOS.init(); // Inicializar AOS al montar el componente
  }, []);

  return (
    <div>
      {resenas.map((resena) => (
        <div className="container_resena_style" data-aos="zoom-in-up">
          <Box
            className="container_box_style"
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
              minHeight: "100%",
            }}
          >
            <Box
              className="container_image_style"
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              <img
                src={resena.imagen}
                className="imagen_resena_style"
                loading="lazy"
              ></img>
            </Box>
            <Box
              className="container_nombre_style"
              display={{
                xs: "100%",
                sm: "60%",
                height: { xs: "auto", sm: "100%" },
              }}
            >
              <h3 className="nombre_style">{resena.nombre}</h3>
              <Box className="nombre_style comentario_style">
                {resena.opinion}
              </Box>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default Resenas;
