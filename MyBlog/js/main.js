// 毎月追加する記事ファイル名をここに書くだけでOK
const posts = [
    { file: "2026-04.html", title: "2025年1月の思い出" }
];

const list = document.getElementById("post-list");

posts.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="posts/${post.file}">${post.title}</a>`;
    list.appendChild(li);
});