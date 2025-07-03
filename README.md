# Learn_Mode

## 1. Project setup and structure

1. **Initialize project:**
   - Clone the repository:
     ```
     git clone https://github.com/aditya-nv-06/Learn_Mode.git
     ```
   - Navigate into it:
     ```
     cd Lear_Mode
     ```
2. **Backend (Node.js/Express.js):**
   - Install dependencies:
     ```
     npm install
     ```
     - **express:** Web framework.
     - **mongoose:** MongoDB object modeling.
     - **cors:** Enable Cross-Origin Resource Sharing.
     - **body-parser:** Parse request bodies.
     - **dotenv:** Load environment variables.
     - **jsonwebtoken:** For authentication (JWT).
     - **bcryptjs:** For password hashing.
       
   **Project Structure:**
     ``` bash
     Learn_Mode/
     ├──backend/
     │   └──controllers/
     │   │   └──CourseControll.js
     │   │   └──UserControl.js
     │   │   └──VideoControl.js
     │   └──db/
     │   │   └──connect.js
     │   └──model/
     │   │   └──Course.js
     │   │   └──User.js
     │   │   └──Video.js
     │   └──routes/
     │       └──Courseroute.js
     │       └──Userroute.js
     │       └──Videoroute.js
     │       └── ...
     ├──frontend/
     │    └──src/
     │       └──components/
     │       └──index.html
     │       └──tailwind.config.js
     │       └──vite.config.js
     ├──model
     ```
     
  
