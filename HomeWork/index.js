// ------------------ Not Finish Task---------------- //
var arrNotFinish = [];
document.getElementById('btnPlus').onclick = function () {
    var actNotFinish = new Activity();
    actNotFinish.nhapAcvitity = document.getElementById('inpText').value;
    arrNotFinish.push(actNotFinish);
    addNotFinishTask(arrNotFinish);
}
var addNotFinishTask = function (arrNF) {
    var listNotFinish = '';
    for (var index = 0; index < arrNF.length; index++) {
        var actNotFinish = arrNF[index];
        listNotFinish += `
            <div class="d-flex bg-white justify-content-between align-items-center p-2 mt-3" style="border-radius:20px; border:1px solid gray">
                <p class="m-0 px-2">${actNotFinish.nhapAcvitity}</p>
                <div class="icon d-flex">
                    <div class="icon__delete mr-3" style="cursor: pointer;" onclick="delNotFinish('${actNotFinish.nhapAcvitity}')">
                        <i class="fa fa-trash-alt"></i>
                    </div>
                    <div class="icon__check mr-2" style="cursor: pointer;" onclick="finish('${actNotFinish.nhapAcvitity}')">
                        <i class="fa fa-check-circle"></i>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('notFinish').innerHTML = listNotFinish;
}
var delNotFinish = function(Acvitity){
    for(var index = arrNotFinish.length -1; index >=0; index--){
        var actNotFinish = arrNotFinish[index];
        if(actNotFinish.nhapAcvitity === Acvitity){
            arrNotFinish.splice(index,1);
        }
    }
    addNotFinishTask(arrNotFinish);
}

// ------------------ Finish Task---------------- //
var arrFinish = [];

var finish = function(Acvitity){
    delNotFinish(Acvitity);
    var actFinish = new Activity();
    actFinish.nhapAcvitity = Acvitity;
    arrFinish.push(actFinish);
    addFinishTask(arrFinish);
}
var addFinishTask = function (arrF) {
    var listFinish = '';
    for (var index = 0; index < arrF.length; index++) {
        var actFinish = arrF[index];
        listFinish += `
            <div class="d-flex bg-white justify-content-between align-items-center p-2 mt-3" style="border-radius:20px; border:1px solid gray">
                <p class="m-0 px-2" style="color:green; font-weight: bold;">${actFinish.nhapAcvitity}</p>
                <div class="icon d-flex">
                    <div class="icon__delete mr-3" style="cursor: pointer;" onclick="delFinish('${actFinish.nhapAcvitity}')">
                        <i class="fa fa-trash-alt"></i>
                    </div>
                    <div class="icon__check mr-2" style="cursor: pointer; color: green">
                        <i class="fa fa-check-circle"></i>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('finish').innerHTML = listFinish;
}
var delFinish = function(Acvitity){
    for(var index = arrFinish.length -1; index >=0; index--){
        var actFinish = arrFinish[index];
        if(actFinish.nhapAcvitity === Acvitity){
            arrFinish.splice(index,1);
        }
    }
    addFinishTask(arrFinish);
}