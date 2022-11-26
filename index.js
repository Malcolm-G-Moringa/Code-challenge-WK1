function gradeGenerator (marks){
    let grade;
    if(marks>79){
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
    else{
        grade = 'E';
    }

    console.log(grade);
    return grade;
}

function speedDetector (speed){
    let points;

    if(speed <=70){
        points = null;
    }
    else{
        points = Math.floor((speed - 70)/5);
    }

    if(points<=12 && points !==null){
        console.log('Points: '+ points);
    }
    else if(points >12){
        console.log('License suspended');
    }
    else{
        console.log('Ok');
    }
}

function netSalaryCalculator (basicSalary, benfits){
    const nssf = calculateNSSF(basicSalary);
    const taxableIncome = basicSalary-nssf;
    let taxBeforeRelief = calculateTax(taxableIncome);
    const personalRelief = 24000;
    NHIF = calculateNHIF(basicSalary);
}

function calculateNSSF(basicSalary){
    let nssf;
    if(basicSalary<=6000){
        nssf = basicSalary*0.06;
    }
    else if(basicSalary>6000 && basicSalary<18000){
        nssf = (6000*0.06) + ((basicSalary-6000)*0.06);
    }
    else {
        nssf = 2160;
    }
    return nssf;
}

function calculateTax(taxableIncome){
    let tax;
    if(taxableIncome<=24000){
        tax = taxableIncome*0.1;
    }
    else if(taxableIncome>24000 && taxableIncome<=32,333){
        tax = (24000*0.1)+((taxableIncome-24000)*0.25);
    }
    else{
        tax = (24000*0.1)+((32333-24000)*0.25)((taxableIncome-32333)*0.25);
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