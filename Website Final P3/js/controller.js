
$(document).ready(function() {
    initValidation();
});

$("logVisit").click(function loadVisitors() {
    showVisitors();
    renderTable($("#myTable"), visitors);
    showList();
});

function submitForm(visit) {
    var id = visitors.length + 1;
    let source = {search:visit[8].checked, friend:visit[9].checked, creator:visit[10].checked, youtube:visit[11].checked};
    let arrived = new Visitor (id, visit[0].value, visit[1].value, visit[2].value, visit[3].value, visit[4].value, visit[5].value, visit[6].value, visit[7].value, source);
    modelAddVisitor(arrived);
    renderTable($("#myTable"), visitors);
    showList();
};

function addVisitor(visitor) {
    clearForm();
    showForm();
};

function deleteVisitor(id) {
    modelDeleteVisitor(id);
    renderTable($("#myTable"), visitors);
    showList();
}
