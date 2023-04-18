package com.userapp.userapp;

import java.net.URI;
import org.springframework.beans
    .factory.annotation.Autowired;
import org.springframework.http
    .ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind
    .annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind
    .annotation.PostMapping;
import org.springframework.web.bind
    .annotation.RequestBody;
import org.springframework.web.bind
    .annotation.RequestMapping;
import org.springframework.web.bind
    .annotation.RestController;
import org.springframework.web.servlet
    .support.ServletUriComponentsBuilder;

// Import the above-defined classes
// to use the properties of those
// classes

// Creating the REST controller
@CrossOrigin
@RestController
@RequestMapping(path = "/employees")
public class EmployeeController {

    @Autowired
 private EmployeeDAO employeeDao;
     
        // Implementing a GET method
        // to get the list of all
        // the employees
 @GetMapping(
        path = "/employeeDetails",
        produces = "application/json")

    public Employees getEmployees()
    {

        return employeeDao
            .getAllEmployees();
    }
     
        // Create a POST method
        // to add an employee
        // to the list
        @CrossOrigin      
 @PostMapping(
        path = "/createEmployee",
        consumes = "application/json",
        produces = "application/json")

    public ResponseEntity<Object> addEmployee(
        @RequestBody Employee employee)
    {

        // Creating an ID of an employee
        Integer id
            = employeeDao
                .getAllEmployees()
                .getEmployeeList()
                .size()
            + 1;

        employee.setId(id);

        EmployeeDAO
            .addEmployee(employee);

        URI location
            = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(
                    employee.getId())
                .toUri();

           return ResponseEntity
            .created(location)
            .build();
    }
   // Create a POST method
   // to delete an employee
   // from the list
        @CrossOrigin 
    @PostMapping(
        path = "/deleteEmployee",
        consumes = "application/json",
        produces = "application/json")

    public ResponseEntity<Object> deleteEmployee(
        @RequestBody Employee employee, Employee id)
    {
      employeeDao.deleteEmployee(employee, id);
    return null;
    }

        
// displaying employee by id
@GetMapping("/search/{id}")
public Employee getEmployee(@PathVariable int id, Employee employee){
    return  employeeDao.searchEmployee(id,employee);
}
}
