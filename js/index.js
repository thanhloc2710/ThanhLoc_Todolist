
var taskList = [];
document.getElementById('click').onclick = function(){
    var id = randomId();
    var task = new Task(id, document.querySelector('#giaTri').value); 
    //task.taskName = document.querySelector('#giaTri').value;
    taskList.push(task);
    renderTaskList(taskList);
    console.log(taskList);
}

var randomId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

var xoaTask = function(task){
    for(var i = taskList.length - 1; i >= 0; i--){
        var xoa = taskList[i];
        if(xoa.id === task){
            taskList.splice(i, 1);
        }
        renderTaskList(taskList);
        console.log(taskList);
    }
}

var checkTask = function(task){
    for(var i = 0 ; i < taskList.length ; i++){
        var check = taskList[i];
        if(check.id === task){
            taskList[i].done = true;
        }
        renderTaskList(taskList);
    }
}

var renderTaskList = function (taskList) {
    var table ='';
    var table1 ='';
    for(var i = 0 ; i < taskList.length; i++){
        var task = taskList[i];
        if(task.done === false){
            console.log('aaa')
            table += `
                <div class="form-group task">
                    <p id="code">${task.taskName}</p>
                    <i onclick="xoaTask('${task.id}')" class="fa fa-trash-alt"></i>
                    <i onclick="checkTask('${task.id}')" id="btn-code" class="fa fa-check"></i>
                </div>
            `
        } else if(task.done === true){
            console.log('aaa')
            table1 += `
                <div class="form-group task">
                    <p id="code">${task.taskName}</p>
                    <i onclick="xoaTask('${task.id}')" class="fa fa-trash-alt"></i>
                    <i onclick="checkTask('${task.id}')" id="btn-code" class="fa fa-check"></i>
                </div>
            `
        }
        console.log(taskList);
    }
    document.getElementById('work-id').innerHTML = table;
    document.getElementById('work-id-done').innerHTML = table1;
}







