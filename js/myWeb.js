const url = './json/myData.json';
var data = '';

$(document).ready(function () {
    EmployeeDetails();
});

function EmployeeDetails() {
    let thead = '', tbody = '', tfooter = '', combine = '', rthead = '', rtbody = '';
    $.getJSON(url, function (responce) {
        empData = responce.empDetails;
        empResp = responce.empResponsibility;
        for (let i = 0; i < empData.length; i++) {
            tbody += '<tr><td>' + empData[i].emp_id + '</td><td>' + empData[i].first_name + '</td><td>' + empData[i].last_name + '</td><td>' + empData[i].age + '</td></tr>';
            rtbody += '<tr><td>' + empResp[i].emp_id + '</td><td>' + empResp[i].role + '</td><td>' + empResp[i].join_date + '</td><td>' + empResp[i].exprience + '</td></tr>';

        }
        thead = '<tr class="table-dark"><th>ID</th><th>First Name</th><th>Last Name</th><th>Age</th></tr>';
        rthead = '<tr class="table-dark "><th>ID</th><th>Job Role</th><th>Joining Data</th><th>Exprience Year</th></tr>';
        combine = thead + tbody + tfooter;
        rcombine = rthead + rtbody;
        $('#empDetail').html(combine);
        $('#empResponsibility').html(rcombine);

    });
}

