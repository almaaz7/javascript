//controller (i/o) + events + talk to service

import { noteOperations } from '../services/note-service.js';
window.addEventListener('load', init);
function init() {
    showCounts();
    bindEvents();
}
function bindEvents() {
    document.querySelector('#add').addEventListener('click', addNote);
}
function showCounts() {
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
    const noteObject = {}; //object literal we want specific object./
    for (let field of fields) {
        noteObject[field] = document.querySelector(`#${field}`).value;
    }
    noteOperations.add(noteObject);
    printNote(noteObject);
    showCounts();

}
function printIcon(myClassName='trash') {
    const iTag = document.createElement('i');
    iTag.className = `fa-solid fa-${myClassName} me-5`;
    return iTag;
}
function printNote(noteObject) {
    const tbody = document.querySelector('#notes');
    const row = tbody.insertRow(); //create <tr>
    for (let key in noteObject) {
        const td = row.insertCell(); //<td>
        td.innerText = noteObject[key];
    }
    const td = row.insertCell();
    td.appendChild(printIcon());
    td.appendChild(printIcon('user-pen'));

}

