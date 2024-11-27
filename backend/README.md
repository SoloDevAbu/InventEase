# **Inventory Management System**

## **Overview**
The **Inventory Management System** is a backend API designed to help businesses efficiently manage their inventory across multiple warehouses. This system facilitates the addition and tracking of products, suppliers, and warehouse-specific stock levels.  

### **Key Role-Based Features**:
- **Admin**: Responsible for managing suppliers, managers, and creating warehouses. Admins oversee the entire inventory system.  
- **Warehouse Managers**: Manage a specific warehouse, including adding, updating, and removing products and stocks.  
- **Warehouse Staff**: Limited access to view products and stock levels.  

The system generates alerts for low-stock items and ensures streamlined operations in real-time for businesses.

---

## **Features**
- **Role-Based Access Control**  
  - Admin, Warehouse Managers, and Warehouse Staff have distinct permissions.  

- **Product Management**
  - Add, update, delete, and view products.
  - Categorize products for better organization.

- **Warehouse Operations**
  - Manage multiple warehouses with unique locations.
  - Assign managers and staff to specific warehouses.

- **Supplier Management**
  - Add, update, or remove suppliers.
  - Link suppliers to products for easy sourcing.

- **Stock Tracking**
  - Real-time stock updates at the warehouse level.
  - Alerts for low or out-of-stock products.

- **Scalability**
  - Designed to support growing businesses with multiple warehouses and extensive product catalogs.

---

## **API Endpoints**

### **Admin**
- `POST /admin/signup` – Signup a new admin.
- `PUT /admin` – Update admin information.

---

### **Products**
- `GET /products/:warehouseId` – Fetch all products.
- `POST /products/:warehouseId` – Add a new product.
- `PUT /products/:warehouseId/:id` – Update product details.
- `DELETE /products/:warehouseId/:id` – Delete a product.

---

### **Warehouses**
- `GET /warehouses` – Fetch all warehouses.
- `POST /warehouses` – Add a new warehouse.
- `PUT /warehouses/:id` – Update warehouse details.
- `DELETE /warehouses/:id` – Delete a warehouse.

---

### **Suppliers**
- `GET /suppliers` – Fetch all suppliers.
- `POST /suppliers` – Add a new supplier.
- `PUT /suppliers/:id` – Update supplier information.
- `DELETE /suppliers/:id` – Remove a supplier.

---

### **Managers**
- `GET /manager/:warehouseId` – Fetch the manager of a particular warehouse.
- `POST /manager/:warehouseId` – Add a new manager to a warehouse.
- `PUT /manager/:warehouseId` – Update manager information for a specific warehouse.
- `DELETE /manager/:warehouseId` – Delete the manager assigned to a warehouse.

---

### **Staffs**
- `GET /staffs/:warehouseId` – Fetch all staff members of a particular warehouse.
- `POST /staffs/:warehouseId` – Add a new staff member to a warehouse.
- `PUT /staffs/:warehouseId` – Update staff information for a specific warehouse.
- `DELETE /staffs/:warehouseId` – Remove staff members from a warehouse.

---

### **Stocks**
- `GET /stocks` – View stock levels across warehouses.
- `POST /stocks` – Add or update stock levels for a product.
- `PUT /stocks/:id` – Adjust stock levels for a specific product.
- `GET /stocks/low` – Fetch products with low stock levels.

---

## **Database Schemas**

### **1. Product Schema**
| Field         | Type       | Description                                |
|---------------|------------|--------------------------------------------|
| `name`        | String     | Name of the product.                       |
| `description` | String     | Details about the product.                 |
| `price`       | Number     | Price of the product.                      |
| `category`    | String     | Category to which the product belongs.     |
| `supplierId`  | ObjectId   | Reference to the supplier.                 |
| `warehouseId` | ObjectId   | Reference to the warehouse storing product.|

### **2. Warehouse Schema**
| Field      | Type       | Description                                 |
|------------|------------|---------------------------------------------|
| `name`     | String     | Name of the warehouse.                      |
| `location` | String     | Physical location of the warehouse.         |
| `managerId`| ObjectId   | Reference to the assigned warehouse manager.|

### **3. Stock Schema**
| Field         | Type       | Description                                |
|---------------|------------|--------------------------------------------|
| `productId`   | ObjectId   | Reference to the product.                  |
| `warehouseId` | ObjectId   | Reference to the warehouse storing stock.  |
| `quantity`    | Number     | Current stock level of the product.        |

### **4. Supplier Schema**
| Field         | Type       | Description                                |
|---------------|------------|--------------------------------------------|
| `name`        | String     | Name of the supplier.                      |
| `contactInfo` | String     | Contact information for the supplier.      |

### **5. Manager Schema**
| Field         | Type       | Description                                |
|---------------|------------|--------------------------------------------|
| `name`        | String     | Full name of the manager.                  |
| `email`       | String     | Email address for manager communication.   |
| `warehouseId` | ObjectId   | Reference to the managed warehouse.        |

### **6. Staff Schema**
| Field         | Type       | Description                                |
|---------------|------------|--------------------------------------------|
| `name`        | String     | Full name of the staff member.             |
| `email`       | String     | Email address of the staff member.         |
| `warehouseId` | ObjectId   | Reference to the warehouse they belong to. |

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB

### **Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/SoloDevAbu/inventory-management.git
   cd inventory-management
2. Install dependency
    ```bash
    npm install
