This README.md file descibes Flat Dango Movie Theater App.

  ## ABOUT
This project builds FlatDango, Flatiron's movie theater app which integrates the following user-app interactions:

# 1. View First Movie's Details
The user can see the first movie's details when the page loads which are: movie's poster, title, runtime, showtime, and available tickets.

# 2. View All Movies in a Menu
On the left side of the page is a list of all available  movies
The user can see a menu of all movies on the left side of the page when the page fully loads. 

# 3. Buy a Ticket for a Movie
There is a button at the bottom of each movie which when clicked allows the user to buy a ticket to that movie.
After clicking the "Buy Ticket" button, the number of available tickets decrease on the frontend.
If all tickets are sold-out, the buy ticket button is disabled.

  ## TECHNOLOGIES USED
  -HTML
  -CSS
  -JavaScript
  -Fetch API 

  ## FUNCTIONALITY
This describes the JavaScript:
 step 1: Fetch()
 F-etches all films data from the /films endpoint and renders each movie using the renderOneMovie function.

 step 2: function (renderOneMovie)
-Creates a list element for each film, displaying the poster, title, runtime, showtime, and available tickets.
-The ticket availability is calculated by subtracting tickets_sold from capacity.

step 3: Buy Ticket Functionality:
-A buy ticket button is created and appended to the list element
-An event Listener is added to the button that enables the user to buy a  ticket. 

step 4: function(updateTicketAvailability)
- It is evoked in the 'Buy Ticket' button such that when tickets to a film are sold out
the 'Buy Ticket' button is disabled and the 'Tickets available' reads 0.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.