var height, spacing, speed, direction, stop_time, index, max_height, t;

function removate(){
	switch ( direction )
	{
		case 'left' :
			$('#fa_ticker > .fa_ticker_content:first').insertAfter('#fa_ticker > .fa_ticker_content:last').css('left', Math.max($('#fa_ticker').innerWidth(), total_width));
			break;

		case 'right' :
			$('#fa_ticker > .fa_ticker_content:last').insertBefore('#fa_ticker > .fa_ticker_content:first').css('left', Math.min(0, new_left)-total_width);
			break;

		case 'top' :
			$('#fa_ticker > .fa_ticker_content:first').insertAfter('#fa_ticker > .fa_ticker_content:last').css('top', total_height);
			break;

		case 'bottom' :
			$('#fa_ticker > .fa_ticker_content:last').insertBefore('#fa_ticker > .fa_ticker_content:first').css('top', (-2)*total_height);
	}

	index = ( direction == 'left' || direction == 'top' ) ? 0 : ( direction == 'right' ? $('#fa_ticker > .fa_ticker_content > div').length-1 : $('#fa_ticker > .fa_ticker_content:gt(0)').find(' > div').length );

	ticker_mvt();
}

function sleep(){
	var space = 1;
	switch ( direction )
	{
			case 'left' :
				space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('left'));
				break;

			case 'right' :
				space = $('#fa_ticker').innerWidth()-(parseInt($('#fa_ticker > .fa_ticker_content:first').css('left'))+total_width);
				break;

			case 'top' :
				space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('top'));
				break;

			case 'bottom' :
				space = (-1)*parseInt($('#fa_ticker > .fa_ticker_content:eq(1)').css('top'));
				break;
	}

	t = setTimeout(space < 1 ? 'removate()' : 'ticker_mvt()', stop_time);
}

function ticker_mvt(){
	if ( stop_time > 0 )
	{
		index += ( direction == 'left' || direction == 'top' ) ? 1 : -1;
		var el = $('#fa_ticker > .fa_ticker_content > div:eq('+index+')');

		switch ( direction )
		{
			case 'left' :
				var space = parseInt(el.parent().css('left'))+parseInt(el.css('left'));
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '-='+space+'px'}, ms, 'linear');
				$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '-='+space+'px'}, ms, 'linear', sleep);
				break;

			case 'right' :
				var space = $('#fa_ticker').width()-(parseInt(el.parent().css('left'))+parseInt(el.css('left'))+el.width());
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '+='+space+'px'}, ms, 'linear');
				$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '+='+space+'px'}, ms, 'linear', sleep);
				break;

			case 'top' :
				var space = parseInt(el.parent().css('top'))+parseInt(el.css('top'));
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('#fa_ticker > .fa_ticker_content:first').animate({'top' : '-='+space+'px'}, ms, 'linear');
				$('#fa_ticker > .fa_ticker_content:last').animate({'top' : '-='+space+'px'}, ms, 'linear', sleep);
				break;

			case 'bottom' :
				var space = (-1)*(parseInt(el.parent().css('top'))+parseInt(el.css('top')));
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('.fa_ticker_content:gt(0)').animate({'top' : '+='+space+'px'}, ms, 'linear');
				$('.fa_ticker_content:first').animate({'top' : '+='+space+'px'}, ms, 'linear', sleep);
				break;
		}
	}
	else
	{
		switch ( direction )
		{
			case 'left' :
				var space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('left'));
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '-='+space+'px'}, ms, 'linear');
				$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '-='+space+'px'}, ms, 'linear', removate);
				break;

			case 'right' :
				var space = $('#fa_ticker').innerWidth()-(parseInt($('#fa_ticker > .fa_ticker_content:first').css('left'))+total_width);
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '+='+space+'px'}, ms, 'linear');
				$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '+='+space+'px'}, ms, 'linear', removate);
				break;

			case 'top' :
				var space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('top'));
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('#fa_ticker > .fa_ticker_content:first').animate({'top' : '-='+space+'px'}, ms, 'linear');
				$('#fa_ticker > .fa_ticker_content:last').animate({'top' : '-='+space+'px'}, ms, 'linear', removate);
				break;

			case 'bottom' :
				var space = (-1)*parseInt($('#fa_ticker > .fa_ticker_content:eq(1)').css('top'));
				//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
				var ms = space/speed*1000;
				$('.fa_ticker_content:gt(0)').animate({'top' : '+='+space+'px'}, ms, 'linear');
				$('.fa_ticker_content:first').animate({'top' : '+='+space+'px'}, ms, 'linear', removate);
				break;
		}
	}
}

function ticker_start(h, s, e, d, st){
	height = h; // ticker height
	spacing = s; // Space between 2 messages
	speed = e; // move
	direction = d; // movement direction
	stop_time = st; // Stopping times in milliseconds

	max_height = height;
	$('#fa_ticker_block').show();
	$('#fa_ticker > .fa_ticker_content > div').css({'position' : 'absolute', 'white-space' : 'nowrap'}).each(function(){
		/*$(this).find('div').each(function(){
			max_height = Math.max(max_height, $(this).height()+2);
		});*/
		max_height = Math.max(max_height, $(this).height());
	});
	$('#fa_ticker_container').find('#fa_ticker').andSelf().height(max_height);

	switch ( direction )
	{
		case 'left' :
			total_width = 0;
			$('#fa_ticker > .fa_ticker_content > div').each(function(){
				$(this).css('left', total_width);
				total_width += spacing + $(this).width();
			});
			$('#fa_ticker > .fa_ticker_content').css('left', 0).clone().appendTo($('#fa_ticker')).css('left', Math.max($('#fa_ticker').innerWidth(), total_width));
			break;

		case 'right' :
			$('#fa_ticker > .fa_ticker_content > div').each(function(){
				$(this).prependTo($('#fa_ticker > .fa_ticker_content'));
			});
			total_width = 0;
			$('#fa_ticker > .fa_ticker_content > div').each(function(){
				$(this).css('left', total_width);
				total_width += $(this).width() + spacing;
			});
			new_left = $('#fa_ticker').width()-total_width;
			$('#fa_ticker > .fa_ticker_content').css('left', new_left).clone().prependTo($('#fa_ticker')).css('left', Math.min(0, new_left)-total_width);
			break;

		case 'top' :
			total_height = 0;
			$('#fa_ticker > .fa_ticker_content').width('100%').find(' > div').css({'width':'100%', 'text-align':'center'}).each(function(){
				$(this).css('top', total_height);
				total_height += max_height + spacing;
			});
			$('#fa_ticker > .fa_ticker_content').css('top', 0).clone().appendTo($('#fa_ticker')).css('top', total_height);
			break;

		case 'bottom' :
			$('#fa_ticker > .fa_ticker_content').width('100%').find(' > div').css({'width':'100%', 'text-align':'center'}).each(function(){
				$(this).prependTo($('#fa_ticker > .fa_ticker_content'));
			});
			total_height = 0;
			$('#fa_ticker > .fa_ticker_content > div').each(function(){
				$(this).css('top', total_height);
				total_height += max_height + spacing;
			});
			$('#fa_ticker > .fa_ticker_content').css('top', (-2)*total_height+max_height).clone().appendTo($('#fa_ticker')).css('top',  (-1)*total_height+max_height).clone().appendTo($('#fa_ticker')).css('top', max_height);
			break;

		case 'none' :
			$('#fa_ticker > .fa_ticker_content').width('100%').find(' > div').css({'width':'100%', 'text-align':'center'});
			break;
	}

	if ( direction != 'none' )
	{
		index = ( direction == 'left' || direction == 'top' ) ? 0 : ( direction == 'right' ? $('#fa_ticker > .fa_ticker_content > div').length : $('#fa_ticker > .fa_ticker_content:gt(0)').find(' > div').length );

		$('#fa_ticker').hover(function(){
			$('#fa_ticker > .fa_ticker_content').stop();
			clearTimeout(t);
			index += ( direction == 'left' || direction == 'top' ) ? -1 : 1;
		}, function() {
			ticker_mvt();
		});

		ticker_mvt();
	}
};