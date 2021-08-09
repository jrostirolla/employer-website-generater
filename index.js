//modules
const Initial = require('./assets/initialiser');
const HTML = require('./assets/template');

//node packages
const inquirer = require('inquirer');
const fs = require('fs');
const Template = require('./assets/template');


Initial()//.then((answers, employeeList, HTML) => {
//     // Filter function


//     //manager template
//         const manager = employeeList[0];
//         const managerName = manager[1];
//         const managerId = manager[2];
//         const managerEmail = manager[3];
//         const managerPhone = manager[4];
//         Template.mainTemplate;

//     //Engineer template
//     for (i = 0; i < engineerArray.length; i++) {
//         const engineer = engineerArray[i];
//         const engineerName = engineer[1];
//         const engineerRole = engineer[0];
//         const engineerId = engineer[2];
//         const engineerEmail = engineer[3];
//         const engineerGithub = engineer[4];
//     }

//     // Intern template
//     for (i = 0; i < internArray.length; i++) {
//         const intern = internArray[i];
//         const internName = intern[1];
//         const internRole = intern[0];
//         const internId = intern[2];
//         const internEmail = intern[3];
//         const internGithub = intern[4];
//     }

//     //TODO: rebuild this, but in the initialiser.js file

//     /*TODO: how to build this:
//         - use filter function to find the role tags and turn them into their
//         own arrays (one for engineers one for interns)

//         - THEN build a for loop, using the new arrays length as the "how long
//         to run" thing, then have the HTML build out the related HTML function in said loop
//         for as many times as it's there
//             - for (blah) {
//                 if (array > 1) {
//                     build shit
//                 } else {
//                     ...don't?
//                 }
//             }
//         - THEN have the whole thing write to the HTML file as it is
//     */

//   //  Template();
// })
