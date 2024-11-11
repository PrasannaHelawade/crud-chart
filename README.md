# crud-chart
dynamic Product Management Dashboard
Prerequisites :

Make sure you have Node.js installed 
npm install -g @angular/cli

Clone or Download the Project => Navigate to the Project Folder => Install Dependencies: 
npm install
npm install primeng
npm install primeicons
npm install @swimlane/ngx-charts

Serve the Application:
ng serve
This will compile the application and serve it locally. http://localhost:4200


1. Add/Edit Product
Clicking the Add Product button opens a dialog where you can fill in product details (name, price, and category).
If you edit an existing product, its details are pre-filled in the form.
After filling out the form and clicking Save, the product is either added to the list or updated if it already exists.
Validation is applied to ensure fields are correctly filled before submitting.

2. Product Table
Displays a list of products with Name, Price, and Category.
The table supports:
Sorting by columns (Name, Price, Category).
Pagination: Displaying 5 products per page, with options to change the number of items per page.
Filtering: Allows searching across all columns.
Actions: Each product row has two action buttons:
Edit: Opens the form with the product data pre-filled for editing.
Delete: Removes the product from the list.

3. Bar Chart Visualization
Displays a vertical bar chart showing the total price for each product category.
As products are added, updated, or deleted, the chart dynamically updates to reflect the latest data.

This project provides a simple, functional CRUD system for managing products, with real-time updates reflected in both a data table and a bar chart. The usage of PrimeNG for the UI components (like buttons, tables, and dialogs) and ngx-charts for the charting gives a polished and interactive experience.

Attached Images : 
Table with Chart
![image](https://github.com/user-attachments/assets/80c2e8dd-6054-432e-9b78-596272b5c900)

performing sorting operation 
![image](https://github.com/user-attachments/assets/6ee4ef3b-081b-4be7-8f58-de53e8402ed4)

pagination and pagesize option 
![image](https://github.com/user-attachments/assets/8f18a25e-ec18-409c-abcf-1a1a9631670f)

chart with label
![image](https://github.com/user-attachments/assets/c287514f-4dc1-42e3-bf34-66d1ddcaca2b)

dialog box with validation 
![image](https://github.com/user-attachments/assets/22fb6f8e-22b0-4519-820e-c10669757b13)

![image](https://github.com/user-attachments/assets/79c4205b-d8d1-4ef9-b19e-b97e56a8eb65)






