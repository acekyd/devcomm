# IOC flow

IOC is a pattern that helps avoid having unnecessary code in unncessary places. It also makes it easier to swap out different parts of the application. IOC is usually implemented per model that your application requires.

The process for creating an IOC container for a model is described below:

 1. Create a folder (called Repositories; for this project). This folder will contain the code related for each model - so it's created once
 2. Create a folder with the name of the model you're working on (e.g User)

An IOC container typically has a contract (which is an interface describing the methods to be implemented); and a class which implements the methods

 3. Create a file called name-of-model-Contract.php (UserContract.php)
 4. Create another file called Eloquent-name-of-model-Repository.php (EloquentUserRepository.php)

You also need a service provider to bind the contract and it's implementation

 5. Create another file called name-of-model-ServiceProvider.php and register it in the providers array of config/app.php

Creating this binding just lets you initialize the contract in your controller or anywhere you need to access the methods associated with the model

Look at the controllers for how to use the contract methods