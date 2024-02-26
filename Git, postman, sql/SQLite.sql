--1
SELECT * from producto where descripcion = ''

--2
SELECT * FROM Venta
WHERE fecha <= NOW() - INTERVAL 1 DAY;

--3
SELECT estado,COUNT(*) AS cantidad
FROM Venta
GROUP BY estado;

--4
SELECT v.id_venta, v.fecha, v.monto_total FROM Venta v
JOIN 
    Cliente c ON v.id_cliente = c.id_cliente
WHERE 
    c.email = 'a@a' AND
    v.monto_total > Y;


