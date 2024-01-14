SELECT customer.cust_name, customer.city, orders.ord_no, orders.purch_amt
FROM orders
LEFT JOIN customer
ON orders.customer_id = customer.customer_id
WHERE orders.purch_amt BETWEEN 500 AND 2000;
