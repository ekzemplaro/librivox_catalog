// ---------------------------------------------------------------
//	sort_by_title.js
//
//					Jan/15/2015
//
// ---------------------------------------------------------------
function sort_by_title_proc (obj_in)
{
	var array = new Array();
	for(var it in obj_in)
		{
		array.push({'key':String (it), 'value':obj_in[it]});
		}

	array.sort (sort_by_title_function);

	return array;
}
  
// ---------------------------------------------------------------
function sort_by_title_function (left, right)
{
	var aa = "";
	var bb = "";

	if ("title" in left.value)
		{
		aa  = left.value.title;
		}

	if ("title" in right.value)
		{
		bb = right.value.title;
		}


	var rvalue = 0;

	if (aa > bb)
		{
		rvalue = 1;
		}
	else if (aa < bb)
		{
		rvalue = -1;
		}

	return rvalue;
}

// ---------------------------------------------------------------
