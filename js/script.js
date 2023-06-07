const listaPosts = [
    {
        titulo:"Lorem ipsum dolor sit amet.",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque commodo sem, eu consectetur lacus rutrum sed. Nam porta ullamcorper urna id congue. Donec tincidunt commodo vestibulum. Aenean consectetur venenatis libero, non tristique eros fringilla at. Donec et metus et metus mollis maximus vitae nec quam. Nunc venenatis ultricies ante sit amet ullamcorper. Donec et rhoncus mauris. Maecenas nec risus ornare, semper ligula sit amet, tempor turpis. Donec viverra quam eget libero rutrum semper. Pellentesque a interdum sem, nec pulvinar tellus. Ut fermentum condimentum suscipit. Aliquam vestibulum nisi in dictum aliquet.",
        imgURL:"",
    },
    {
        titulo:"Lorem ipsum dolor sit amet.",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque commodo sem, eu consectetur lacus rutrum sed. Nam porta ullamcorper urna id congue. Donec tincidunt commodo vestibulum. Aenean consectetur venenatis libero, non tristique eros fringilla at. Donec et metus et metus mollis maximus vitae nec quam. Nunc venenatis ultricies ante sit amet ullamcorper. Donec et rhoncus mauris. Maecenas nec risus ornare, semper ligula sit amet, tempor turpis. Donec viverra quam eget libero rutrum semper. Pellentesque a interdum sem, nec pulvinar tellus. Ut fermentum condimentum suscipit. Aliquam vestibulum nisi in dictum aliquet.",
        imgURL:"",
    },
    {
        titulo:"Lorem ipsum dolor sit amet.",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque commodo sem, eu consectetur lacus rutrum sed. Nam porta ullamcorper urna id congue. Donec tincidunt commodo vestibulum. Aenean consectetur venenatis libero, non tristique eros fringilla at. Donec et metus et metus mollis maximus vitae nec quam. Nunc venenatis ultricies ante sit amet ullamcorper. Donec et rhoncus mauris. Maecenas nec risus ornare, semper ligula sit amet, tempor turpis. Donec viverra quam eget libero rutrum semper. Pellentesque a interdum sem, nec pulvinar tellus. Ut fermentum condimentum suscipit. Aliquam vestibulum nisi in dictum aliquet.",
        imgURL:"",
    },
    {
        titulo:"Lorem ipsum dolor sit amet.",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque commodo sem, eu consectetur lacus rutrum sed. Nam porta ullamcorper urna id congue. Donec tincidunt commodo vestibulum. Aenean consectetur venenatis libero, non tristique eros fringilla at. Donec et metus et metus mollis maximus vitae nec quam. Nunc venenatis ultricies ante sit amet ullamcorper. Donec et rhoncus mauris. Maecenas nec risus ornare, semper ligula sit amet, tempor turpis. Donec viverra quam eget libero rutrum semper. Pellentesque a interdum sem, nec pulvinar tellus. Ut fermentum condimentum suscipit. Aliquam vestibulum nisi in dictum aliquet.",
        imgURL:"",
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