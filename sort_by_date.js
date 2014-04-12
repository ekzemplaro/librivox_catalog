// ---------------------------------------------------------------
//	sort_by_date.js
//
//					Nov/20/2013
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
	var aa = new Date ("25 Aug 2092");
	var bb = new Date ("25 Aug 2092");

	if ("publicdate" in left.value)
		{
		var dd_aa  = left.value.publicdate;
		dd_aa = dd_aa.replace(/-/g,'/');
		aa = Date.parse (dd_aa);
		}

	if ("publicdate" in right.value)
		{
		var dd_bb = right.value.publicdate;
		dd_bb = dd_bb.replace(/-/g,'/');
		bb = Date.parse (dd_bb);
		}


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
