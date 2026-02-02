Todo CRUD APP (Angular)
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