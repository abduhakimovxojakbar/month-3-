
var data = [
    {
        id: 1,
        cardName:"./image/IMAGE (4).png",
        name1: "woods",
        area: "Photography",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (5).png",
        name1: "path",
        area: "Website • Photography",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (7).png",
        name1: "darkness",
        area: "Website",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (8).png",
        name1: "waves",
        area: "Photography",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (9).png",
        name1: "drops",
        area: "Website",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (10).png",
        name1: "ocean",
        area: "Website",
        
    },
    {
        id: 1,
        cardName:"./image/IMAGE (11).png",
        name1: "town",
        area: "Website",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (12).png",
        name1: "mountain",
        area: "Website",
    },
    {
        id: 1,
        cardName:"./image/IMAGE (13).png",
        name1: "camera",
        area: "Website",
    },
    
];

var foto = document.getElementById("foto");

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    var card = document.createElement("div");
    card.className = "card";

    var image = document.createElement("img");
    var imageName = document.createElement("h3");
    var area = document.createElement("h3")

    image.setAttribute("src", element.cardName);
    imageName.textContent = element.name1;
    area.textContent = (element.area)
    
    card.appendChild(image);
    card.appendChild(imageName);
    card.appendChild(area)

    foto.appendChild(card);
}


// !!  2-qisim

var data = [
    { 
        id:1,
        name1: "Ron Swanson",
     cardName: "./image/IMAGE (14).png" ,
     area:"Founder",
    },

    { 
       id:1, 
        name1: "Julia Depish",
     cardName: "./image/IMAGE (15).png",
     area:"Marketing",
     },
    { 
       id:1, 
        name1: "Danny Devry",
     cardName: "./image/IMAGE (16).png",
     area:"Designer",
     },
    {
        id:1,
        name1: "Lisa Smith",
     cardName: "./image/IMAGE (17).png",
     area:"Developer",
     }
   
];

var foto = document.getElementById("fotos");

for (let i = 0; i < 4; i++) {
    const element = data[i];
    
    var card = document.createElement("div");
    card.className = "cards";

    var image = document.createElement("img");
    var imageName = document.createElement("h3");
    var area = document.createElement("h3")

    imageName.textContent = element.name1;
    image.setAttribute("src", element.cardName);
    area.textContent = (element.area)

    card.appendChild(image);
    card.appendChild(imageName);
    card.appendChild(area)

    foto.appendChild(card);}