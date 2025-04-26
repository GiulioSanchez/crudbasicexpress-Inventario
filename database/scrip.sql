
CREATE DATABASE IF NOT EXISTS inventario;

USE inventario;

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(1) NOT NULL,
    proveedor VARCHAR(100) NOT NULL,
    precio DECIMAL(7,2) NOT NULL,
    stock INT NOT NULL
);


INSERT INTO productos (nombre, categoria, proveedor, precio, stock) VALUES 
('Teclado Mecánico', 'A', 'TechSupply', 350.50, 25),
('Monitor LED 24"', 'B', 'DisplayTech', 1200.75, 15);

SELECT * FROM productos;