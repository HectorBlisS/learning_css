const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');


var config = {
    apiKey: "AIzaSyDlHNsLbdH85thNyVywkTovYUYDYHvmRUM",
    authDomain: "cursosonline-4b11c.firebaseapp.com",
    databaseURL: "https://cursosonline-4b11c.firebaseio.com",
    projectId: "cursosonline-4b11c",
    storageBucket: "cursosonline-4b11c.appspot.com",
    messagingSenderId: "538613245347"
  };


// const hbs = require('hbs');
const fs = require('fs');
const cors = require('cors'); 
// const firestore = new admin.firestore();
// const settings = {/* your settings... */ timestampsInSnapshots: true};
// firestore.settings(settings);
//sheets
const readline = require('readline');
const {google} = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json';
const content = {"installed":{"client_id":"538613245347-5dg330b66q9u1mje02rt2m9m6rvddksj.apps.googleusercontent.com","project_id":"cursosonline-4b11c","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://www.googleapis.com/oauth2/v3/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"luv3yWkAfe_a5_YoJoiS8BdV","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}

admin.initializeApp(config);

const settings = {/* your settings... */ timestampsInSnapshots: true};
admin.firestore().settings(settings)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.myFunctionName = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
      const {originalEmail, displayName} = snap.data()
      accountCreatedMail(originalEmail, displayName)
    });

exports.datosCompletados = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {
        const newValue = change.after.data();
        const id = newValue.uid
        console.log(newValue)
        //accountCompletedMail(newValue.email, newValue.displayName)
        sendConfirmationEmail(newValue.email, newValue.displayName, id)
        //write in the sheet
        //writeInSheet(newValue)
        //send confirmation
        

    });

    //cors!!
    //midd course
exports.middleCourse = functions.https.onRequest((req, res) => {
    console.log(req.query)
    middleCourseMail(req.query.email, req.query.displayName)
    cors(req, res, () => {
        res.status(200).send({message: 'Sending'});
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
            <h5>Serás redireccionad@ en <h2 id="sec">10</h2> Segundos</h5>
            <script>
            var sec = document.getElementById('sec')
            var counter = 10
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


//sheets
const writeInSheet = (user) => {
    authorize(JSON.parse(content), (auth)=>listMajors(auth, user));
    console.log("writing in sheet")
}

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      console.log("authorize: ", oAuth2Client)
      callback(oAuth2Client);
    });
}

function listMajors(auth, user) {
    console.log("list majors: ",user)
    let values = [
        [],
        // Additional rows ...
    ];
    for(let k in user){
        values[0].push(user[k])
    }

      const resource = {
        values,
      };

    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.update({
      spreadsheetId: '1g8AnpDPnxcubKJHKHGJ0Fo-Eu_ybndV-MLmtJ_OOq6o',
      ValueInputOption:"USER_ENTERED",
      resource,
      range: 'Range!A2:G2',
    }, (err, res) => {
        console.log("error", err)
        console.log("res", res)
    });
  }

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
}

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
        <h2>${name}, ¡Casi lo logras!</h2>
        <p>
            Estas a nada de terminar el curso y poder aplicar al examen, hasta ahora lo
            haz hecho fenomenal, ¡no te detengas! continua y terminalo de una vez =D
            <a href="https://learning.ironhack.com.mx/course/0/animaciones-css"> Ir al curso  </a>  </p>
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
        <h2>${name}, ¡Lo conseguiste!, ¿no estás feliz?</h2>
        <p>
            Debes estarlo, ¡haz concluido todo el curso!, queremos felicitate y recorarte que ahora puedes
            presenta el examen, y conseguir tu certificado, ¡hazlo ahora mismo!
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
        <h2>${name}, ¡Solo falta una cosa más!</h2>
        <p>
            Estas a punto de disfrutar de el curso totalmente gratis, solo nos hace falta que des clic en el siguiente enlace,
            y podrás ver el curso en tu perfil:
            <a href="https://us-central1-cursosonline-4b11c.cloudfunctions.net/activateAccount?id=${id}"> Activar cuenta  </a>  </p>
        `
      }, (e, i)=>console.log("callback: " + JSON.stringify(i),e))
      //.then(info => res.render('message', {email, subject, message, info}))
}