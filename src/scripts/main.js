const message = document.getElementById("message");

// // Event handler function
// const updateArticles = () => {
//     const article = document.querySelector("article");
//     return article.innerHTML += message;
// }

// message.addEventListener("keyup", updateArticles);



const article_1 = document.querySelector("#first-article");
const article_2 = document.querySelector("#second-article");

const updateArticle = () => {
    const msgVal = message.value;
    article_1.innerHTML = msgVal;
    article_2.innerHTML = msgVal;
}

message.addEventListener("keyup", updateArticle);