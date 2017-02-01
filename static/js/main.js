$(function () {
	// Initializations
	var gameWon = false;
	var refreshTime = 1000;
	getState();

	// Update state periodically
	setInterval(
		function () {
			getState();
		},
		refreshTime);

	// Reset button in /game-won route
	$("#reset").click(function() {
		resetState();
	});

	// Methods
	function getState() {
		$.ajax({
			type: 'GET',
			url: '/state',
			success: function (data) {
				var allUnlocked = true;
				for (var i = 0; i < data.length; i++) {
					var lockedId = data[i].id + "-locked";
					var unlockedId = data[i].id + "-unlocked";
					if (data[i].unlocked) {
						$('#' + lockedId).hide();
						$('#' + unlockedId).show();
					} else {
						$('#' + lockedId).show();
						$('#' + unlockedId).hide();
						allUnlocked = false;
					}
				}

				gameWon = allUnlocked;
				if (gameWon) {
					$('#game-won').show();
				} else {
					$('#game-won').hide();
				}
			},
			failure: function(errMsg) {
		        alert(errMsg);
		    }
		});
	}

	function resetState() {
        console.log("Do reset !");
        var state = [
			{
				"id": 0,
				"unlocked": false
			},
			{
				"id": 1,
				"unlocked": false
			},
			{
				"id": 2,
				"unlocked": false
			},
			{
				"id": 3,
				"unlocked": false
			},
			{
				"id": 4,
				"unlocked": false
			},
			{
				"id": 5,
				"unlocked": false
			},
			{
				"id": 6,
				"unlocked": false
			}
		];
		$.ajax({
			type: "POST",
			url: '/state',
			data: JSON.stringify({"state": state}),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				console.log(data);
			},
			failure: function(errMsg) {
		        alert(errMsg);
		    }
		});
    }

});
