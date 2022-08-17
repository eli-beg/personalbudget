# ![Optinal Text](/readmeImages/pigread.jpg)   pBudgetApp





#### Manage your personal budget, track your incomes and record your expenses 🚀

## Table of Contents
1. [General Info](#1-General-Info)
2. [Getting Started](#installation)
3. [Project Structure and Funcionalities](#project-structure-and-funcionalities)
4. [Technologies](#technologies)
5. [Motivation](#5-Motivation)

_______________________________________________________________________________


## 1-General Info

This is a project in which a SPA is developed to manage the personal budget.

It contains:

- Registration form and user login to be able to register their operations.
- Forms to register the transactions, which can be Income or Expenses, and the detail that: "concept", " amount" and "date".
-In the case of "Expenses", the registered operations can be categorized, creating categories and adding them as characteristics of the operation. Graphic visualization of categories and number of registered transactions of each one is added.
-List of registered operations with data analysis: ordering (by "date" or "amount", ascending or descending), and filters according to "type of transaction" or "category" of expenses.
- Visualization of total amounts of "Incomes", "Expenses" and "Total Balance".


_______________________________________________________________________________


## 2-Getting Started

 To get a local copy up and running follow these simple example steps.

## Prerequisites
  - NodeJs (^16.17.0)
  - PostgreSQL

## Installation

1. Clone the repo
 - Navigate to the directory taht you would like to clone the repository and create a local copy on your machine using this command:
  
    ``` git clone https://github.com/eli-beg/personalbudget.git```
 
2. Create an .env file in the root of the Api folder and add the database username and password values.

   ``` 
    DB_USER =
    DB_PASSWORD =
    DB_HOST = localhost
    SECRET= '1234'  ```

3. From the api folder install NPM packages

    ``` npm install ```
  
4. Create database called "personalbudget"

5. From the client folder install the npm packages

   ``` npm install ```
6. To start the apirest go to the Api folder and run 

    ```npm start```
7. To start the client application go to the client folder and run 

    ```npm start```

- The database will be running on the port that your computer has configured (by default 5450)
- The client application runs on port 3000



_______________________________________________________________________________


## 3-Project Structure and Funcionalities

## Frontend:

### Welcome Screen

![Optinal Text](/readmeImages/welcomescreen.jpg)

- Welcome message
- User login to enter the home
- User register

_______________________________________________________________________________

### Starting Board

 ### Dashboard

  ![Optinal Text](/readmeImages/dashboard.jpg)

  
 - Totals area: each card shows the totals of "Incomes", "Expenses" and their "Balance"
 - Table with list of the last 10 transactions. Among the functionalities it contains:
    - Ascending and descending order according to "date" or "amount"
    - "Transaction Type" filters ("Incomes", "Expenses" or "All") and "Categories" filter.
    - Icon to edit the transaction through a controlled form. The "concept", "amount", "date" and in the expenses the assigned "category" may be modified
    - Icon to delete a transaction

### Sidebar
 - pBudgetApp logo
 - Button to redirect to the dashboard
 - Dropdown menu to navigate:
    - Transactions:
      - Table to visualize expenses
      - Table to visualize incomes
      - Table to visualize all transactions
      - Form to create new transactions, you can assign:
        - Transaction type
        - Concept
        - Amount
        - Date
        - Categories(if transaction type is an expense)
    - Categories:
      - Visualization of all the categories created:   
        - Transaction quantity donut chart by category
        - Table of all categories. Among the functionalities it contains:
           - Name
           - Number of transactions
           - Icon to edit a category and be able to modify its name
           - Icon to delete a category
      - Create category:
        - Form to create a category assign it the name
  - Button to create a new transaction
  

![Optinal Text](/readmeImages/allcategories.jpg)        
            
### Header
 
  - Welcome message
  - Avatar and settings icon for: logout and delete user
  

_______________________________________________________________________________

## Database:

A relational database model is used with the following entities and attributes:


![Optinal Text](/readmeImages/Diagram.jpg)


	


### Relaciones

Relationships between tables are 1-to-many:

![Optinal Text](/readmeImages/relations.jpg)



_______________________________________________________________________________

## Backend:

Server on Node/express with the following routes
 
 Authentication is validated with a middleware.
  
 ### User

 -  POST /user/create-user:
    - Create a user with firstname, lastname, email, password, and status "active". Returns the data of the new user created. 
 - POST  /user/login-user:
   - With email and password it validates if the data entered coincides with that stored in the database. If so, it returns user data such as: id, email, firstname and lastname, and a token generated by jsonwebtoken to maintain the user's session.          
   - If the email or password are not correct, it returns the corresponding message: "invalid email or password" 
 - POST  /user/delete-user:
   - With id it validates in the database. If so, it update the user status going from "active to "inactive". 

  ### Transaction

 -  POST /transaction/create-transaction:
    - Creates the transaction with the registered information and the user id: type, concept, amount, date, status: "active", and userId. If it has a category, assign categoryId. Returns the created transaction.
    - If the user is not verified or the transaction is not created, it returns the error code and corresponding message.

 - GET /transaction/all-transactions:
   - Searches all the transactions corresponding to that user and that its status is "active". Returns all transactions, income, expenses, and also the sum of income, expenses and final balance.          
  
   - GET /transaction/last-ten-transactions:
   - Searches the last ten transactions created corresponding to that user and that its status is "active". Returns the last ten transactions, and the count of all transactions actives. 

 - PUT /transaction/update-transaction:
   - Edit attributes of the transaction such as: concept, amount, date or category. Returns the edited transaction.      
 
 - PUT /transaction/delete-transaction
   - Looks for the transaction to delete and performs an update, modifies its status going from "active to "inactive". If successful, it displays a message "Transaction has been removed!"
  
 - GET /transaction/get-number-of-transactions-by-category
   - Search all categories of the same. Then count for each category how many transactions it has. Return all the categories of the user and the counter of each one.
   

  ### Category

-  POST /category/create-category
   - Create the category with a name, status: "active" and the corresponding userId of the user. Returns the new category
-  GET /category/get-categories
    - Find all user categories that have status: "active". Return all categories
-  PUT /category/update-categories
    - Search for the category and edit the name of it. Returns the edited category
-  PUT /category/delete-categories
    - Search for the category and modify its status from "active" to "inactive". Returns the message: "The category has been removed"
    

_______________________________________________________________________________
							
## 4-Technologies 🛠
 
 ### Reactjs
 ### Material UI
 ### Express
 ### Sequelize-Postgresql
 
_______________________________________________________________________________

## 4- Bonus: Motivation 🚀

This was a project carried out as a requirement to enter a bootcamp. Beyond the objective, the main goal is to solidify knowledge, learn new ones and grow day by day in the world of web programming. Thank you for reading! 😊