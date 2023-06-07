const listaPosts = [
    {
        nome: "lorem ipsum",
        descricao: "lorem ipsum",
        img: ""
    },
    {
        nome: "lorem ipsum",
        descricao: "lorem ipsum",
        img: ""
    },
    {
        nome: "lorem ipsum",
        descricao: "lorem ipsum",
        img: ""
    },
    {
        nome: "lorem ipsum",
        descricao: "lorem ipsum",
        img: ""
    },
];

let container = document.querySelector(".container");

const criacaoPosts = () =>{
    listaPosts.forEach((post) => {

        let card =    
        `<div class = card>
        <img src=${post.imgURL}/>
        <h2 class="card-titulo"> ${post.titulo}</h2>
        <p class="descricao"> ${post.descricao}</p>
         </div>`;

         container.innerHTML += card;
    });
};

window.onload = () =>{
    criacaoPosts();
};