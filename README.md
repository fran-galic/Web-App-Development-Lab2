# Web App Development - Lab 2

🌐 **Check out the live version of the project here**: [View Web App Development Lab 2](https://web-app-development-lab2.onrender.com)

## Course Overview

The **Web App Development** course covers both client-side and server-side development, emphasizing web architectures, communication protocols, and building dynamic web applications. The course consists of two major lab assignments:

1. **Lab 1**: Focused on client-side development using HTML, CSS, and JavaScript.
2. **Lab 2**: Expands the project with server-side development using Node.js and Express.

Through this course, students learn to design user interfaces, manage data across client-server architectures, and implement both the front-end and back-end of web applications.

---

## Lab 2: Server-side Web Shop Application

### Overview

In **Lab 2**, the goal was to enhance the existing web shop from Lab 1 by adding server-side functionality. The server is built using **Node.js** and **Express**, allowing dynamic management of products, cart operations, and user sessions. The major improvements include:

- **Product and Cart Operations**: Managed dynamically through server-side routes.
- **User Sessions**: Implemented using sessions to track cart data for individual users.
- **RESTful API**: Created for handling product and cart-related requests.

### Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for handling routes and HTTP requests.
- **HTML/CSS/JavaScript**: For the front-end user interface.
- **Session Management**: To maintain user-specific data on the server.
- **LocalStorage**: Used in Lab 1 for cart persistence, now replaced by server-side sessions.

### Key Features

1. **Server-side Product Management**:
   - Products and categories are now fetched dynamically from the server.
   - The server handles requests to fetch products by category and display them.

2. **Cart Operations**:
   - Users can add, remove, or modify products in their cart.
   - Cart data is stored on the server and associated with user sessions.
   - Cart operations are now performed through server routes.

3. **Session Management**:
   - Sessions are used to maintain each user's cart across multiple visits.
   - Upon each request, the server checks the session data to load the user's cart.

## Project Structure

```bash
/root
├── /data  
│   └── products.js         # Contains product data
├── /node_modules           # Auto-generated folder for Node.js dependencies
├── /public                 # Publicly accessible static files
│   ├── /fonts              # Custom fonts
│   ├── /images             # Images for the site
│   ├── /styles             # CSS files
│       └── main.css        # Main stylesheet
├── /routes                 # Server-side routes
│   ├── cart.routes.js      # Routes for cart management
│   └── home.routes.js      # Routes for homepage and product categories
├── /views                  # Views rendered by the server
│   ├── home.ejs            # Homepage template
│   └── cart.ejs            # Cart page template
├── LICENSE                 # Project license
├── package.json            # Project metadata and dependencies
├── server.js               # Main server file, handles all backend logic
└── README.md               # Documentation of the project
```

### Server API

The server exposes the following API endpoints:

- `/home/getCategories`: Fetches all available product categories.
- `/home/getProducts/:id`: Fetches products for a given category.
- `/cart/add/:id`: Adds a product to the user's cart.
- `/cart/remove/:id`: Removes a product from the user's cart.
- `/cart/getAll`: Retrieves all items in the cart.

### Session Handling

The session is used to store cart data for each user. This ensures that each user’s cart is preserved even if they navigate away from the page or close their browser. Sessions are automatically created when a user accesses the site.

---

## Lab 1 Recap

The previous lab focused on building a simple web shop using client-side technologies such as HTML, CSS, and JavaScript. It implemented the following features:

- **Product browsing** based on categories.
- **Cart management** using LocalStorage.

In **Lab 2**, these client-side features were extended to a server-side environment using **Node.js** and **Express**, providing a more dynamic and scalable solution.

---

## Conclusion

Lab 2 marks the completion of the full-stack web shop application, combining both front-end and back-end technologies. Through this lab, students gained hands-on experience in server-side development, session management, and RESTful API design.

