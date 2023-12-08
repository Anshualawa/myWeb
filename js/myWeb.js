function navBTN(param) {
    $('.btnName').removeClass('btnActive');
    $("." + param).addClass('btnActive');
}

function getJSON(url, successCallback) {
    $.getJSON(url, function (response) {
        successCallback(response);
    })
}

function getData() {
    getJSON('./json/myData.json', function (responce) {
        let records;
        responce.empDetails.forEach(element => {
            records += `
            <tr>
            <td>`+ element.emp_id + `</td>
            <td>`+ element.first_name + `</td>
            <td>`+ element.last_name + `</td>
            <td>`+ element.age + `</td>
            </tr>`;
        });
        $('.section-1 table tbody').html(records);
    });

}
function getVIP() {
    getJSON('/json/madhya_pradesh/english/vipcandidates_wonlead.json', function (responce) {
        let records;
        responce.results.forEach(element => {
            records += `<tr>
                        <td>`+ element.cand_name + `</td>
                        <td>`+ element.party_name + `</td>
                        <td>`+ element.const_name + `</td>
                        <td>`+ element.status + `</td>
                        </tr>`;
        });
        $('.section-3 table #english-records').html(records);
    })
    getJSON('/json/madhya_pradesh/hindi/vipcandidates_wonlead.json', function (responce) {
        let records;
        responce.results.forEach(element => {
            records += `<tr>
                        <td>`+ element.cand_name + `</td>
                        <td>`+ element.party_name + `</td>
                        <td>`+ element.const_name + `</td>
                        <td>`+ element.status + `</td>
                        </tr>`;
        });
        $('.section-3 table #hindi-records').html(records);
    })
}










var app = angular.module('myApp', ['ui.router']);

Directives('navBar', './directiv/nav-bar.html');

app.config(function ($stateProvider, $urlRouterProvider) {

    var dataBase = { name: 'database', url: '/database', templateUrl: './directiv/DataBase.html' }
    var dbms = { name: 'dbms', url: '/dbms', templateUrl: './directiv/dbms.html' }
    var codeLogic = { name: 'coding', url: '/coding', templateUrl: './directiv/coding-logic.html' }
    var account = { name: 'account', url: '/account', templateUrl: './directiv/account.html' }
    var help = { name: 'help', url: '/help', template: '<h2>Cooming Soon ....</h2>' }


    $stateProvider.state(dataBase);
    $stateProvider.state(dbms);
    $stateProvider.state(codeLogic);
    $stateProvider.state(account);
    $stateProvider.state(help);
});







function Directives(divName, tempName) {
    app.directive(divName, function () { return { templateUrl: tempName } });
}

const url = './json/myData.json';
var data = '';


function EmployeeDetails(url) {
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





$(document).ready(function () {
    EmployeeDetails(url);
    getData();
    getVIP()
});