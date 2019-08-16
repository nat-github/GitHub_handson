Feature: basket
  #shopping basket features

  Scenario: add to basket
    Given that i am on the shopping website
    When i add an item to the basket
    Then i can view the item in my basket

    Scenario: Go to Google
      Given I navigate to "https://www.google.com"
      When i enter "Testing"
      Then i should see the results

     Scenario:DemoUAT
       Given I navigate to "https://www.google.com"
       When the login credentials are entered
        |Username|Password|
        |admin|admin|
       Then i should see the results

  @outlineTest
  Scenario Outline: Testing scenario outline
        Given I go to "<website>"
        When i type "<searchText>"
        Then i should see the results
        Examples:
        |website|searchText|
        |https://www.google.com|Testing|
        |https://www.google.com|Cucumber|

