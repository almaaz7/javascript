//controller (i/o) + events + talk to service

import { noteOperations } from '../services/note-service.js';
window.addEventListener('load', init);
function init() {
    showCounts();
    bindEvents();
    // disableButton();
}
const disableButton = () => document.querySelector('#delete').disabled = true;
const enableButton = () => document.querySelector('#delete').disabled = false;

function bindEvents() {
    document.querySelector('#add').addEventListener('click', addNote);
    document.querySelector('#delete').addEventListener('click', deleteMarked);
}
function deleteMarked() {
    noteOperations.remove();
    printNotes(noteOperations.getNotes()); // printnotes and printnote are two different function
}
function showCounts() {
    noteOperations.marktotal() > 0 ? enableButton() : disableButton();
    document.querySelector('#total').innerText = noteOperations.total();
    document.querySelector('#marktotal').innerText = noteOperations.marktotal();
    document.querySelector('#unmarktotal').innerText = noteOperations.unmarktotal();
}
function addNote() {
    //read id,title,descrption,date of completion,importance
    //DOM
    // const id = document.querySelector('#id').value;
    // const title = document.querySelector("#title").value;
    const fields = ['id', 'title', 'desc', 'cdate', 'importance'];
    const noteObject = {}; //object literal we want specific object.
    for (let field of fields) {
        noteObject[field] = document.querySelector(`#${field}`).value;
    }
    noteOperations.add(noteObject);
    printNote(noteObject);
    showCounts();

}
function printIcon(myClassName = 'trash', fn, id) {
    const iTag = document.createElement('i');
    iTag.setAttribute('note-id', id);//we create our own attribute
    iTag.className = `fa-solid fa-${myClassName} me-5 hand`;
    iTag.addEventListener('click', fn);
    return iTag;
}
function toggleMark() {
    //console.log("toogle", this)
    const icon = this;
    const id = this.getAttribute('note-id');
    noteOperations.toggleMark(id);
    const tr = icon.parentNode.parentNode;
    // tr.className = 'table-danger';
    tr.classList.toggle('table-danger');
    showCounts();
}
function edit() {
    console.log("edit");
}
function printNotes(notes){ //we have to pass the argument in the function
    const tbody = document.querySelector('#notes');
    tbody.innerHTML = '';
    notes.forEach(note=>printNote(note));
    showCounts();
}
function printNote(noteObject) {
    const tbody = document.querySelector('#notes');
    const row = tbody.insertRow(); //create <tr>
    for (let key in noteObject) {
        if(key == 'isMarked'){
            continue;
        }
        const td = row.insertCell(); //<td>
        td.innerText = noteObject[key];
    }
    const td = row.insertCell();
    td.appendChild(printIcon('trash', toggleMark, noteObject.id));
    td.appendChild(printIcon('user-pen', edit, noteObject.id));

}

