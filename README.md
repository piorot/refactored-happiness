# refactored-happiness
Very simple front-end project made in Angular 1.6.6. 

[![build status](https://api.travis-ci.org/piorot/refactored-happiness.svg)](http://travis-ci.org/piorot/refactored-happiness)
[![Coverage Status](https://coveralls.io/repos/github/piorot/refactored-happiness/badge.svg)](https://coveralls.io/github/piorot/refactored-happiness)

### Live demo
(heroku free plan wake-up delay may be experineced with first request): 
https://refactored-happiness.herokuapp.com/

### Project description
Project is supposed to be an initial phase of stuff manager app. For now there are 4 views.
* People list view - list of all people with roles assigned.
* People details view - list of people with basic skill info and assignment to team with indication of role kind in each of them
* Projects list view - list of whole projects in company with splash screen and one sentance description 
* Project details view - detail view of single project with all teams involved in work on the project 

Default Employees List View | Detail single employee card | Projects List View | Detail single project card
----------------------------|-----------------------------|--------------------|---------------------------
![Responsiveness](https://github.com/piorot/refactored-happiness/blob/master/readme/Screenshot_2017-11-06-18-55-19.png)|![Responsiveness](https://github.com/piorot/refactored-happiness/blob/master/readme/Screenshot_2017-11-06-20-20-51.png)|![Responsiveness](https://github.com/piorot/refactored-happiness/blob/master/readme/Screenshot_2017-11-06-18-54-41.png)|![Responsiveness](https://github.com/piorot/refactored-happiness/blob/master/readme/Screenshot_2017-11-06-20-21-55.png)

### Project goal
* [To show unit tests](https://coveralls.io/github/piorot/refactored-happiness)
* [To show external api utilization](https://github.com/piorot/refactored-happiness-api)
* To show app structure and separation of logic among modules, controllers, filters and services  


### Features
* Highly covered with unit tests
* Continous integration with use of TravisCI
* Coverage measured thanks to both Coveralls and TravisCI
* Continous deployment with use of heroku deployment pipeline on TravisCI
* Wannabe Responsive layout thanks to angular-material usage

Mobile | Desktop
------------ | -------------
 ![Responsiveness](https://github.com/piorot/refactored-happiness/blob/master/readme/Screenshot_2017-11-06-18-54-41.png)|  ![Responsiveness](https://github.com/piorot/refactored-happiness/blob/master/readme/Web.png)
One column | Two columns
    
   
    
### Guidelines (partially) followed [Angular Patterns: Clean Code](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
    
* [App Structure](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure-lift-principle)
* [Naming convention](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#naming)
* [App structure](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure)
* [Modularity](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modularity)
* [Testing](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#testing)
    
