# simple movie app

# introduction
This project is built using Express.js , MySQL, and written using Clean Architecture approach .

## Architecture

The project is divided into 4 layers :
- **Domain**: contains business rules and respositoy[for database interactions].
- **Infrastructure**: contains external api calls.
- **Controller**: handles HTTP requests and responses.
- **UseCases**: Contains application-specific business rules.

