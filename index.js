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