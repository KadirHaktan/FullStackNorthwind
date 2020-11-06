
## FullStack Northwind Basic Project

###  BackEnd
#### Technologies
* NodeJS
* Express(Http framework)
* MySQL (Database)
* MikroORM(ORM)
* Inversify (Ioc Container for Dependency Injection)

#### Multi Layer Architecture
* Service => Business rules,editing to db result
* Entities => Db Tables
* Core => Heart of application,interfaces
* Config=> db configuration,application or dependency configuration or something else
* Controller=>How do we send http result with incoming service result by http request.Handling to http requests

* Repository=>Actually there is no repository file.Mikro ORM package supports to repository pattern with EntityRepository class.and we used to instance from this class.Repository is just about centralize to db query operations


### FrontEnd
#### Technologies
* React=> I haven't started to client side yet


