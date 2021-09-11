package com.stepDefs;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pages.Loginpage;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepLoginPage {
	WebDriver driver;
	Loginpage lp=null;
	
	
	@Before
	public void setup(){
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
	    driver=new ChromeDriver();
	    lp=new Loginpage(driver);
	}
	@Before("@register")
	public void setup1(){
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
	    driver=new ChromeDriver();
	}
	@After
	public void tearDown(){
		driver.close();
	}
	

	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
		
	   driver.get("file:///E:/JAVA%20BY%20KIRAN/Software/Offline%20Website/Offline%20Website/index.html");
	}

	@When("^user enters username$")
	public void user_enters_username() throws Throwable {
	  driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");  
	}

	@When("^user enters password$")
	public void user_enters_password() throws Throwable {
	 driver.findElement(By.id("password")).sendKeys("123456");   
	   
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
	   driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user will be on dashboard page$")
	public void user_will_be_on_dashboard_page() throws Throwable {
	   Assert.assertEquals(driver.getTitle(), "JavaByKiran | Dashboard"); 
	

}
	@Then("^user should see a jbk logo$")
	public void user_should_see_a_jbk_logo() throws Throwable {
	   WebElement logo= driver.findElement(By.tagName("img"));
	   Assert.assertTrue(logo.isDisplayed());
	}
	
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		lp.loginfunction(uname, pass);
	}

	@Then("^user will verify \"([^\"]*)\"$")
	public void user_will_verify(String title) throws Throwable {
		 Assert.assertTrue(driver.getTitle().contains(title));
			
	}
	
	@Then("^user will capture error message$")
	public void user_will_capture_error_message() throws Throwable {
	   if (driver.getTitle().contains("Log in")){
		   WebElement emailError=driver.findElement(By.id("email_error"));
		   WebElement passError=driver.findElement(By.id("password_error"));
		   List<String>actMsg=new ArrayList<String>();
		   actMsg.add(emailError.getText());
		   actMsg.add(passError.getText());
		   List<String>expMsg=new ArrayList<String>();
		   expMsg.add("Please enter email as kiran@gmail.com");
		   expMsg.add("Please enter password 123456");
		   Assert.assertEquals(expMsg, actMsg);
	   }
	}
	
	
	
	
	
	
	
}