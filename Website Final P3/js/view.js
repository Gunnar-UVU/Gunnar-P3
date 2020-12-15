
function renderTable(containerId, visitors) {
    if (localStorage.getItem("visitors")) {
        let data = localStorage.getItem("visitors")
        containerId.html(data)
    } else {
        let data1 = "<tbody><tr><th>Name</th><th>Address</th><th>Phone</th><th>Email</th><th>Id</th><th>Actions</th></tr>"
        containerId.html(data1);
        let data2 = ""
        for (person of visitors) {
            data2 += `<tr><td>${person.fullName}</td><td>${person.fullAddress}</td><td>${person.phone}</td><td>${person.email}</td><td display="none">${person.id}</td><td><button type="button" id="${person.id}" class="smallbutton" onClick="deleteVisitor(${person.id})">Delete</button><button type="button" id="${person.id}" class="smallbutton" onClick="editVisitor(${person.id})">Edit</button></td></tr>`
        };
        data2 += "</tbody></table>"
        containerId.append(data2);
        localStorage.setItem('visitors', data1+data2)
    }
};

function checkLocal() {
    if (localStorage.getItem("visitors")) {
        renderTable($("#myTable"), localStorage.getItem("visitors"))
    }
}
function showList() {
    $("#visitTable").show();
    $("#new").show();
    $("#formed").hide();
};

function showForm() {
    $("#visitTable").hide();
    $("#new").hide();
    $("#formed").show();
};

function clearForm() {
    $(':input','#myform')
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .prop('checked', false);
};
function preClear() {
    if (confirm("Are you sure you want to clear the form?")) {
        clearForm();
    };
};
function newVisitor() {
        showForm();
        clearForm();
};

function editVisitor(id) {
    confirm(`Editing visitor ${id}`);
}