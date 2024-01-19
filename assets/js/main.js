const arrayTeam = [
    {
        
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "assets/img/wayne-barnett-founder-ceo.jpg",
    },

    {
         
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "assets/img/angela-caroll-chief-editor.jpg",

    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "assets/img/walter-gordon-office-manager.jpg",

    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "assets/img/angela-lopez-social-media-manager.jpg",

    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "assets/img/scott-estrada-developer.jpg",

    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "assets/img/barbara-ramos-graphic-designer.jpg",

    }
  
]
console.log(arrayTeam)

for(let i = 0; i < arrayTeam.length; i++){

let oggetti = arrayTeam[i]


document.querySelector("main  .row").innerHTML += `
<div class="card" style="width: 18rem;">

<img src=./${oggetti.immagine} class="card-img-top" alt="">

<div class="card-body">

  <h5 class="card-title">${oggetti.nome}</h5>

  <p class="card-text">${oggetti.ruolo}</p>
  
</div>
</div>
`


}