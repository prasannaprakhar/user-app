package com.userapp.userapp;

import org.springframework
    .stereotype
    .Repository;

@Repository

// Class to create a list
// of employees
public class EmployeeDAO {

    private static Employees list
        = new Employees();

    // This static block is executed
    // before executing the main
    // block
    static
    {

        // Creating a few employees
        // and adding them to the list
        list.getEmployeeList().add(
            new Employee(
                1,
                "Swetanshu",
                "Das",
                "swetanshudas@gmail.com"));

        list.getEmployeeList().add(
            new Employee(
                2, "Prassanna",
                "Jha",
                "prassanna@gmail.com"));

        list.getEmployeeList().add(
            new Employee(
                3, "Mayank",
                "Hinoo",
                "mayankHinoo@gmail.com"));

         
    }

    // Method to return the list
    public Employees getAllEmployees()
    {

        return list;
    }

     
        // Method to add an employee
        // to the employees list
        public static void
        addEmployee(Employee employee)
    {
        list.getEmployeeList()
            .add(employee);
         
    }


}
