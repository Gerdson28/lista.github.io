// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd-tzIk5FfvAaaTnzbtL19sOiWp9lgKgo",
    authDomain: "login-f36db.firebaseapp.com",
    projectId: "login-f36db",
    storageBucket: "login-f36db.appspot.com",
    messagingSenderId: "237929006625",
    appId: "1:237929006625:web:18eed00ddb5121f6b10560"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function cadastrar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("Cadastrado com sucesso, clique em Login");
            auth = user;

            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            alert("falha ao cadastrar");
        });
}

