# Code-challenge-WK1

## Description
This project is an application created for a code challenge provided by Moringa school.\
The following are the prerequisites for the project:

1. Create a repository on your GitHub account.
2. Use Javascript to wire down the solution.
3. Push the solution to the above repository once done.
4. Submit the repository link for grading.
5. Ensure your repository has a well written README.

The challenges are as described below:

### Challenge 1: Student Grade Generator
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 

### Challenge 1: Student Grade Generator
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 

### Challenge 2: Speed Detector 
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.\
***NB: Use KRA, NHIF, and NSSF values provided in the link below.***

https://www.aren.co.ke/payroll/taxrates.htm 

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


## Project Setup

### Getting Started
In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following: (Windows 7+, Linux, Mac OS)
- nodejs 16+

### Installation

The installation steps below are described for a linux machine.\
To use this repo on your machine requires some simple steps

#### Alternative One
- Open a terminal / command line interface on your computer

- Clone the repo into your folder of choice by using the following:\
  `git clone https://github.com/Malcolm-G-Moringa/Code-challenge-WK1.git`

- Change directory to the repo folder:\

  `cd Code-challenge-WK1`
- (Optional) Open it in Visual Studio Code

  `code .`
- (Alternate Option) Open it in any editor of your choice.

### Alternative Two
- On the top right corner of this page there is a button labelled Fork.

- Click on that button to fork the repo to your own account.

- Take on the process in Alternative One above.

- Remember to use your username when cloning.

`git clone https://github.com/your-username-here/Code-challenge-WK1.git`

## Running The Application
To run the application simply run the following command in the terminal:\
  `node index.js`

The main file in the application is the index.js file and in it has three main functions which are described below:

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