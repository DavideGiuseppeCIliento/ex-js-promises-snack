//  # 🏆 Snack 1

function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    const url = `https://dummyjson.com/posts/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((obj) => resolve(obj.title))
      .catch(reject)
      .finally(console.log("Operazione conclusa"));
  });
}

getPostTitle(1)
  .then((r) => console.log("Il Titolo è: " + r))
  .catch((e) => console.error("Essore"));

// --- Bonus 1

function getPost(id) {
  return new Promise((resolve, reject) => {
    const url = `https://dummyjson.com/posts/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((post) => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((user) => {
            post.user = user;
            resolve(post);
          })
          .finally(console.log("Autore trovato!"));
      })
      .catch(reject);
  });
}

getPost(1).then((post) => console.log(post));

// # 🏆 Snack 2

function dadoRandomize() {
  return Math.floor(Math.random() * 6) + 1;
}

// function lanciaDado() {
//   console.log("Sto lanciando il dado...");
//   return new Promise((resolve, reject) => {
//     const problema = Math.random() < 0.2;
//     const risultato = dadoRandomize();

//     setTimeout(() => {
//       problema
//         ? reject("Si è incastrato il dado!")
//         : resolve(`Il numero estratto è: ${risultato}`);
//     }, 2000);
//   });
// }

// lanciaDado()
//   .then((messaggio) => console.log(messaggio))
//   .catch((err) => console.error(err));

// --- Bonus 2

function lanciaDado() {
  let ultimoLancio = 0;

  return function creaLanciaDado() {
    console.log("Sto lanciando il dado...");

    return new Promise((resolve, reject) => {
      const problema = Math.random() < 0.2;
      const risultato = dadoRandomize();

      setTimeout(() => {
        if (problema) {
          reject("Si è incastrato il dado!");
        } else {
          resolve(`Il numero estratto è: ${risultato}`);
          if (ultimoLancio === risultato) {
            console.log("Incredibile! Due volte lo stesso risultato!");
          }
        }

        ultimoLancio = risultato;
      }, 2000);
    });
  };
}

const lancio = lanciaDado(); // creo la closure

// Usando la closure lancio() avrò sempre un unico scope
lancio()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));

lancio()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));

lancio()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));

lancio()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));

lancio()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));

lancio()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));
