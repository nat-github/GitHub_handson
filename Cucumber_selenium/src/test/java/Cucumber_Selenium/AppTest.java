package Cucumber_Selenium;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import cucumber.api.CucumberOptions;
//import org.testng.annotations.Test;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Cucumber_Selenium",glue={"Cucumber_Selenium"},plugin = {"pretty","html:target/cucumber"},dryRun = false,tags = "@outlineTest")

public class AppTest
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        //assertTrue( true );
    }
}
