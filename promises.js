const posts = [
  { title: "Post one", body: "I am in the post one" },
  { title: "Post two", body: "I am in the post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 100);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong...");
      }
    }, 100);
  });
}

// createPost({ title: "Post three", body: "Hay juelita three" })
//   .then(getPosts)
//   .catch(err => console.log(err));

// Promise.all

const promise1 = Promise.resolve("Hola me resolvieron");
const promise2 = Promise.resolve(10);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Chaolin con pollo...");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
