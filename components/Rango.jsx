import React, { useState } from "react";
import Image from "next/image";
const Rango = ({igc,regla}) => {

  return (
    <>
      <div className="card_">
        <div className="card-body">
        {igc != "" ?  (<h2 className="card-title myWhite">Tu Resultado: {igc}%</h2>):(<></>)}
          <form>
            <div className="row mb-5">
            <div className="col-sm-12">
                {regla < 4 &&  igc != "" ? (<label className="col-sm-2 col-form-label myWhite" >
                {igc}%
                </label>):(<label className="col-sm-2 col-form-label myWhite" >
                &nbsp;
                </label>) }
                
                {regla < 13 &&  igc != ""  ? (<label className="col-sm-2 col-form-label myWhite" >
                {igc}%
                </label>):(<label className="col-sm-2 col-form-label myWhite" >
                &nbsp;
                </label>) }
                {regla < 17 &&  igc != ""  ? (<label className="col-sm-2 col-form-label myWhite" >
                {igc}%
                </label>):(<label className="col-sm-2 col-form-label myWhite" >
                &nbsp;
                </label>) }
                {regla < 25 &&  igc != ""  ? (<label className="col-sm-2 col-form-label myWhite" >
                {igc}%
                </label>):(<label className="col-sm-2 col-form-label myWhite" >
                &nbsp;
                </label>) }
                {regla > 25 &&  igc != ""  ? (<label className="col-sm-2 col-form-label myWhite" >
                {igc}%
                </label>):(<label className="col-sm-2 col-form-label myWhite" >
                &nbsp;
                </label>) }
              </div>  
              <div className="col-sm-12">

              {regla < 4 &&  igc != ""  ? ( <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/cursor.png"
                    alt="cursor"
                    width={20}
                    height={20}
                  />
                </label>):( <label className="col-sm-2 col-form-label">
                  &nbsp;
                </label>) }


               
                {regla < 13 &&  igc != ""  ? ( <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/cursor.png"
                    alt="cursor"
                    width={20}
                    height={20}
                  />
                </label>):( <label className="col-sm-2 col-form-label">
                  &nbsp;
                </label>) }

                {regla < 17 &&  igc != ""  ? ( <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/cursor.png"
                    alt="cursor"
                    width={20}
                    height={20}
                  />
                </label>):( <label className="col-sm-2 col-form-label">
                  &nbsp;
                </label>) }

                {regla < 25 &&  igc != ""  ? ( <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/cursor.png"
                    alt="cursor"
                    width={20}
                    height={20}
                  />
                </label>):( <label className="col-sm-2 col-form-label">
                  &nbsp;
                </label>) }

                {regla > 25 &&  igc != ""  ? ( <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/cursor.png"
                    alt="cursor"
                    width={20}
                    height={20}
                  />
                </label>):( <label className="col-sm-2 col-form-label">
                  &nbsp;
                </label>) }
              </div>
              <div className="col-sm-12">
                <div className="input-group">
                  <Image src="/img/bar.png" alt="bar" width={700} height={50} />
                </div>
              </div>

              <div className="col-sm-12">
                <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/esencial.png"
                    alt="esencial"
                    width={20}
                    height={20}
                  />
                </label>
                <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/deportista.png"
                    alt="deportista"
                    width={20}
                    height={20}
                  />
                </label>
                <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/fitness.png"
                    alt="fitness"
                    width={20}
                    height={20}
                  />
                </label>
                <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/aceptable.png"
                    alt="aceptable"
                    width={20}
                    height={20}
                  />
                </label>
                <label className="col-sm-2 col-form-label">
                  <Image
                    src="/img/obeso.png"
                    alt="obeso"
                    width={20}
                    height={20}
                  />
                </label>
              </div>
              <div className="col-sm-12">
                <label className="col-sm-2 col-form-label myWhite">
                    2-4%
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                    6-13%
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                  14-17%
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                  18-25%
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                 25% +
                </label>
              </div>

              <div className="col-sm-12">
                <label className="col-sm-2 col-form-label myWhite">
                  Esencial
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                  Deportista
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                  Fitness
                </label>
                <label className="col-sm-2 col-form-label myWhite">
                  Aceptable
                </label>
                <label className="col-sm-2 col-form-label myWhite">Obeso</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Rango;
