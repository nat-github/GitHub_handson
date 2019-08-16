package Cucumber_Selenium;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.DataTableRow;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class StepDefinitions {
    WebDriver driver;

    @Given("^that i am on the shopping website$")
    public void that_i_am_on_the_shopping_website() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.print("Given");
        System.setProperty("webdriver.chrome.driver","C:\\Driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.google.com");
    }
    @When("^i add an item to the basket$")
    public void i_add_an_item_to_the_basket() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.print("When");
    }
    @Then("^i can view the item in my basket$")
    public void i_can_view_the_item_in_my_basket() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.print("Then");
        driver.quit();
    }
    @Given("^I navigate to \"([^\"]*)\"$")
    public void i_navigate_to(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.setProperty("webdriver.chrome.driver","C:\\Driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get(arg1);
    }
    @When("^i enter \"([^\"]*)\"$")
    public void i_enter(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       WebElement elem = driver.findElement(By.name("q"));
       elem.sendKeys(arg1);
    }
    @Then("^i should see the results$")
    public void i_should_see_the_results() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("i should see the results");
         driver.quit();
    }
    @When("^the login credentials are entered$")
    public void login_credentials(DataTable table) throws Throwable{
        List<Map<String, String>> data = table.asMaps(String.class,String.class);
        System.out.println(data.get(0).get("Username"));
        System.out.println(data.get(0).get("Password"));
        //List<String> data = table.asList(String.class);
        //System.out.println(data.get(1));
    }
    @Given("^I go to \"([^\"]*)\"$")
    public void i_go_to(String arg1) throws Throwable {
        System.setProperty("webdriver.chrome.driver","C:\\Driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get(arg1);
    }
    @When("i type \"([^\"]*)\"$")
    public void searchText(String str) throws Throwable{
        WebElement elem = driver.findElement(By.name("q"));
        elem.sendKeys(str);
    }

}
