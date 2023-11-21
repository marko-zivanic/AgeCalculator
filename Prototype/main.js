const date = new Date();

$( "#output-btn" ).on( "click", function() {
  let day = $('.day-input').val();
  let month = $('.month-input').val();
  let year = $('.year-input').val();

  let dayCorrect = false;
  let monthCorrect = false;
  let yearCorrect = false;

  console.log(day,month,year);
  function dateDiff(startingDate, endingDate) {
	  let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
	  if (!endingDate) {
	    endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
	  }
	  let endDate = new Date(endingDate);
	  if (startDate > endDate) {
	    const swap = startDate;
	    startDate = endDate;
	    endDate = swap;
	  }
	  const startYear = startDate.getFullYear();
	  const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
	  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	  let yearDiff = endDate.getFullYear() - startYear;
	  let monthDiff = endDate.getMonth() - startDate.getMonth();
	  if (monthDiff < 0) {
	    yearDiff--;
	    monthDiff += 12;
	  }
	  let dayDiff = endDate.getDate() - startDate.getDate();
	  if (dayDiff < 0) {
	    if (monthDiff > 0) {
	      monthDiff--;
	    } else {
	      yearDiff--;
	      monthDiff = 11;
	    }
	    dayDiff += daysInMonth[startDate.getMonth()];
	  }

	  return yearDiff + '-' + monthDiff + '-' + dayDiff;
	}

  function calculateAge(){
  	let final = dateDiff(date,new Date(year + '-' + month + '-' + day));
  	console.log(final);
  	let dateArray = final.split('-');
  	$('#output-year').html(dateArray[0]);
  	$('#output-month').html(dateArray[1]);
  	$('#output-day').html(dateArray[2]);
  }

  function correctDay(isTrue){
  	if(isTrue == true){
  		$('#day-label').css('color','grey');
  		$('#day-error').addClass('hidden');
  		$('.day-input').css('outline','none');
  	}
  	else{
  		$('#day-label').css('color','var(--primaryLightRed)');
  		$('#day-error').removeClass('hidden');
  		$('.day-input').css('outline','2px solid var(--primaryLightRed');
  	}
  }
  function correctMonth(isTrue){
  	if(isTrue == true){
  		$('#month-label').css('color','grey');
  		$('#month-error').addClass('hidden');
  		$('.month-input').css('outline','none');
  	}
  	else{
  		$('#month-label').css('color','var(--primaryLightRed)');
  		$('#month-error').removeClass('hidden');
  		$('.month-input').css('outline','2px solid var(--primaryLightRed');
  	}
  }
  function correctYear(isTrue){
  	if(isTrue == true){
  		$('#year-label').css('color','grey');
  		$('#year-error').addClass('hidden');
  		$('.year-input').css('outline','none');
  	}
  	else{
  		$('#year-label').css('color','var(--primaryLightRed)');
  		$('#year-error').removeClass('hidden');
  		$('.year-input').css('outline','2px solid var(--primaryLightRed');
  	}
  }
  function isDateValid(dateStr) {
  	return !isNaN(new Date(dateStr));
  }

  if(isDateValid(year + '-' + month + '-' + day) && year <= date.getFullYear()){
  	calculateAge();
  }
  else{
  	correctYear(false);
  	correctMonth(false);
  	correctDay(false)
  }
});
