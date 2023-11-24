import React, { useState } from "react";
import { Grid, Box, Button, TextField, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import emailjs, { sendForm } from "emailjs-com";

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
    celular: "",
    mensaje: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Configura la información de tu servicio y plantilla de Email.js

    // Configura los parámetros para enviar el correo electrónico
    const templateParams = {
      nombre: datos.nombre,
      segundoNombre: datos.segundoNombre,
      primerApellido: datos.primerApellido,
      segundoApellido: datos.segundoApellido,
      email: datos.email,
      celular: datos.celular,
      mensaje: datos.mensaje,
    };

    // Envía el correo electrónico
    emailjs
      .send(
        "service_t6pjyec",
        "template_ul22d92",
        templateParams,
        "p24DpNcFQ_keVsMxB"
      )
      .then((response) => {
        setEnviado(true);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
  };

  const [error, seterror] = useState(false);

  const [credencialesIncorrectas, setCredencialesIncorrectas] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
    console.log(datos);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (e) => {
    // Validar que todos los campos estén llenos

    if (
      datos.nombre === "" ||
      datos.primerApellido === "" ||
      datos.segundoApellido === "" ||
      datos.email === "" ||
      datos.celular === ""
    ) {
      // Aquí puedes enviar los datos o realizar otras acciones
      seterror(true);
      setCredencialesIncorrectas(true);
    } else {
      sendEmail(e);
      setEnviado(true);
    }
  };

  return (
    <Box>
      <Box className="container_formulario_style">
        <Grid
          container
          xs={12}
          sm={8}
          padding={2}
          className="grid_form"
          sx={{ border: "1px", borderColor: "black" }}
        >
          <Grid item xs={12} sm={6} padding={2}>
            <TextField
              error={credencialesIncorrectas}
              label="Nombre"
              fullWidth
              padding={2}
              onChange={handleChange}
              name="nombre"
              InputProps={{
                style: {
                  borderColor: "black",
                },
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} padding={2}>
            <TextField
              label="  Segundo Nombre"
              fullWidth
              padding={2}
              onChange={handleChange}
              name="segundoNombre"
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} padding={2}>
            <TextField
              error={credencialesIncorrectas}
              onChange={handleChange}
              name="primerApellido"
              label="Primer Apellido"
              fullWidth
              padding={2}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} padding={2}>
            <TextField
              error={credencialesIncorrectas}
              onChange={handleChange}
              name="segundoApellido"
              label="Segndo Apellido"
              fullWidth
              padding={2}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} padding={2}>
            <TextField
              error={credencialesIncorrectas}
              label="E-mail"
              fullWidth
              padding={2}
              onChange={handleChange}
              name="email"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} padding={2}>
            <TextField
              error={credencialesIncorrectas}
              label="Celular"
              fullWidth
              padding={2}
              onChange={handleChange}
              name="celular"
            ></TextField>
          </Grid>

          <Grid item xs={12} padding={2}>
            <TextField
              label="Mensaje"
              fullWidth
              padding={2}
              multiline
              rows={4}
              name="mensaje"
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} padding={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              style={{ backgroundColor: "black", color: "white" }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={enviado}
        autoHideDuration={6000}
        onClose={() => setEnviado(!enviado)}
      >
        <Alert
          onClose={() => setEnviado(!enviado)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Enviado
        </Alert>
      </Snackbar>

      <Snackbar
        open={credencialesIncorrectas}
        autoHideDuration={6000}
        onClose={() => setCredencialesIncorrectas(!credencialesIncorrectas)}
      >
        <Alert
          onClose={() => setCredencialesIncorrectas(!credencialesIncorrectas)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Datos Obligatorios Vacios
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Formulario;
