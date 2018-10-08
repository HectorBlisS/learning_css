const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');


// var config = {
//     apiKey: "AIzaSyDlHNsLbdH85thNyVywkTovYUYDYHvmRUM",
//     authDomain: "cursosonline-4b11c.firebaseapp.com",
//     databaseURL: "https://cursosonline-4b11c.firebaseio.com",
//     projectId: "cursosonline-4b11c",
//     storageBucket: "cursosonline-4b11c.appspot.com",
//     messagingSenderId: "538613245347"
//   };

//sheets
const {google} = require('googleapis');
const sheets = google.sheets('v4')

const credentials = {"installed":{"client_id":"538613245347-5dg330b66q9u1mje02rt2m9m6rvddksj.apps.googleusercontent.com","project_id":"cursosonline-4b11c","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://www.googleapis.com/oauth2/v3/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"luv3yWkAfe_a5_YoJoiS8BdV","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}
const serviceKey = {
  "type": "service_account",
  "project_id": "cursosonline-4b11c",
  "private_key_id": "40c3002a842ec277b6dda99a7dc19ccf4e40a675",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7etGZ9J0fUFwN\nBv0LAEgTSN/bW7PhfWs6M6ggLqu4rjbzyO4xy2HqpktRjI5d3QXFUz9BcjDazvxW\nGKTKuhtz3RYcoRYh9IvIRJrb82I7m46YCCvjLuS4VOj4UhMgi1m+cwrN+cVJxzBm\n8suzwz1v8OpBRAGKqYP8pu1E2MBvMHuuLVXTsDuQArZDBZZtHjtPlIOmp+JvFLPk\n/ntiNOGCgF8O53qzERQk9uNGfLxHj0b/gEJS5AmrVsCKYHU6lIBodC61vjmzegen\nPNvJSpyC/4zvv5Wzrnfu0EccB8uLtBv37A2qrDceoYhmC2Hv8h9yBsk2Hp1/wKT2\neLd4JqrhAgMBAAECggEANw+NonEYejtgJYVRaNs2z88dy69Fh6qNhOTp8jWywkUM\nJ5Hx/tbUFZWsVjF5GHESwk6+K6rtVT3oFyMatt1stZ0PYu4ecW+AZBtd/c4fohEA\nEn+H4CuECe0KFPAJ5Qt4GnpwCGlcO1xQR1P0ZoGnOAqhyfQ+napGdLvTwF4GOkEa\nxbMNWtf0El/SWoVyacRl73oAHqIPazKmg+PFU7WEvdlF75JHjh+hWx773tZ0b4r3\nnkaGwlKuCX1jMteogGmuEF2jWTH/GbN2KCw2gqIsxJ0TJKK2f609wrVNzDSxQBfQ\npdZhLHJYd4J3ZfjBOpcsUi5Vj2n1zXqhljwW9a6bNwKBgQDfCl+v6U2KbHk1Fexu\nQMQwb5DV95HgCz82SLxTGupb1AWcjinBBFbnBS65MCYIjxOp5NPyB8x+tRwwJooi\nTrgc8mJcGd/4InCau+G1rc2kd/3AErfNNMwh4jwYr0HvEIE0o9aL+UWocypIS03e\nfnAJIGMZe7SRIhai5hQLhXkmUwKBgQDXLy5Lgd3cl/a+oFDd3GReGPYEg5WjujZw\n+XUWpHMJNGGjXKyUUqp2Swl57Oq0oAZQqCC9DY07yDk89cITejMdQRkU9dPkIpNw\ncucG639slYvgD00hPNFVFeUZ4Cd8qvW2OKNh09QZzQRczr8KUzlxAM+FfUdPtO3Y\nlO+yzq+bewKBgQCaya5CfN0NVd6AUui0U0pUevi/JYMdQ3DpEW1xF1rRw8DpN1gO\n1h4hUd1tM9cRVYpF+8KDU5o9zR7046o1yP/JRwWv+V0P7YbMO9uWpDn1DDkUFWlt\nhlisoz8lums9p+yjRZjdp28KSnJrnac64/CIxOtBgjJ8DnY7MwVyQX0kdQKBgHNt\nkKTaVful3Ksm7hoExiYft6B2QUfhdKCnf+KUdkzCt3ldFgo+SchIuh2YM9KOYLTV\nazJeWZtu7R1BK0ktbMvNhrnSoEYpMfPI/xqcKu9BTRX0v0gMCrJcm1eFAUmDn2iO\n+z1X1te8PRHXqWzNdeujJq6RpDYidM+QHQBKlLKPAoGBAJLpdcuvnbRVlRsabB25\nkpYFHhVBYBIHBGEDYlbHSG267obVEeMlOuYxLgFvNtL/BG4Nc7Oqf+pqDP4dh0Xo\nsJZllGQPGc/pJsDKPsaoevmpyATCQkEZ4+uR4ce1YDuuBgnfo6gveGwIguqLzFkk\nmWImizTucOcOuIHOu1pw7MnT\n-----END PRIVATE KEY-----\n",
  "client_email": "serviceaccountkeyforsheets@cursosonline-4b11c.iam.gserviceaccount.com",
  "client_id": "114080809944963443634",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/serviceaccountkeyforsheets%40cursosonline-4b11c.iam.gserviceaccount.com"
}

const {client_email, private_key} = serviceKey
let jwtClient = new google.auth.JWT(client_email, null, private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

jwtClient.authorize(function(err, tokens) {
    // at this point the authentication is done you can now use `jwtClient` 
    // to read or write to the spreadsheet
});


//sheets
const writeInSheet = (user) => {
    user.date = Date.now()
    console.log('intentando escribi')
    const values = [[]];
  
    for(let k in user){
      values[0].push(user[k])
    }
  
    sheets.spreadsheets.values.append({
      auth: jwtClient,
      spreadsheetId: '1g8AnpDPnxcubKJHKHGJ0Fo-Eu_ybndV-MLmtJ_OOq6o',
      range: 'Sheet1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values
      }
    }, (err, response) => {
      if (err) return console.error(err)
    })
  
  }

const writeInMitad = (email, displayName, phoneNumber) => {
    const values = [[]];
  
    // for(let k in user){
    //   values[0].push(user[k])
    // }
    values[0].push(email)
    values[0].push(displayName)
    values[0].push(phoneNumber)
  
    sheets.spreadsheets.values.append({
      auth: jwtClient,
      spreadsheetId: '1g8AnpDPnxcubKJHKHGJ0Fo-Eu_ybndV-MLmtJ_OOq6o',
      range: 'mitad',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values
      }
    }, (err, response) => {
      if (err) return console.error(err)
    })
  
}

const writeInApproved = (user) => {
    const values = [[]];
  
    // for(let k in user){
    //   values[0].push(user[k])
    // }
    
    values[0].push(user.displayName)
    values[0].push(user.firstName)
    values[0].push(user.lastName)
    values[0].push(user.email)
    values[0].push(user.phoneNumber)
    values[0].push(user.points)
    values[0].push(new Date())
    values[0].push(user.uid)
  
    sheets.spreadsheets.values.append({
      auth: jwtClient,
      spreadsheetId: '1g8AnpDPnxcubKJHKHGJ0Fo-Eu_ybndV-MLmtJ_OOq6o',
      range: 'aprobados',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values
      }
    }, (err, response) => {
      if (err) return console.error(err)
    })
  
}

const writeInNotApproved = (user) => {
    const values = [[]];
  
    // for(let k in user){
    //   values[0].push(user[k])
    // }
    
    values[0].push(user.displayName)
    values[0].push(user.firstName)
    values[0].push(user.lastName)
    values[0].push(user.email)
    values[0].push(user.phoneNumber)
    values[0].push(new Date())
    values[0].push(user.uid)
  
    sheets.spreadsheets.values.append({
      auth: jwtClient,
      spreadsheetId: '1g8AnpDPnxcubKJHKHGJ0Fo-Eu_ybndV-MLmtJ_OOq6o',
      range: 'reprobados',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values
      }
    }, (err, response) => {
      if (err) return console.error(err)
    })
  
}

const writeEmail = (email) => {
  const values = [[]];

  // for(let k in user){
  //   values[0].push(user[k])
  // }

  values[0].push(email)

  sheets.spreadsheets.values.append({
    auth: jwtClient,
    spreadsheetId: '1g8AnpDPnxcubKJHKHGJ0Fo-Eu_ybndV-MLmtJ_OOq6o',
    range: 'emails',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values
    }
  }, (err, response) => {
    if (err) return console.error(err)
  })

}



// const hbs = require('hbs');
const fs = require('fs');
const cors = require('cors'); 
admin.initializeApp();

const settings = {/* your settings... */ timestampsInSnapshots: true};
admin.firestore().settings(settings)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.myFunctionName = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
      const {originalEmail, displayName} = snap.data()
      //accountCreatedMail(originalEmail, displayName)
    });

exports.datosCompletados = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {
        const newValue = change.after.data();
        const id = newValue.uid
        //accountCompletedMail(newValue.email, newValue.displayName)
        if(newValue.validated) return
        sendConfirmationEmail(newValue.email, newValue.displayName, id)
        //write in the sheet
        writeInSheet(newValue)
        //writeInSheet(newValue)
        //send confirmation
        

    });

    //cors!!
    //midd course
    //ensure send mail once
exports.middleCourse = functions.https.onRequest((req, res) => {
    
    admin.firestore().collection('users').doc(req.query.id).get()
    .then(doc=>{
        if(!doc.exists) return res.status(404).send({message:"do not exists"})
        const user = doc.data()
        if(user.middle) return res.status(200).send({message:"already done"})
        middleCourseMail(user.email,user.displayName)
        writeInMitad(user.email, user.displayName, user.phoneNumber)
        user.middle = true
        admin.firestore().collection('users').doc(req.query.id).set(user)
        cors(req, res, () => {
            return res.status(200).send({message: 'Sending'});
          })
    })

   
    
});

//final course
exports.finalCourse = functions.https.onRequest((req, res) => {
    console.log(req.query)
    finalizeCourse(req.query.email, req.query.displayName)
    cors(req, res, () => {
        res.status(200).send({message: 'Sending'});
      })
});

//testing
// exports.testing = functions.https.onRequest((req, res) => {
//     console.log("testing")
//     writeInSheet({_id:1,displayName:"BlisS"})
// });

//activate account
exports.activateAccount = functions.https.onRequest((req, res) => {
    const {id} = req.query
    const store = admin.firestore()
    store.collection('users').doc(id).get()
    .then(doc=>{
        if(!doc.exists) return res.status(404).send({message:"este usuario no existe."})
        const user = doc.data()
        if(user.validated) return res.status(404).send({message:"este usuario Ya está activo."})
        user.validated = true
        store.collection('users').doc(id).set(user)
        .then(()=>{
            console.log("llegué")
            res.status(200).send(` <h2>Cuenta activada</h2>
            <p>Da clic <a href="https://learning.ironhack.com.mx/profile">AQUÍ</a> para ver el curso</p>
            <h5>Serás redireccionad@ en <h2 id="sec">1</h2> Segundo</h5>
            <script>
            var sec = document.getElementById('sec')
            var counter = 1
            setInterval(()=>{
                counter--
                sec.innerHTML = counter
                if(counter === 1) window.location.replace("https://learning.ironhack.com.mx/profile");
            },1000)
            </script>
            `)
            // cors(req, res, () => {
            //     res.status(200).send(`
            //         <h2>Cuenta activada</h2>
            //         <p>Da clic <a href="https://learning.ironhack.com.mx/course/0/animaciones-css">AQUÍ</a> para ver el curso</p>
            //     `);
            //   })
         })
        
    })

    
});

exports.examApproved = functions.https.onRequest((req,res)=>{
    const {uid} = req.query
    const store = admin.firestore()
    store.collection('users').doc(uid).get()
    .then(doc=>{
        if(!doc.exists) return res.status(404).send({message:"Este usuario no existe."})
        const user = doc.data()
        if(!user.approved) return res.status(404).send({message:"Este usuario No ha aprovado el examen"})
        writeInApproved(user)
        siPaso(user.email, user.displayName)
        cors(req, res, () => {
            return res.status(201).send({message:"Escribiendo"})
          })
       
    })
})

exports.examNotApproved = functions.https.onRequest((req,res)=>{
    const {uid} = req.query
    const store = admin.firestore()
    store.collection('users').doc(uid).get()
    .then(doc=>{
        if(!doc.exists) return res.status(404).send({message:"Este usuario no existe."})
        const user = doc.data()
        if(user.approved) return res.status(404).send({message:"Este usuario ya ha aprovado el examen"})
        writeInNotApproved(user)
        noPaso(user.email, user.displayName)
        cors(req, res, () => {
            return res.status(201).send({message:"Escribiendo"})
          })
       
    })
})

//coming soon
exports.comingSoon = functions.https.onRequest((req, res) => {
  writeEmail(req.query.email)
  cors(req, res, () => {
    res.status(200).send({message: 'Writing'});
  })
});

//nodemailer

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'fixtergeek@gmail.com',
      pass: 'Poweroso1704@'
    }
});

//const accountCreated = hbs.compile(fs.readFileSync((__dirname, './accountCreated.hbs'), 'utf8'));

const accountCreatedMail = (to,name)=>{
    return transporter.sendMail({
        from: '"🚗UBER + Ironhack 💻" <hola@ironhack.com>',
        to, 
        subject:"testing " + name, 
        //text:"testing, " + name,
        //html: accountCreated({name})

        html: `
        <h2>¡Bienvenido!</h2>
        <p>
            Estas a un paso de disfrutar de nuestro curso de animaciones CSS totalmente gratis.
            Solo tienes que completar tus datos dentro de tu perfil, ¡Hazlo y comienza el curso!
            <a href="https://learning.ironhack.com.mx/profile"> Ir a mi perfil  </a>  </p>
        `
      }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
      //.then(info => res.render('message', {email, subject, message, info}))
};

const accountCompletedMail = (to,name)=>{
    return transporter.sendMail({
        from: '"🚗UBER + Ironhack 💻" <hola@ironhack.com>',
        to, 
        subject:"testing " + name, 
        //text:"testing, " + name,
        //html: accountCreated({name})

        html: `
        <h2>¡Genial ahora puedes ver el curso!</h2>
        <p>
            Ya no hace falta nada para que puedas disfrutar de nuestro curso de
            Animaciones CSS, solo tienes que sentarte y disfrutar, pero preparate porque 
            en este curso aprenderás mucho practicando los ejercicios.
            Así que, no se diga más y ¡comenzemos!
            <a href="https://learning.ironhack.com.mx/course/0/animaciones-css"> Ir al curso  </a>  </p>
        `
      }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
      //.then(info => res.render('message', {email, subject, message, info}))
}

const middleCourseMail = (to,name)=>{
    return transporter.sendMail({
        from: '"IronhackMEX 💻" <hola@ironhack.com>',
        to, 
        subject:"testing " + name, 
        //text:"testing, " + name,
        //html: accountCreated({name})

        html: `
        <h2>Hola ${name}, ¡Te tengo buenas noticias!</h2>
        <p>
            ¡Ya completaste la mitad del curso en línea!
            ¿Vas a parar aquí?

            Sigue aprendiendo a crear animaciones con nuestro instructor Héctor Bliss.
            ¡Aquí te esperamos! 

            <a href="https://learning.ironhack.com.mx/course/0/animaciones-css"> Ir al curso  </a> 
            
            ¡Ánimo! Manon de Ironhack
            </p>
           
        `
      }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
      //.then(info => res.render('message', {email, subject, message, info}))
}

const finalizeCourse = (to,name)=>{
    return transporter.sendMail({
        from: '"IronhackMEX 💻" <hola@ironhack.com>',
        to, 
        subject:"¡Lo lograste!" + name, 
        //text:"testing, " + name,
        //html: accountCreated({name})

        html: `
        <h2>Hola ${name}, ¡Muchas felicidades!</h2>
        <p>
            Acabas de completar nuestro curso en línea de animaciones!

            Llegó la hora de aplicar lo que aprendiste y de pasar el examen para obtener tu certificado.

            ¡No pierdas tiempo y prueba tus conocimientos ahora!

            ¡Ánimo!
            Manon de Ironhack
            <a href="https://learning.ironhack.com.mx/course/0/animaciones-css"> Ir al examen  </a>  </p>
        `
      }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
      //.then(info => res.render('message', {email, subject, message, info}))
}

const sendConfirmationEmail = (to,name, id)=>{
    console.log("el id: ", id)
    return transporter.sendMail({
        from: '"IronhackMEX 💻" <hola@ironhack.com>',
        to, 
        subject: name + " ¡Estas a 1 solo paso!", 
        //text:"testing, " + name,
        //html: accountCreated({name})

        html: `
            <h2>Hola ${name}, </h2>
            <p>
              Gracias por registrarte a nuestro curso en línea de Diseño Web, ¡ya formas parte de nuestra comunidad!
              En este curso de 2 horas aprenderás a crear animaciones CSS 2D, 3D y SVG y diseñar proyectos con efectos espectaculares. Te recomendamos tomar
              las lecciones con regularidad para que aprendas de manera eficiente.
              Todos esos temas se abordan a profundidad en nuestros cursos de Desarrollo Web y UX/UI Design en Ironhack, en caso de que quieras aprender más.
            </p>
            
            <p>¿List@?</p>
             
            <p>Empieza ahora:</p> 
            
            <a href="https://us-central1-cursosonline-4b11c.cloudfunctions.net/activateAccount?id=${id}"> Activar cuenta  </a>

            <p>¡Ánimo!</p>
            <p>Manon de Ironhack</p>
            
        `
      }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
      //.then(info => res.render('message', {email, subject, message, info}))
}

const noPaso = (to,name)=>{
//  console.log("el id: ", id)
  return transporter.sendMail({
    from: '"IronhackMEX 💻" <hola@ironhack.com>',
    to,
    subject: name + " ¡Estas a 1 solo paso!",
    //text:"testing, " + name,
    //html: accountCreated({name})

    html: `
        <h2>Hola ${name}, ¡No te rindas!</h2>
        <p>Te falta aplicar unos conceptos para crear tus animaciones por tu cuenta y pasar el examén.</p>

        <p>
            Pero no te preocupes, aprender a programar solo requiere dedicación y tiempo.Te invitamos a volver a tomar el curso para pasar el examén y
            obtener tu certificado.
        </p>
            
         <a href="https://learning.ironhack.com.mx/course/0/animaciones-css"> Ir al examen </a>  

         <p>
            Si crees que el aprendizaje en línea no sea para tí y estás interesado en unos de nuestros cursos presenciales, ven a unos de nuestros Openhouse
            para conocer al equipo, el campus y resolver todas tus dudas.
         </p>
         
         <p>Tenemos varias sesiones disponibles, regístrate aquí:</p>
         
         <p>¡Espero verte dentro de poco!</p>
         <p>Manon de Ironhack</p>
            
        `
  }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
  //.then(info => res.render('message', {email, subject, message, info}))
}

const siPaso = (to,name)=>{
  return transporter.sendMail({
    from: '"IronhackMEX 💻" <hola@ironhack.com>',
    to,
    subject: name + " ¡Estas a 1 solo paso!",
    //text:"testing, " + name,
    //html: accountCreated({name})

    html: `
        <h2>Hola ${name}, ¡Muchas felicidades!</h2>
        
        <p>
            ¡Aprobaste el examén y ya puedes crear animaciones con CSS, HTML y JavaScript!  
            Encontrarás aquí tu certificado para poder compartilo en redes y Linkedin.
        </p>

        <p>
            ¿Quieres ir más allá y seguir aprendiendo? Estarías interesado en impulsar o cambiar completamente de carrera?
            Te invitamos a conocernos y venir a unos de nuestros Openhouse para conocer al equipo, el campus y resolver todas tus dudas.
            Además podrás venir a recuperar tu premio durante esta sesión de puertas abiertas.
            Tenemos varias sesiones disponibles, regístrate aquí:
            ¡Espero verte dentro de poco!
        </p>
        
        <p>Saludos, Manon de Ironhack</p> 
        `
  }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
  //.then(info => res.render('message', {email, subject, message, info}))
}