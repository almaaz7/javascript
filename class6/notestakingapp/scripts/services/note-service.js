//CRUD
import Note from "../models/note.js";

export const noteOperations = {
    notes:[],
    add(noteObject){
        const note = new Note(noteObject);
        this.notes.push(note);
    },
    total(){
        return this.notes.length;
    },
    seachById(id){
        return this.notes.find(note=>note.id==id);
    },
    toggleMark(id){
        this.seachById(id).toggleMark();
        // const noteObject = this.seachById(id);
        // noteObject.isMarked = !noteObject.isMarked;
    },
    getNotes(){
        return this.notes;
    },
    remove(){
        this.notes = this.notes.filter(note=>!note.isMarked);
    },
    search(){

    },
    sort(){

    },
    save(){

    },
    update(){

    },
    marktotal(){
        return this.notes.filter(note=>note.isMarked).length;
    },
    unmarktotal(){
        return this.total()-this.marktotal();
    }
}

