Feature: LoginFeature
    This feature logins into the web

    @zero
    Scenario Outline: Test our applicationn
        Given I navigate to the website  
        When I click on the sign-in link
        And I navigate to the login page
        Then I enter the <Email> and <Password>
        And I click on the sign-in button
        And I navigate to the account page


        Examples:
            | Email        | Password |
            | pro@test.com | testing1 |
          

