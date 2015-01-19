// ---------------------------------------------------------------
//	sort_by_date.js
//
//					Jan/17/2015
//
// ---------------------------------------------------------------
function sort_by_date_proc (obj_in)
{
	var array = new Array();
	for(var it in obj_in)
		{
		array.push({'key':String (it), 'value':obj_in[it]});
		}

	array.sort (sort_by_date_function);

	return array;
}
  
// ---------------------------------------------------------------
function sort_by_date_function(left, right)
{
	var aa = to_date_proc (left.value);
	var bb = to_date_proc (right.value);

	var rvalue = 0;

	if (aa < bb)
		{
		rvalue = 1;
		}
	else if (aa > bb)
		{
		rvalue = -1;
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
function to_date_proc (value_in)
{
	var aa = new Date ("25 Aug 2092");

	if ("publicdate" in value_in)
		{
		var dd_aa  = value_in.publicdate;
		dd_aa = dd_aa.replace(/-/g,'/');
		aa = Date.parse (dd_aa);
		}

	return	aa;
}

// ---------------------------------------------------------------
