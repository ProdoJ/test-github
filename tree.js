carets = document.querySelectorAll('.caret');
//console.log(carets);


for(var i=0; i<carets.length; i++){
    //console.log(carets[i]);
    carets[i].addEventListener('click', function(){
        //console.log(this);
        this.classList.toggle('caret-down');
        li = this.parentElement;
        li.querySelector('.nested').classList.toggle('active');
    });
}
 
CreateParent = document.querySelector('#createParent');
BackEnd = document.querySelector('#backEnd');
CreateParent.addEventListener('click', function(){
    BackEnd.innerHTML += '<li> <input type="text" value="Parent">  <button class="createChild">Create Child</button> <span class="closeIT">X</span> </li>'

})

BackEnd.addEventListener('click', function(e){
    //console.log(e.target.classList == 'closeIT');
    if(e.target.classList == 'closeIT'){
        closeBTN = e.target;
        li = closeBTN.parentElement;
        li.remove();

    }
    

    if(e.target.classList == 'createChild'){
        count = prompt('get Number of Rows');
        x = '';
        for(var i = 1; i<= count; i++){
            x += `<li> <input type="text" value="Child">  <button class="createGrandChild">Create Grand Child</button> <span class="closeIT">X</span> </li>`
        }
        makingBTN = e.target;
        li = e.target.parentElement;
        li.innerHTML += `<ul> ${x} </ul>`;
    }

    if(e.target.classList == '')
})