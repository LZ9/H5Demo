function checkCarNo() {
    var element = document.getElementById("carNo").value;
    if (!element.match("-")) {
        alert("不是番号");
    }else {
        alert("滴 学生卡");
    }
}