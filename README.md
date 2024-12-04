# Playwright Test Automation Project helloagain -Chamath Fernando

This project is built using the **Playwright Framework** and **TypeScript**. The **IDE** used is **VSCode**.

## Project Structure

The project follows the **Page Object Model (POM)** design pattern and is organized into 3 distinct layers:

1. **Page Object Layer**  
   Contains all the page objects representing various web pages.  
   Files:  
   - `loginPage.ts`
   - `dashBoardPage.ts`
   - `userDetailsPage.ts`

2. **Test Layer**  
   Contains the test specifications where tests are written.  
   File:  
   - `editUpdateCustomerDetailsTest.spec.ts`

3. **Data Layer**  
   Contains the test data used for running the tests.  
   File:  
   - `TestData.json`

---

## Preconditions Before Running the Test Case

Follow the steps below to set up your environment before running the tests.

### 1. Install **Node.js**
   Download and install Node.js from the official website:  
   [How to Install Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

### 2. Install **VSCode IDE**
   Download and install VSCode from the official website:  
   [How to Install VSCode](https://code.visualstudio.com/docs/setup/windows)

### 3. Clone the Project Repository
   Clone the repository using Git
   git clone https://github.com/chamathf/Test_Assignment_Playwright_helloagain.git

### 4. Navigate to the Project Directory
   Open the project folder in VSCode.

### 5. Install npm Dependencies
    npm install
    
### 6. Install Playwright
    npm install playwright

##  How to Run the Test Case

### 1. Headless Mode
   You can run the test in headless mode (without opening a browser window) using the following command:
   
   npx playwright test -g "Test 1: Validate Edit & Update First Name In User Details"

   ### OR

   Click Playbutton in Test File 

   ![image](https://github.com/user-attachments/assets/7b988166-de73-41f5-a0e4-02112f6ca815)

### 2. Headed Mode
   To run the test in headed mode (with the browser UI visible), use this command:
 
   - npx playwright test --project=chromium --headed -g "Test 1:Validate Edit & Update First Name In User Details"

   if you need to run in firefox browser

   npx playwright test --project=firefox --headed -g "Test 1:Validate Edit & Update First Name In User Details"


## NOTE
   These test case run on chrome and firefox and Passwed without any issues
   Chrome Version=  131.0.6778.86
   Firefox Verison = 133.0
   
