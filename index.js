function gradeGenerator (marks){
    let grade;
    if(marks>79 && marks<=100){
        grade = 'A';
    }
    else if(marks >=60 && marks<=79){
        grade = 'B';
    }
    else if(marks >=50 && marks <=59){
        grade = 'C';
    }
    else if(marks >=40 && marks <=49){
        grade = 'D';
    }
    else if(marks<40 && marks >=0){
        grade = 'E';
    }
    else{
        console.error(`${marks} is not a valid input. Input should be a number between 1 and 100`);
        return;
    }

    console.log(`Having marks of ${marks} is equal to the grade: ${grade}`);
}

function speedDetector (speed){
    let points;

    if(speed <=70 && speed>0){
        points = null;
    }
    else if(speed>70){
        points = Math.floor((speed - 70)/5);
    }
    else{
        console.error(`${speed} is an invalid input.`);
        return;
    }

    if(points<=12 && points !==null){
        console.log('Points: '+ points);
    }
    else if(points >12){
        console.log('License suspended');
    }
    else{
        console.log('That speed is OK!');
    }
}

function netSalaryCalculator (basicSalary, benefits){
    if(basicSalary.)
    const grossSalary = basicSalary + benefits;
    const nssf = calculateNSSF(grossSalary);
    const taxableIncome = grossSalary-nssf;
    const taxBeforeRelief = calculateTax(taxableIncome);
    const personalRelief = 2400;
    const nhif = calculateNHIF(grossSalary);
    const insuranceRelief = nhif*0.15;
    const taxes = taxBeforeRelief-(personalRelief+insuranceRelief);
    const paye = (taxes<=0) ? 0 : taxes;
    const netPay = grossSalary-(nssf + paye + nhif);

    const result = {
        "Gross Salary" : grossSalary.toLocaleString(),
        "NHIF" : nhif.toLocaleString(),
        "NSSF" : nssf.toLocaleString(),
        "Paye" : paye.toLocaleString(),
        "Net Pay" : netPay.toLocaleString(),
    };

    console.table(result);
}

gradeGenerator('1000');
speedDetector('q');
netSalaryCalculator(100000,10);



function calculateNSSF(basicSalary){
    let nssf;
    if(basicSalary<=6000){
        nssf = basicSalary*0.06;
    }
    else if(basicSalary>6000 && basicSalary<18000){
        nssf = (6000*0.06) + ((basicSalary-6000)*0.06);
    }
    else {
        nssf = 360+720;
    }
    return nssf;
}

function calculateTax(taxableIncome){
    let tax = 0.01;
    if(taxableIncome<=24000){
        tax = taxableIncome*0.1;
    }
    else if(taxableIncome>24000 && taxableIncome<=32,333){
        tax = (24000*0.1)+((taxableIncome-24000)*0.25);
    }
    else{
        tax = (24000*0.1)+((8333)*0.25)+((taxableIncome-32333)*0.3);
    }
    return tax;
}

function calculateNHIF(pay){
    let deduction;
    if(pay<=5999){
        deduction = 150;
    }
    else if(pay>=6000 && pay<8000){
        deduction = 300;
    }
    else if(pay>=8000 && pay<=11999){
        deduction = 400;
    }
    else if(pay >= 12000 && pay <= 14999){
        deduction = 500;
    }
    else if(pay >= 15000 && pay <= 19999){
        deduction = 600;
    }
    else if(pay >= 20000 && pay <= 24999){
        deduction = 750;
    }
    else if(pay >=25000 && pay <=29999){
        deduction = 850;
    }
    else if(pay >=30000 && pay <= 34999){
        deduction = 900;
    }
    else if(pay >= 35000 && pay <= 39999){
        deduction = 950;
    }
    else if(pay >= 40000 && pay <= 44999){
        deduction = 1000;
    }
    else if(pay >= 45000 && pay <= 49999){
        deduction = 1100;
    }
    else if(pay >= 50000 && pay <= 59999){
        deduction = 1200;
    }
    else if(pay >= 60000 && pay <= 69999){
        deduction = 1300;
    }
    else if(pay >= 70000 && pay <= 79999){
        deduction = 1400;
    }
    else if(pay >= 80000 && pay <= 89999){
        deduction = 1500;
    }
    else if(pay >= 90000 && pay <= 99999){
        deduction = 1600;
    }
    else{
        deduction = 1700;
    }

    return deduction;
}






// function menu(){
//     console.log('\033[2J');
//     // console.clear();
//     const readline = require("readline");

//     const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     });

//     console.log('\t\tMain Menu');
//     console.log('1. Grade Generator');
//     console.log('2. Speed Detector ');
//     console.log('3. Calculate Net Salary');
//     rl.question("\nPick the program you want to run: ", function (answer) {
//         switch(answer){
//             case '1':
//                 rl.close();
//                 gradeGeneratorMenu();
//                 break;
//             case '2':
//                 speedDetectorMenu();
//                 break;
//             case '3':
//                 netSalaryCalculatorMenu();
//                 break;
//             default:
//                 console.log('Please select a valid option');
//         }
//         });
 
// }

// function gradeGeneratorMenu(){
//     const readline = require("readline");

//     const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     });

//     rl.question('Please input the marks you wish to check (Input "q" for main menu): ',marks => {
//         if(marks =='q' || marks=='Q'){
//             rl.close();
//             loop = 0;
//             menu()
//         }
//         else{
//             gradeGenerator(marks);
//             rl.close();
//         }
//     });
// }


// function speedDetectorMenu(){
//     const readline = require("readline");

//     const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     });

//     rl.question('Please input speed of the driver (Input "q" for main menu): ',speed => {
//         if(speed =='q' || speed=='Q'){
//             rl.close();
//             menu()
//         }
//         else{
//             speedDetector(speed);
//             rl.close();
//         }
//     });
// }

// function netSalaryCalculatorMenu(){
//     const readline = require("readline");

//     const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     });

//     let basicSalary;
//     let totalBenefits;
//     // rl.question('Please input the basic salary (Input "q" for main menu): ',salary => {
//     //     if(salary =='q' || salary=='Q'){
//     //         rl.close();
//     //         menu()
//     //     }
//     //     else{
//     //         basicSalary = salary;
//     //         rl.pause();
//     //     }
//     // });
//     // rl.question('Please input the total value of benefits (Input "q" for main menu): ',benefits => {
//     //     if(salary =='q' || salary=='Q'){
//     //         rl.close();
//     //         menu()
//     //     }
//     //     else{
//     //         totalBenefits = benefits;
//     //         netSalaryCalculator(basicSalary,totalBenefits);
//     //         rl.close();
//     //     }
//     // });

//     console.log('Please input the basic salary (Input "q" for main menu): ');
//     rl.on('line', (line) => {
//         console.log(`Received: ${line}`);
//     });
//     console.log('Please input the total value of benefits (Input "q" for main menu): ');
//     rl.on('line', (line) => {
//         console.log(`Received: ${line}`);
//     });
// }
// menu();