// ---------------------------------------------------------------
//	sort_by_totaltime.js
//
//					Oct/23/2016
//
// ---------------------------------------------------------------
function sort_by_totaltime_proc (obj_in)
{
	var array = new Array();
	for(var it in obj_in)
		{
		array.push({'key':String (it), 'value':obj_in[it]});
		}

	array.sort (sort_by_totaltime_function);

	return array;
}
  
// ---------------------------------------------------------------
function sort_by_totaltime_function(left, right)
{
	var aa = to_totaltime_proc (left.value);
	var bb = to_totaltime_proc (right.value);

	var rvalue = 0;

	if (aa < bb)
		{
		rvalue = -1;
		}
	else if (aa > bb)
		{
		rvalue = 1;
		}
	else
		{
		var id_aa = parseInt (left.key.slice(3));
		var id_bb = parseInt (right.key.slice(3));

		if (id_aa < id_bb)
			{
			rvalue = 1;
			}
		else if (id_aa > id_bb)
			{
			rvalue = -1;
			}
		}

	return rvalue;
}


// ---------------------------------------------------------------
function to_totaltime_proc (value_in)
{
	rvalue = 0

	if ("totaltime" in value_in)
		{
		var dd_aa  = value_in.totaltime;
		var times = dd_aa.split(':')
		rvalue = parseInt (times[0],10) * 3600
			 + parseInt (times[1],10) * 60 + parseInt (times[2],10)
		}

	return	rvalue;
}

// ---------------------------------------------------------------
