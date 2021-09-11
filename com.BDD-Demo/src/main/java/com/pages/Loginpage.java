package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class Loginpage {
	WebDriver driver;
	public Loginpage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
@FindBy(id="email")
private WebElement username;

@FindBy(id="password")
private WebElement password;

@FindBy(xpath="//button")
private WebElement loginBtn;

public void loginfunction(String uname,String pass){
	username.sendKeys(uname);
	password.sendKeys(pass);
	loginBtn.click();
}

}
