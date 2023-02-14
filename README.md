# simple-request-
a simple solution to make request
import js file into your proyect, and send use the sintaxis: 

## GET request
SMP.get("url", {param: 1, param2: 2}, function(data, status){ console.log(data, status); });
## POST request 
SMP.post("url", {param: 1, param2: 2}, function(data, status){ console.log(data, status); });
## PATCH request 
SMP.patch("url", {param: 1, param2: 2}, function(data, status){ console.log(data, status); });
## DELETE request
SMP.delete("url", function(data, status){ console.log(data, status); });
