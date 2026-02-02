# TodoCrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Todo CRUD App (Angular)
📝 Project Description
This is a Todo Management CRUD Application built using Angular.
It allows users to create, read, update, and delete todos using a clean and responsive UI.
API integration is done using JSONPlaceholder (mock API).

🚀 Features Implemented
✅ View all todos (User 1)
✅ View single todo by ID
✅ Create new todo
✅ Update todo (title & completion status)
✅ Delete todo
✅ Edit todo using modal popup
✅ UI updates instantly (no page refresh)
✅ Responsive card layout
✅ Styled using Tailwind CSS

🔗 API Endpoints Used
Action                Method              Endpoint
Get all todos         GET                 https://jsonplaceholder.typicode.com/users/1/todos
Get todo by ID        GET                 https://jsonplaceholder.typicode.com/todos/{id}
Create todo           POST                https://jsonplaceholder.typicode.com/todos
Update todo           PUT / PATCH         https://jsonplaceholder.typicode.com/todos/{id}
Delete todo           DELETE              https://jsonplaceholder.typicode.com/todos/{id}

⚠️ Note: JSONPlaceholder does not persist data. UI updates are handled locally.

🛠️ Tech Stack
Angular
TypeScript
Tailwind CSS
HTML
JSONPlaceholder API

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/todo-crud-app.git

2️⃣ Navigate to project folder
cd todo-crud-app

3️⃣ Install dependencies
npm install

4️⃣ Run the application
ng serve

5️⃣ Open in browser
http://localhost:4200

📂 Folder Structure 

src/
 └── app/
     ├── pages/
     │   └── todo-list/
     │       ├── todo-list.component.ts
     │       ├── todo-list.component.html
     │       ├── todo-list.component.css
     ├── services/
     │   └── todo.service.ts
Copy code

✅ Assignment Completion Status
✔ Angular project setup
✔ Routing configured
✔ Service-based API calls
✔ Clean folder structure
✔ CRUD operations implemented
✔ UI polished with Tailwind CSS

Author
Prathyusha V
Angular Developer (Beginner → Pro in progress 🚀)