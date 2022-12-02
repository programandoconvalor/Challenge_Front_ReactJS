import Head from "next/head";
import Rango from "../components/Rango";
import React, { useState } from "react";
import axios from "axios";
import Config from "../config/Config";
// Messages
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  // manejo del estado para control de inputs
  const [show, setShow] = useState(false);
  const [igc, setIgc] = useState("");
  const [regla, setRegla] = useState("");
  const [data, setData] = useState({
    sexo: "",
    altura: "0",
    peso: "0",
    cintura: "0",
    cuello: "0",
    cadera: "0",
  });

  const handleSubmit = (e) => {
    // prevent set get
    e.preventDefault();
    // validations front
    if(document.getElementById("altura").value != "" && document.getElementById("peso").value != "" && document.getElementById("cintura").value != "" && document.getElementById("cuello").value != "" ){
      dataAPI(data);
      toast.success("La información se calculo");
    }else{
      toast.error("Verifique la información del formulario");
    }
  };

  const handleChange = (e) => {
    // const para control de formulario
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.id;
    // destructuring para mantener actualizado el objeto de envio al API
    setData({
      ...data,
      [name]: value,
    });

    // validación para control de muestra de campo cadera
    if (type === "man") {
      setShow(false);
      // validaciones
      if (e.target.value === undefined) {
        toast.error("Ingrese la información del formulario");
      }
    } else if (type === "woman") {
      setShow(true);
    }
  };

  // set data API
  const dataAPI = async (obj) => {
    try {
      const data = await axios.post(
        `${Config.URL_API}${Config.METHOD_API}`,
        obj
      );
      // validar response API
      if (data.status === 200) {
        // fragmentar respuesta de back para mostrar en componente
        const respuesta = data.data.data.sexo.toString();
        const general = respuesta.split("-");
        // set indice de grasa corporal
        setIgc(general[1]);
        // set mensaje de indice de grasa corporal
        setRegla(general[0]);
      }
    } catch (error) {
      console.log("Error en servicio, intente más tarde..");
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
      <div className="myBody">
        <Head>
          <title>Challenge - Juan Carlos Zepeda Arzate</title>
          <meta
            name="description"
            content="Calcular indice de grasa corporal"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header id="header" className="header d-flex align-items-center">
          <nav className="navbar navbar-light custom-navbar">
            <div className="container">
              <span className="navbar-brand">Health Overview</span>
              <a
                className="burger"
                data-bs-toggle="collapse"
                data-bs-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </nav>
        </header>
        <main id="main" className="main">
          <div className="pagetitle">
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <section className="content">
            <div className="row">
              <div className="col-lg-6">
                <div className="card_">
                  <div className="card-body">
                    <h2 className="card-title myWhite">
                      Calculadora de Grasa Corporal
                    </h2>
                    <p />
                    <h5 className="card-title myWhite">
                      El método de la Marina de Estados Unidos (US Navy Method)
                      ofrece una manera sencilla de calcular un aproximado del
                      porcentaje de tejido adiposo en el cuerpo de una persona.
                    </h5>
                    <p />
                    <h5 className="card-title myWhite">
                      Los valores por fórmula son los siguientes:
                    </h5>
                    <form className="row g-3" name="frmCalculo" onSubmit={handleSubmit}>
                      <div className="col-md-12">
                        {" "}
                        <label
                          htmlFor="inputName5"
                          className="form-label myWhite"
                        >
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
                          id="altura"
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
                          id="peso"
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
                          id="cintura"
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
                          id="cuello"
                          maxLength={4}
                          onChange={handleChange}
                        />
                      </div>

                      <div
                        className="col-md-12"
                        style={
                          show ? { display: "block" } : { display: "none" }
                        }
                      >
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
                          style={{
                            backgroundColor: "#6c4b7d",
                            border: "#6c4b7d",
                          }}
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
              </div>
              <div className="col-lg-6">
                <Rango igc={igc} regla={regla} />
              </div>
            </div>
          </section>
        </main>
        <br />
        <hr />
        <footer id="footer" className="footer">
          <div className="copyright">
            Challenge - &nbsp;
            <strong>
              <span>Juan Carlos Zepeda Arzate</span>
            </strong>
            .
          </div>
          <div className="credits">
            Celular: 7226099736 - Email: ingenierozepeda@gmail.com
          </div>
        </footer>
      </div>
    </>
  );
}
