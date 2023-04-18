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
                "87878899",
                "swetanshudas@gmail.com"));

        list.getEmployeeList().add(
            new Employee(
                2, "Prassanna",
                "887674939838",
                "prassanna@gmail.com"));

        list.getEmployeeList().add(
            new Employee(
                3, "Mayank",
                "838089983938",
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

       // Method to delete an employee
        // from the employees list
        public void
        deleteEmployee(Employee employee, Employee id)
    {
        int newid = employee.getId() - 1;
       
        list.getEmployeeList().remove(
            newid);       
    }

    // Method to search an employee
        // from the employees list
        public 
        Employee searchEmployee(int id,Employee employee)
    {
        int newid = employee.getId() -1;
        list.getEmployeeList().get(newid);
        return  list.getEmployeeList().get(newid);
    }


}
