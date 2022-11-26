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



