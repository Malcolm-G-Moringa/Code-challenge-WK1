// The gradeGeneartor function takes in a value of a student's marks and logs the equivalent grade to the console.
function gradeGenerator (marks){
    let grade;
    // The if-else statements below are used to determine the grade based on the range that the student's marks fall into.
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
    // The else statements is used when a user inputs an invalid input(a number not between 0-100)
    else{
        console.error(`${marks} is not a valid input. Input should be a number between 1 and 100`);
        return;
    }

    console.log(`Having marks of ${marks} is equal to the grade: ${grade}`);
}

// The speedDetector function takes in a value of a driver's speed.
// Based on the speed, if the speed is 70Km/hr or below, the function will log that the speed is ok.
// If the speed is above 70Km/hr, it will display how many points are deducted from the driver's license or whether the license is suspended.
function speedDetector (speed){
    // Points variable is used to assign the number of points to a driver.
    let points;

    // First set of if-else statements determine if the input is valid and if it is above the speed limit, it determines how many points are given.
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

    // This set of if-else statements is used to log a message to the console based on a valid speed input.
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

// The netSalaryCalculator function is used to log 5 values;Gross salary, NHIF deduction, NSSF deduction, paye and net pay of a person based on two inputs.
// The two inputs of the function are the basic salary of a person and the total value of the person's benefits e.g house allowance+car allowance.
function netSalaryCalculator (basicSalary, benefits){
    // The first 4 if-statements are used to check that the values of the basic salary and benfits are valid inputs.
    if(typeof basicSalary != "number"){
        console.error(`${basicSalary} is not a valid input. Please input a positive number.`);
        return;
    }
    if(typeof benefits != "number"){
        console.error(`${benefits} is not a valid input. Please input a positive number.`);
        return;
    }
    if(basicSalary<0){
        console.error(`${basicSalary} is not a valid input. Please input a positive number.`);
        return;
    }
    if(benefits<0){
        console.error(`${benefits} is not a valid input. Please input a positive number.`);
        return;
    }


    const grossSalary = basicSalary + benefits;
    const nssf = calculateNSSF(grossSalary);
    const taxableIncome = grossSalary-nssf;
    const taxBeforeRelief = calculateTax(taxableIncome);
    const personalRelief = 2400;
    const nhif = calculateNHIF(grossSalary);
    const insuranceRelief = nhif*0.15;
    const taxes = taxBeforeRelief-(personalRelief+insuranceRelief);
    // The ternary statement below is used to check that taxes owed is not negative or less than 0.
    const paye = (taxes<=0) ? 0 : taxes;
    const netPay = grossSalary-(nssf + paye + nhif);

    // The result object is created purely for display purposes on the console.
    const result = {
        "Gross Salary" : grossSalary.toLocaleString(),
        "NHIF" : nhif.toLocaleString(),
        "NSSF" : nssf.toLocaleString(),
        "Paye" : paye.toLocaleString(),
        "Net Pay" : netPay.toLocaleString(),
    };

    // concole.table is used to tabulate the 5 values that are to be displayed.
    console.table(result);






    // The calculateNSSF function is used to calculate the nssf deduction of a person based on their gross salary.
    //The function returns the value of the nssf deduction.
    function calculateNSSF(grossSalary){
        let nssf;
        if(grossSalary<=6000){
            nssf = grossSalary*0.06;
        }
        else if(grossSalary>6000 && grossSalary<18000){
            nssf = (6000*0.06) + ((grossSalary-6000)*0.06);
        }
        else {
            nssf = 360+720;
        }
        return nssf;
    }

    // The calculateTax function calculates the tax to be payed based on a person's taxable income after nssf deductions.
    // The function returns the value of tax owed before reliefs.
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

    // The calculateNHIF function determines the NHIF deduction that a  person pays based on their gross salary.
    // The function returns the value of NHIF deduction that one pays.
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
}


// Below are some test cases for the three main functions.
gradeGenerator('1000');
speedDetector('q');
netSalaryCalculator(10000,2000);






