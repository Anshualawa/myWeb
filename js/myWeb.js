const url = './json/myData.json';
var data = '';

$(document).ready(function () {
    EmployeeDetails();
});

function EmployeeDetails() {
    let thead = '', tbody = '', tfooter = '', combine = '';;
    $.getJSON(url, function (responce) {
        data = responce.empDetails;
        for (let i = 0; i < data.length; i++) {
            tbody += '<tr><td>' + data[i].emp_id + '</td><td>' + data[i].first_name + '</td><td>' + data[i].last_name + '</td><td>' + data[i].age + '<td></tr>';
        }
        thead = '<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Age</th></tr>';
        combine = thead + tbody + tfooter;
        $('#stdDetail').html(combine);
    });
}

