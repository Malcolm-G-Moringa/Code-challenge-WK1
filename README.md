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

## Challenge 1: Student Grade Generator
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 

## Challenge 1: Student Grade Generator
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 

## Challenge 2: Speed Detector 
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.\
***NB: Use KRA, NHIF, and NSSF values provided in the link below.***

https://www.aren.co.ke/payroll/taxrates.htm 

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


## Project Setup
The project contains 2 files: An index.js file and a README.md file. The index.js file contains three functions that act as the required programs for the challenge. To run the programs, one simply needs to call the function with the required arguments. The results will be printed to the console. To run the file, run **'node index.js'** in the terminal.

The functions are explained below:

1. gradeGenerator \
The gradeGenerator function takes in a value of a student's marks and logs the equivalent grade to the console.

2. speedDetector \
The speedDetector function takes in a value of a driver's speed. Based on the speed, if the speed is 70Km/hr or below, the function will log that the speed is ok. If the speed is above 70Km/hr, it will display how many points are deducted from the driver's license or whether the license is suspended.1 point is given after every 5Kms such that when the speed is 74, the points are 0 and 1 when at 75.

3. netSalaryCalculator \
The netSalaryCalculator function is used to log 5 values;Gross salary, NHIF deduction, NSSF deduction, paye and net pay of a person based on two inputs. The two inputs of the function are the basic salary of a person and the total value of the person's benefits e.g house allowance+car allowance.

---
### Authors
This project was contributed to by:
- [Malcolm Githuka](https://github.com/Malcolm-G-Moringa)
### License
The project is under ISC License