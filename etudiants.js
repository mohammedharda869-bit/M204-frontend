const etudiants=[
    {id:1,name:"mohammed",note:15},
    {id:2,name:"amine",note:16},
    {id:3,name:"karim",note:18},
    {id:4,name:"souhail",note:9},
    {id:5,name:"yasser",note:10}
];
const etablissement = "ISFO"
function trouverEtudiant(vId){
    return etudiants.find(function(item){
        return item.id==vId

    })
}

export default etudiants
export {etablissement,trouverEtudiant}