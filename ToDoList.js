function AddTask(){
    var item=document.getElementById("txtAddItems").value;
    if(item.length==0){
        document.getElementById("error").innerHTML="Enter The Task"
    }
    else{
        
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#txtAddItems').value}
                </span>
                <button id="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var currentTask=document.querySelectorAll("#delete")
        for(var i=0;i<currentTask.length;i++){
            currentTask[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        document.getElementById("error").innerHTML=""   
    }
}