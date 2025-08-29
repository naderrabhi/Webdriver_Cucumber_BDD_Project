Feature: SauceDemo Login
As a shopper on SauceDemo
I want to log in
So that I can see the products page


Background:
Given I am on the SauceDemo login page


Scenario: Valid login with standard user
When I login with username "standard_user" and password "secret_sauce"
Then I should see the products page


Scenario Outline: Invalid login attempts
When I login with username "<username>" and password "<password>"
Then I should see error "<errorMessage>"


Examples:
| username | password | errorMessage |
| locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
| problem_user | wrong_pass | Epic sadface: Username and password do not match any user in this service |
| | secret_sauce | Epic sadface: Username is required |
| standard_user | | Epic sadface: Password is required |