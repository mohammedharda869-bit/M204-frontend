const note = [14,11,17];
function ajouterNote(liste,note){
    return[
        ...liste,
        note
    ];
}
const nouvzllesNotes=ajouterNote(note,18);
console.log(nouvzllesNotes);
console.log(note);