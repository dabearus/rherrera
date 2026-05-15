CREATE DATABASE checador;
GO

USE checador;
GO

CREATE TABLE employees (
    employee_id INT IDENTITY(1,1) PRIMARY KEY,
    employee_code VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    pin VARCHAR(10),
    department VARCHAR(100),
    active BIT DEFAULT 1,
    created_at DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE punches (
    punch_id INT IDENTITY(1,1) PRIMARY KEY,
    employee_id INT NOT NULL,
    punch_type VARCHAR(20),
    punch_time DATETIME DEFAULT GETDATE(),
    latitude DECIMAL(10,7) NULL,
    longitude DECIMAL(10,7) NULL,
    device_name VARCHAR(200) NULL,
    CONSTRAINT FK_punch_employee FOREIGN KEY (employee_id)
    REFERENCES employees(employee_id)
);
GO

CREATE TABLE shifts (
    shift_id INT IDENTITY(1,1) PRIMARY KEY,
    shift_name VARCHAR(100),
    start_time TIME,
    end_time TIME,
    tolerance_minutes INT DEFAULT 10
);
GO
