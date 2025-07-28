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
