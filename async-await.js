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
// Async/Await
//   async function init(){
//     await createPost({ title: "Post three", body: "Hay juelita three" });
//     getPosts();
//   }

//   init();

// Using fetch

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
