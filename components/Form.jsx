import React, { useState } from "react";
import axios from "axios";
import Config from "../config/Config";
// Messages
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
    // manejo del estado para control de inputs
    const [show,setShow] = useState(false)
    const [igc, setIgc]  = useState("")
    const [igcMsg, setIgcMsg]  = useState("")
    const [data,setData] = useState({
        sexo: "",
        altura: "0",
        peso: "0",
        cintura: "0",
        cuello: "0",
        cadera: "0"
      })
    const handleSubmit = (e) => {
        // prevent set get
        e.preventDefault();
        // validations front 
        if(e.target.value === undefined){
            toast.error("Ingrese la información del formulario");
        }
        
        console.log('DATA=',data)
        dataAPI(data)
      };

      const handleChange = (e) => {
        // const para control de formulario      
        const name = e.target.name
        const value = e.target.value
        const type = e.target.id
        // destructuring para mantener actualizado el objeto de envio al API
        setData({
            ...data,
            [name]:value
        })

        // validación para control de muestra de campo cadera
        if(type === "man"){
            setShow(false)
            // validaciones 
            if(e.target.value === undefined){
                toast.error("Ingrese la información del formulario");
            }   
        }else if(type === "woman") {
            setShow(true)
        }

      };

      // set data API
      const dataAPI = async (obj) => {
        try {
          const data = await axios.post(
            `${Config.URL_API}${Config.METHOD_API}`,
            obj
          );
          console.log('RESPONSE=',data.data)
          //console.log('Status=',data.data.data.status)
    
          if (data.status === 200) {
            // fragmentar respuesta de back para mostrar en componente
            const respuesta = data.data.data.sexo
            const general = res.Split("-")
            // set indice de grasa corporal
            setIgc(general[1])
            // set mensaje de indice de grasa corporal
            setIgcMsg(general[0])
            }
        } catch (error) {
          console.log(error, `${Config.METHOD_API}`);
          toast.error("Error en servicio, intente más tarde..");
        }
      };

  return (
    <>
    <ToastContainer
        autoClose={4000}
        position="top-right"
        className="toast-container"
        toastClassName="dark-toast"
        style={{ fontWeight: "bold" }}
      />
      <div className="card_">
        <div className="card-body">
          <h2 className="card-title myWhite">Calculadora de Grasa Corporal</h2>
          <p />
          <h5 className="card-title myWhite">
            El método de la Marina de Estados Unidos (US Navy Method) ofrece una
            manera sencilla de calcular un aproximado del porcentaje de tejido
            adiposo en el cuerpo de una persona.
          </h5>
          <p />
          <h5 className="card-title myWhite">
            Los valores por fórmula son los siguientes:
          </h5>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
              {" "}
              <label htmlFor="inputName5" className="form-label myWhite">
                Género
              </label>{" "}
              <br />
              <>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="man"
                    name="sexo"
                    defaultValue="H"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label myWhite"
                    htmlFor="inlineRadio1"
                  >
                    Hombre
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sexo"
                    id="woman"
                    defaultValue="M"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label myWhite"
                    htmlFor="inlineRadio2"
                  >
                    Mujer
                  </label>
                </div>
              </>
            </div>

            <div className="col-md-12">
              {" "}
              <label htmlFor="altura" className="form-label myWhite">
                Altura (cm)
              </label>{" "}
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#000", color: "#FFF" }}
                name="altura"
                maxLength={4}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              {" "}
              <label htmlFor="peso" className="form-label myWhite">
                Peso (kg)
              </label>{" "}
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#000", color: "#FFF" }}
                name="peso"
                maxLength={4}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              {" "}
              <label htmlFor="cintura" className="form-label myWhite">
                Cintura (cm)
              </label>{" "}
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#000", color: "#FFF" }}
                name="cintura"
                maxLength={4}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              {" "}
              <label htmlFor="cuello" className="form-label myWhite">
                Cuello (cm)
              </label>{" "}
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#000", color: "#FFF" }}
                name="cuello"
                maxLength={4}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12" style={show ? {display:"block"}:{display:"none"} }>
              {" "}
              <label htmlFor="cadera" className="form-label myWhite">
                Cadera (cm)
              </label>{" "}
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#000", color: "#FFF" }}
                name="cadera"
                maxLength={4}
                onChange={handleChange}
              />
            </div>

            <div className="text-left">
              {" "}
              <button
                type="submit"
                className="btn btn-primary "
                style={{ backgroundColor: "#6c4b7d", border: "#6c4b7d" }}
              >
                Calcular
              </button>{" "}
              <button type="reset" className="btn btn-secondary">
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
