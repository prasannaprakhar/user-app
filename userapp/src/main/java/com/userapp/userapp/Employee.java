package com.userapp.userapp;

// Creating an entity Employee
public class Employee {

    public Employee() {}

    // Parameterized Constructor
    // to assign the values
    // to the properties of
    // the entity
    public Employee(
        Integer id, String name,
        String phnnum, String email)
    {

        super();

        this.id = id;

        this.name = name;

        this.phnnum = phnnum;

        this.email = email;

         
    }

     private Integer id;

     private String name;

     private String phnnum;

     private String email;

    // Overriding the toString method
    // to find all the values
    @Override
 public String toString()
    {

        return "Employee [id="
            + id + ", name="
            + name + ", phnnum="
            + phnnum + ", email="
            + email + "]";

         
    }

    // Getters and setters of
    // the properties
    public Integer getId()
    {

        return id;
    }

    public void setId(Integer id)
    {

        this.id = id;
    }

    public String getname()
    {

        return name;
    }

    public void setname(
        String name)
    {

        this.name = name;
    }

    public String getphnnum()
    {

        return phnnum;
    }

    public void setphnnum(
        String phnnum)
    {

        this.phnnum = phnnum;
    }

    public String getEmail()
    {

        return email;
    }

    public void setEmail(String email)
    {

        this.email = email;
    }
}

