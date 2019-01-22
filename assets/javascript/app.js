$(document).ready(function() {

	$("#start").show();
	$("#test").hide();
	$("#finish").hide();
	
	/// variables

	var number = 60;
	var intervalId;
	var correct = 0;
	var incorrect = 0;
	var result = correct / (correct + incorrect);
	
	$("#beginTimer").on("click", run);
	$("#submit").on("click", submit);
	$("#restart").on("click", restart);
	
	
	/// Clock
	
	function run() {

	  clearInterval(intervalId);

	  intervalId = setInterval(decrement, 1000);

	  $("#start").hide();
	  $("#test").show();

	}
	

	function submit() {

	  clearInterval(intervalId);

	  number = 60;


	  $("#test").hide();
	  $("#finish").show();

	}
	

	function restart() {

	  $("#finish").hide();
	  $("#start").show();

	  correct = 0;
		incorrect = 0;
		var number = 60;

	}
	

	function decrement() {

	  number--;
	  $("#timer").html(number);
	  if (number === 0) {
		stop();

		$("#test").hide();
		$("#finish").show();

	  }

	}

	
	function stop() {

	  clearInterval(intervalId);

	}

	/// questions

	$('#question1').click(function () {

		if ($('#question1').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question2').click(function () {

		if ($('#question2').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question3').click(function () {

		if ($('#question3').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question4').click(function () {

		if ($('#question4').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question5').click(function () {

		if ($('#question5').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question6').click(function () {

		if ($('#question6').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question7').click(function () {

		if ($('#question7').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question8').click(function () {

		if ($('#question8').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question9').click(function () {

		if ($('#question9').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});

	$('#question10').click(function () {

		if ($('#question10').is(':checked')) {

		  correct++;

		  $("#correct").html(correct);

		}

	});
	
	
	/// wrongs

	$('.wrong').click(function () {

	  if ($('.wrong').is(':checked')) {
		
		incorrect++;

		$("#wrong").html(incorrect);

	  }
	});
	
	
	$("#correct").html(correct);
	$("#wrong").html(incorrect);
	$("#final").html(result);
	
	});