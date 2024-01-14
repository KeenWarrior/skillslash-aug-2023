SELECT
salesman.salesman_id,
salesman.name,
salesman.city
customer.customer_id,
customer.name
FROM customer
INNER JOIN salesman
ON customer.city = salesman.city;