
let Template = () => {

let mainTemplate = `
<!DOCTYPE html>
<html>
<head>
    <title>Work Schedule</title>
    <meta charset="UTF-8">
<style>
    * {
        margin: 0px;
        padding: 0px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    h1 {
        font-size: 50px;
        text-align: center;
        padding: 40px;
        background-color: rgb(160, 52, 88);
        color: white;
    }

    body {
        background-image: url("./css/background_image_MOD.jpg");
    }

    .manager-card {
        text-align: center;
        background-color: whitesmoke;
        width: 300px;
        height: 330px;
        border: black 2px solid;
        margin: 50px;
        position: relative;
        left: 40%;
    }

    .card-list {
        list-style-type: none;
        padding-top: 20px;        

    }

    .card-list li {
        margin: 15px 0px 5px 11px;
        background-color: antiquewhite;
        width: 270px;
        text-align: left;
        font-size: 15px;
        border-style: double; 
        padding: 3px;
        font-weight: bolder;
    }

    .card-title {
        padding: 10px 0px 10px 0px;
        border: solid 1px grey;
        background-color: rgba(46, 170, 62, 0.959);
        color: whitesmoke;
        height: 100px;
        width: 299px;
    }

    h2 {
        font-size: 35px;
    }
    
    h4 {
        text-align: center;
        background-color: rgba(228, 228, 40, 0.301);
        font-size: 40px;
        padding: 10px;
        width: 350px;
        margin-left: 40%;
    }

    .employee-card {
        text-align: center;
        background-color: whitesmoke;
        width: 300px;
        height: 330px;
        border: black 2px solid;
        margin: 50px;
        position: relative;
        left: 5%;
        display: inline-block;
    }

    .employee-title {
        padding: 10px 0px 10px 0px;
        border: solid 1px grey;
        background-color: rgba(43, 128, 177, 0.959);
        color: whitesmoke;
        height: 100px;
        width: 299px;
    }

</style>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
<!-- Manager Window -->
${managerTemplate}

<h4>Employees</h4>
<!-- Engineer cards -->
${engineerTemplate}

<!-- Intern cards -->
${internTemplate}

    </main>

    <footer>
        <p></p>
    </footer>
</body>
</html>
`

const managerTemplate = `
<div class="manager-card ">
<div class="card-title">
    <h2>${managerName}</h2>
    <h3>Manager </h3>
</div>
<div>
    <ul class="card-list">
        <li>ID: <span>${managerId}</span></li>
        <li>Email: <span>${managerEmail}</span></li>
        <li>Phone: <span>${managerPhone}</span></li>
    </ul>
</div>
</div>
`

const engineerTemplate = `
<div class="employee-card ">
<div class="employee-title">
    <h2 id="employeeName">${engineerName}</h2>
    <h3 id="employeeRole">${engineerRole}</h3>
</div>
<div>
    <ul class="card-list">
        <li>ID: <span id="employeeId">${engineerId}</span></li>
        <li>Email: <span id="employeeEmail">${engineerEmail}</span></li>
        <li>Extra: <span id="employeeExtra">${engineerExtra}</span></li>
    </ul>
</div>
</div>
`

const internTemplate = `
<div class="employee-card ">
<div class="employee-title">
    <h2 id="employeeName">${internName}</h2>
    <h3 id="employeeRole">${internRole}</h3>
</div>
<div>
    <ul class="card-list">
        <li>ID: <span id="employeeId">${internId}</span></li>
        <li>Email: <span id="employeeEmail">${internEmail}</span></li>
        <li>Extra: <span id="employeeExtra">${internExtra}</span></li>
    </ul>
</div>
</div>
`
}


module.exports = Template;