import { useState } from "react";
import "./contacto.css"; // Asegúrate de tener un archivo CSS para estilos

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    edad: ""
  });
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre.trim()) 
        nuevosErrores.nombre = "El nombre es obligatorio";
    
    if (!form.apellido.trim()) 
        nuevosErrores.apellido = "El apellido es obligatorio";
    
    if (!form.email.trim()) {
        nuevosErrores.email = "El email es obligatorio";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
        nuevosErrores.email = "El email no es válido";
    }
    if (!form.edad.trim()) {
        nuevosErrores.edad = "La edad es obligatoria";
    } else if (form.edad <= 0) {
        nuevosErrores.edad = "La edad debe ser un número positivo";
    }
    return nuevosErrores;
};

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: undefined });
    setExito(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validacion = validar();
    if (Object.keys(validacion).length === 0) {
      setExito(true);
      setForm({ nombre: "", apellido: "", email: "", edad: "" });
    } else {
      setErrores(validacion);
      setExito(false);
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit} className="form-contacto">
              <h1>Contacto</h1>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <span style={{ color: "red" }}>{errores.nombre}</span>}

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
        />
        {errores.apellido && <span style={{ color: "red" }}>{errores.apellido}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errores.email && <span style={{ color: "red" }}>{errores.email}</span>}

        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={form.edad}
          onChange={handleChange}
        />
        {errores.edad && <span style={{ color: "red" }}>{errores.edad}</span>}

        <button type="submit">Enviar</button>
        {exito && <span style={{ color: "green" }}>¡Formulario enviado con éxito!</span>}
      </form>
    </div>
  );
};

export default Contacto