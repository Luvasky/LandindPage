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
import Trabajos from "./Trabajos";

function App() {
  const secciones = [
    {
      seccion: "Contacto",
    },
    {
      seccion: "Servicios",
    },
    {
      seccion: "Registrarme",
    },
  ];

  return (
    <Box>
      <AppBar
        sx={{ backgroundColor: "black", display: { xs: "none", sm: "flex" } }}
        position="static"
      >
        <Container>
          <Toolbar className="toolbar_style">
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
                {secciones.map((e) => (
                  <Box className="seccion_style">
                    <span className="span_seccion_style">{e.seccion}</span>
                  </Box>
                ))}
              </Box>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>

      <section>
        <Box className="container_inicio_style">
          <Grid container className="grid_inicio_style">
            <img src={pool} className="img_inicio_style"></img>

            <Box
              className="encabezado_inicio_style"
              sx={{
                width: { xs: "90%", md: "50%" },
                height: { xs: "66vh", md: "60vh" },
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
                  <button className="button_encabezado_style">
                    Resgitrate ahora!
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </section>

      <section>
        <Box className="container_trabajo-style">
          <h1 className="titulo_encabezado_style">Conoce nuestro trabajo</h1>
        </Box>
        <Trabajos></Trabajos>
      </section>

      <section>
        <Box className="container_trabajo-style">
          <h1 className="titulo_encabezado_style">
            Explora nuestros servicios
          </h1>
        </Box>
      </section>
    </Box>
  );
}

export default App;
