# Code-challenge-WK1

## Description
This project is a code challenge provided by Moringa school.\
The following are the prerequisites for the project:

1. Create a repository on your GitHub account.
2. Use Javascript to wire down the solution.
3. Push the solution to the above repository once done.
4. Submit the repository link for grading.
5. Ensure your repository has a well written README.

The challenges are as described below:

## Challenge 1: Student Grade Generator (Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 

## Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

**For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.**

 

## Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.\
***NB: Use KRA, NHIF, and NSSF values provided in the link below.***

https://www.aren.co.ke/payroll/taxrates.htm 

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


## Project Setup

1. gradeGenerator \
The gradeGeneartor function takes in a value of a student's marks and logs the equivalent grade to the console.

2. speedDetector \
The speedDetector function takes in a value of a driver's speed. Based on the speed, if the speed is 70Km/hr or below, the function will log that the speed is ok. If the speed is above 70Km/hr, it will display how many points are deducted from the driver's license or whether the license is suspended.

3. netSalaryCalculator \
The netSalaryCalculator function is used to log 5 values;Gross salary, NHIF deduction, NSSF deduction, paye and net pay of a person based on two inputs. The two inputs of the function are the basic salary of a person and the total value of the person's benefits e.g house allowance+car allowance.
---
### Authors
This project was contributed to by:
- [Malcolm Githuka](https://github.com/Malcolm-G-Moringa)
### License
The project is under ISC License