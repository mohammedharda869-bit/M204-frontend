const etudiants=[
    {id:1,name:"mohammed",note:15},
    {id:2,name:"amine",note:16},
    {id:3,name:"karim",note:18},
    {id:4,name:"souhail",note:9},
    {id:5,name:"yasser",note:10}
];
const newObject={id:6,name:"Amina",note:11}
const  nouveauEtd=[...etudiants,newObject]
const cst={...nouveauEtd,note:20}
const ctEtuds=etudiants.map(function(item,i){
    if(item.id==cst.id){
        return cst
    }
    return item
})
const cdtEtud=etudiants.filter(function(item){
    return item.id!=
})
console.log(nouveauEtd);

