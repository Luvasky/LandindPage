import "./App.css";
import {
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Container,
  Tooltip,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import pool from "./assets/pool.jpg";
import Trabajos from "./Componentes/Trabajos";
import Resenas from "./Componentes/Resenas";
import Formulario from "./Componentes/Formulario";
import logo from "./assets/logo.jpeg";
import Carruse from "./Componentes/Carruse";
import { Link, Element } from "react-scroll";

function App() {
  const secciones = ["Contacto", "Servicios", "Reseñas", "Trabajos"];

  return (
    <Box>
      <AppBar
        sx={{ backgroundColor: "black", display: { xs: "none", sm: "flex" } }}
        position="static"
      >
        <Container>
          <Toolbar className="toolbar_style">
            <img src={logo} alt="Logo" className="logo_style" loading="lazy" />

            <IconButton>
              <MenuIcon color="white"></MenuIcon>
            </IconButton>
            <Tooltip>
              <Box
                className="container_seccion_style"
                sx={{
                  width: { sm: "40%", md: "20%" },
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {secciones.map((seccion, index) => (
                  <Link
                    className="link_style"
                    key={index}
                    to={seccion.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70} // adjust the offset as needed
                    duration={3000}
                  >
                    <Box className="seccion_style">
                      <span className="span_seccion_style">{seccion}</span>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>

      <section>
        <Box className="container_inicio_style">
          <Grid container className="grid_inicio_style">
            <img src={pool} className="img_inicio_style" loading="lazy"></img>

            <Box
              className="encabezado_inicio_style"
              sx={{
                width: { xs: "90%", md: "50%" },
                height: { xs: "66vh", sm: "80vh", md: "70vh" },
                top: { xs: "2%", md: "5%" },
                left: { xs: "5%", md: "2%" },
              }}
            >
              <Box>
                <Box sx={{ width: "90%", marginLeft: "5%" }}>
                  <h1 className="titulo_encabezado_style">
                    !En NaturaPools tenemos los mejores descuentos para ti!
                  </h1>
                </Box>

                <Box sx={{ width: "90%", marginLeft: "5%" }}>
                  <h5 className="subtitulo_encabezado_style">
                    Registrate y disruta de los beneficios{" "}
                  </h5>
                </Box>

                <Box sx={{ marginLeft: "5%" }}>
                  <Link
                    to="contacto"
                    spy={true}
                    smooth={true}
                    offset={-70} // adjust the offset as needed
                    duration={3000}
                  >
                    <button className="button_encabezado_style">
                      Contactanos!
                    </button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </section>

      <Element name="trabajos" className="trabajos">
        <section>
          <Box className="container_trabajo-style">
            <h1 className="titulo_encabezado_style">Conoce nuestro trabajo</h1>
          </Box>
          <Trabajos></Trabajos>
        </section>
      </Element>

      <Element name="servicios" className="servicios"></Element>
      <section>
        <Box className="container_trabajo-style">
          <h1 className="titulo_encabezado_style">Nuestros Servicios</h1>
        </Box>
        <Carruse></Carruse>
      </section>

      <Element name="reseñas" className="reseñas"></Element>
      <section>
        <Box className="container_trabajo-style">
          <h1 className="titulo_encabezado_style">Reseñas</h1>
        </Box>
        <Resenas></Resenas>
      </section>

      <Element name="contacto" className="element">
        <section>
          <Box className="container_trabajo-style">
            <h1 className="titulo_encabezado_style">Contactanos</h1>
          </Box>
          <Formulario></Formulario>
        </section>
      </Element>
    </Box>
  );
}

export default App;
