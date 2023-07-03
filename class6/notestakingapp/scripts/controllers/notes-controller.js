function addNote(){
    //read id,title,descrption,date of completion,importance
    //DOM
    // const id = document.querySelector('#id').value;
    // const title = document.querySelector("#title").value;
    const fields = ['id','title','desc','cdate','importance'];
    const noteObject = {}; //object literal
    for(let field of fields){
        noteObject[field] =  document.querySelector(`#${field}`).value;
    }
    printNote(noteObject);

}
    function printNote(noteObject){
        const tbody = document.querySelector('#notes');
        const row = tbody.insertRow(); //create <tr>
        for(let key in noteObject){
            const td = row.insertCell(); //<td>
            td.innerText = noteObject[key];
        }
    }

