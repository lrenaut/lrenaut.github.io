function display_twitter() {
	$.getJSON("http://api.twitter.com/1/statuses/user_timeline/leratbotte.json?count=5&include_rts=1&callback=?", function(data) {
		if (data.length > 0) {
			var tweets = $('<ul></ul>');
			for (var i=0; i<5 && i<data.length; i++)
				tweets.append($('<li></li>').html(data[i].text));
			$('#twitter').append(tweets);
		}
	});
}