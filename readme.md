# APICORE

## Description
The goal of this module is to provide base class with a skeleton to build and organise easily 
your REST APIs in NodeJS.

## Public API 

### EntityDao (Interface)
An interface your DAO (Data Access Object) must inherit so that when you pass your object
to API controllers they know how to act with it.

### BaseApiController (Class)
A class used a base class for your API controller (the class that contains your API logic).
Then add method to implement your app logic. 

### CrudApiController (Class)
It has the same goal as the BaseApiController but it already basic CRUD (Create, Read, Update, Delete)
feature. If you want to add some logic over some existing, such as "create" for instance, simply override it
and call the parent method with super to keep the behavior provided by the API.

### BaseRouterController (Class)
A class to organise your route, to link endpoints with the appropriate controller's method. This class
serve the purpose of building the Express Router object used, _in fine_, to route to your API in your app.

### CrudApiRouterController (Class)
Same as CrudApiController it relies on its router equivalent BaseRouterController and add some implementation
for usual CRUD operations.

## Changelog
### V0.1.0
Initial version.