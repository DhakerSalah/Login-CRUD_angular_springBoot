package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@SpringBootApplication
public class CrudApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}
	
	/*@Bean
    public CommandLineRunner demo(EmployeeRepository employeeRepository) {
        return (args) -> {
    		Employee e1 = new Employee("exemple", "exp", "exp@gmail.com");
            employeeRepository.save(e1);
            employeeRepository.findAll();
        };
    }*/

}
