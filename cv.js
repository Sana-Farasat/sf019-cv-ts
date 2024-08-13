#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
let ask = await inquirer.prompt({
    name: 'cv',
    type: 'input',
    message: chalk.blueBright('\n\nDo you want to make your CV?')
});
let userInput = ask.cv;
if (userInput === 'Yes' || userInput === 'yes' || userInput === 'YES' || userInput === 'Y' || userInput === 'y') {
    let cvInfo = await inquirer.prompt([
        {
            name: 'q1',
            type: 'input',
            message: chalk.blueBright('\n\nEnter your full name:')
        },
        {
            name: 'q2',
            type: 'number',
            message: chalk.blueBright('\n\nEnter your 6 digits contact number:'),
            validate: function (number) {
                if (/^\d{6}$/.test(number)) {
                    return true;
                }
            },
        },
        {
            name: 'q3',
            type: 'number',
            message: chalk.blueBright('\n\nEnter your age:'),
            validate: function (number) {
                if (/^\d{2}$/.test(number)) {
                    return true;
                }
            }
        },
        {
            name: 'q4',
            type: 'input',
            message: chalk.blueBright('\n\nEnter your email:')
        }
    ]);
    const academicQualifications = []; // Array to store multiple qualifications
    while (true) {
        const response = await inquirer.prompt([
            {
                name: 'degree',
                type: 'input',
                message: chalk.blueBright('\n\nEnter your qualification:'),
            },
            {
                name: 'university',
                type: 'input',
                message: chalk.blueBright('\n\nEnter the name of the university/college/school:'),
            },
            {
                name: 'graduationYear',
                type: 'input',
                message: chalk.blueBright('\n\nEnter the year of graduation/intermediate/matriculation:'),
            },
            {
                name: 'moreQualifications',
                type: 'confirm',
                message: chalk.blueBright('\n\nDo you want to add another academic qualification?'),
                default: false,
            },
        ]);
        // Push the current qualification to the array
        academicQualifications.push({
            degree: response.degree,
            university: response.university,
            graduationYear: response.graduationYear,
        });
        // Check if the user wants to add another qualification
        if (!response.moreQualifications) {
            break; // Exit the loop if user does not want to add more
        }
    }
    const skillsArray = [];
    while (true) {
        let userSkills = await inquirer.prompt([
            {
                name: 'skills',
                type: 'input',
                message: chalk.blueBright('\n\nEnter your skills with institute reference:')
            },
            { name: 'moreskills',
                type: 'confirm',
                message: chalk.blueBright('\n\nDo you want to add more skills?'),
                default: false
            }
        ]);
        skillsArray.push({
            Skills: userSkills.skills
        });
        if (!userSkills.moreskills) {
            break;
        }
    }
    console.clear();
    await writeWords(chalk.yellowBright('\n\t\t\t\t\t________________________'));
    await writeWords(chalk.yellowBright('\n\t\t\t\t\t   CURRICULUM VITAE   '));
    await writeWords(chalk.yellowBright('\n\t\t\t\t\t________________________'));
    await writeWords(chalk.greenBright('\n\nObjective:\n'));
    await writeWords(chalk.yellowBright(" \n To secure a challenging position in a dynamic organization where my skills in relevant field can contribute to the company's growth and success. \n "));
    await writeWords(chalk.greenBright(`\n Name: ${cvInfo.q1.charAt(0).toUpperCase() + cvInfo.q1.slice(1).toLowerCase()} \n`));
    await writeWords(chalk.yellowBright(`\n Contact Number: ${cvInfo.q2}\n`));
    await writeWords(chalk.greenBright(`\n Age: ${cvInfo.q3}\n`));
    await writeWords(chalk.yellowBright(`\n Email: ${cvInfo.q4}\n`));
    await writeWords(chalk.yellowBright.underline('\n Academic Qualifications:\n'));
    academicQualifications.forEach((qualification, index) => {
        console.log(chalk.greenBright(`\n Qualification ${index + 1}:`));
        console.log(chalk.yellowBright(`Degree/Certificate: ${qualification.degree}`));
        console.log(chalk.yellowBright(`University/College/School: ${qualification.university}`));
        console.log(chalk.yellowBright(`Year: ${qualification.graduationYear}`));
    });
    // Display the collected skills
    await writeWords(chalk.yellowBright.underline('\n Skills:\n'));
    skillsArray.forEach((userskill, index) => {
        console.log(chalk.greenBright(`\n${index + 1}: ${userskill.Skills}`));
    });
    await writeWords(chalk.yellowBright.underline('\nExtracurricular Activities:\n'));
    await writeWords(chalk.greenBright('\nRelevant clubs, organizations, or activities.\n'));
    await writeWords(chalk.yellowBright.underline('\nReferences:\n'));
    await writeWords(chalk.greenBright('\nShall be furnished upon request.\n'));
    console.clear();
    console.log(chalk.yellowBright('\n\t\t\t\t\t________________________'));
    console.log(chalk.yellowBright('\n\t\t\t\t\t   CURRICULUM VITAE   '));
    console.log(chalk.yellowBright('\n\t\t\t\t\t________________________'));
    console.log(chalk.greenBright('\n\nObjective:'));
    console.log(chalk.yellowBright("\nTo secure a challenging position in a dynamic organization where my skills in relevant field can contribute to the company's growth and success."));
    console.log(chalk.greenBright(`\n Name: ${cvInfo.q1.charAt(0).toUpperCase() + cvInfo.q1.slice(1).toLowerCase()})`));
    console.log(chalk.yellowBright(`\n Contact Number: ${cvInfo.q2}`));
    console.log(chalk.greenBright(`\n Age: ${cvInfo.q3}`));
    console.log(chalk.yellowBright(`\n Email: ${cvInfo.q4}`));
    console.log(chalk.yellowBright.underline('\n Academic Qualifications:'));
    academicQualifications.forEach((qualification, index) => {
        console.log(chalk.greenBright(`\n Qualification ${index + 1}:`));
        console.log(chalk.yellowBright(`\n Degree/Certificate: ${qualification.degree}`));
        console.log(chalk.yellowBright(`University/College/School: ${qualification.university}`));
        console.log(chalk.yellowBright(`Year: ${qualification.graduationYear}`));
    });
    // Display the collected skills
    console.log(chalk.yellowBright.underline('\n Skills:'));
    skillsArray.forEach((userskill, index) => {
        console.log(chalk.greenBright(`\n${index + 1}: ${userskill.Skills}`));
    });
    console.log(chalk.yellowBright.underline('\nExtracurricular Activities:'));
    console.log(chalk.greenBright('\nRelevant clubs, organizations, or activities.'));
    console.log(chalk.yellowBright.underline('\nReferences:'));
    console.log(chalk.greenBright('\nShall be furnished upon request.'));
    console.log(chalk.yellowBright('\n\t\t\t___________________________________________'));
    console.log(chalk.yellowBright('\t\t\t___________________________________________'));
}
//**************Function to show words on screen with the delay of 20ms*****************/
async function writeWords(words) {
    for (let char of words) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 20);
        });
    }
}
