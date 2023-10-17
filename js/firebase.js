const firebaseConfig = {
   apiKey: "AIzaSyCxHNmOSmseq_xyzEh7yuaWbXNowvanZHU",
   authDomain: "leme-mapa.firebaseapp.com",
   databaseURL: "https://leme-mapa-default-rtdb.firebaseio.com",
   projectId: "leme-mapa",
   storageBucket: "leme-mapa.appspot.com",
   messagingSenderId: "616685342842",
   appId: "1:616685342842:web:9e456b7feee062421f2bc3"
};

//Inicializando o Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const urlApp = 'http://127.0.0.1:5500'



function logaGoogle() {
   const provider = new firebase.auth.GoogleAuthProvider()
   firebase.auth().signInWithPopup(provider)
      .then((result) => {
         window.location.href = `${urlApp}/home.html`
      }).catch((error) => {
         alert(`Erro ao efetuar o login ${error.message}`)
      })
}

function verificaLogado() {
   firebase.auth().onAuthStateChanged(user => {
      if (user) {
         //Salvamos o id do user localmente
         localStorage.setItem('usuarioId', user.uid)
         //Inserindo a imagem do usuário
         let imagem = document.getElementById('imagemUsuario')

         user.photoURL
            ? imagem.innerHTML += `<img src="${user.photoURL}" alt="Foto do usuário" title="${user.displayName}" class="img rounded-circle" width="48" />`
            : imagem.innerHTML += `<img src="images/logo-google.svg" title="Usuário sem foto" class="img rounded-circle" width="32" />`
      } else {
         console.error('Usuário não logado!')
         window.location.href = `${urlApp}/`
      }
   })
}

function logoutFirebase() {
   firebase.auth().signOut()
      .then(function () {
         localStorage.removeItem('usuarioId')
         window.location.href = `${urlApp}/`
      })
      .catch(function (error) {
         alert(`Não foi possível fazer o logout: ${error.message}`)
      })
}

async function salvaEstabelecimento(estabelecimento) {
   let usuarioAtual = firebase.auth().currentUser;
   try {
       await firebase.database().ref('estabelecimentos').push({
           ...estabelecimento,
           usuarioInclusao: {
               uid: usuarioAtual.uid,
               nome: usuarioAtual.displayName
           }
       });
       alert('Registro incluído com sucesso!');
       // Limpa o formulário
       document.getElementById('formCadastro').reset();
   } catch (error) {
       alert(`Erro ao salvar: ${error.message}`);
   }
}