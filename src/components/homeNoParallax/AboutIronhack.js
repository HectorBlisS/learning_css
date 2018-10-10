import React from 'react';

const video = "https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/landing%2FDiscover_Ironhack_Mexico_City(youtube.com).mp4?alt=media&token=499adeda-05b2-4f92-a1c3-9fa569731832"

export const AboutIronhack = () => {
  return (
    <div className='aboutIronhack'>
      <h3>Acerca de Ironhack</h3>
      <h5>
        Ironhack es una escuela que ofrece bootcamps presenciales en <strong>Desarrollo Web y Diseño UX/UI</strong>, con campus en Madrid,
        Barcelona, Miami, París,
        Berlín, Amsterdam, Sao Paulo y ahora <strong>Ciudad de México</strong>. Ironhack ha formado a más de 1,500 estudiantes de 60 nacionalidades
        distintas y es reconocida como una de las 3 mejores escuelas de educación tecnológica del mundo por <a href='https://www.courserepo
        .com/schools/ironhack' target='_blank' rel="noopener noreferrer">Course Report</a> y <a href='https://www.switchup.org/bootcamps/ironhack'
                                                                                                target='_blank' rel="noopener noreferrer">SwitchUp</a>. La
        misión de Ironhack es permitir que cualquier persona sea protagonista de la revolución digital y pueda dar un giro a su carrera. <strong>El 85% de
        los estudiantes encuentran empleo en los tres meses siguiente
        a su formación.</strong>
      </h5>
      <video controls controlsList="nodownload" src={video}></video>
    </div>
  )
};
