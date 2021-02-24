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
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}


createPost({ title: "Post three", body: "I am in the post three" }, getPosts);
