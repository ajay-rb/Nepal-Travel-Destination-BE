### 🚀 **Startup Guide**  

Follow these steps to set up and run the **Nepali Travel Destinations API** on your local machine.  

---

### 🔹 **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/nepali-travel-backend.git
cd nepali-travel-backend
```

---

### 🔹 **2. Install Dependencies**
```sh
npm install
```

---

### 🔹 **3. Configure Environment Variables**  
Create a `.env` file in the root directory and add the following configurations:
```
PORT=5000
JWT_SECRET=your-secret-key
CORS_ORIGIN=*
```

---

### 🔹 **4. Initialize Database & Seed Data**
```sh
npm run migrate
```
This will:
- Create database tables.
- Seed initial travel destinations.
- Create a default admin user.

---

### 🔹 **5. Start the Server**
#### Development Mode (Auto-restarts on changes)
```sh
npm run dev
```

#### Production Mode
```sh
npm start
```

The server will start on `http://localhost:5000` (or the port defined in `.env`).

---

### 🔹 **6. Test API Endpoints**
Use **Postman**, **cURL**, or a browser to test the API:

#### ✅ Get All Destinations
```sh
GET http://localhost:5000/api/destinations
```

#### ✅ Login as Admin
```sh
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

#### ✅ Create a New Destination (Requires Authentication)
```sh
POST http://localhost:5000/api/destinations
Authorization: Bearer <your-token>
Content-Type: application/json

{
  "name": "Annapurna Base Camp",
  "description": "A beautiful trekking route in Nepal.",
  "image_url": "https://example.com/annapurna.jpg",
  "tags": "adventure,nature"
}
```

---