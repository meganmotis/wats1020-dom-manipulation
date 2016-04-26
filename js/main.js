//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() { // All the below js code is inside this "document ready" function so it does not run until the DOM is ready for Javascript manipulation.
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    // This function will listen for clicks on the "login" button, then hide the login form elements on the page and reveal user info.
	$('#login-form .btn').on('click', function(event) {
		$('#login-form').hide(); //hides the login-form
		$('.user-fullname').text(userInfo.firstName + ' ' + userInfo.lastName); //replaces .user-fullname with the firstName and lastName from the var userInfo
		$('.user-info').fadeIn(); //shows the user-info
	});

	// This function reverses the above function -- it will listen for clicks on the "logout" button, then hide the user info and reveal the login form.
	$('.user-info .btn').on('click', function(event) {
		$('.user-info').hide();
		$('#login-form').fadeIn();
	});
	
	// This function will listen for clicks on all the "View Details"
	// buttons so that when a user clicks a "View Details" button they see
	// the content contained in the elements with the class "details" in the
	// proper part of the screen.
	$('.view-details').on('click', function(event) {
    	console.log(event);
    	var targetElement = event.target;
    	var container = targetElement.parentElement.parentElement; // When user clicks a "view details" button, find the parent of that element.
    	$(container).find('.details').each(function(index, el){ // Within that parent, find all the elements that have the class `details`.
        	if ($(el).is (':visible')){
            	$(el).fadeOut();
            	targetElement.innerText = "View Details";
        	} else { // Change the text of the "view details" button to read "hide details" so the user understands they can hide the text again.
            	$(el).fadeIn();
            	targetElement.innerText = "Hide Details";
        	}
     	});
	});
	
	var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
	
	//Below is a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
	$('.voting button').on('click', function(event){ //listens for a click on the voting buttons
    	if ($(this).attr('data-vote') === 'great'){ //if the vote was "great"
        	++voteCounts.great;
    	} else { //if the vote is for "greatest"
       	 ++voteCounts.greatest;
   	 	}

    	++voteCounts.total; //calculates the total number of votes
    	console.log(voteCounts);

    	var greatPercent = (voteCounts.great/voteCounts.total * 100) + '%'; //Determine the respective percentages (out of 100) for each progress bar.
    	console.log(greatPercent);
		
    	var greatestPercent = (voteCounts.greatest/voteCounts.total * 100) + '%';
		console.log(greatestPercent);
		
    	$('.great-progress').attr('style', 'width: ' + greatPercent);
   	 	$('.greatest-progress').attr('style', 'width: ' + greatestPercent); //Modify the `width` attribute on each progress bar to set the updated percentage.
	});
		
});