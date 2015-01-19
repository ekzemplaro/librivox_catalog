// ---------------------------------------------------------------
//	sort_by_title.js
//
//					Jan/17/2015
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
	var aa = to_title_proc (left.value);
	var bb = to_title_proc (right.value);

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
function to_title_proc (value_in)
{
	var aa = "";

	if ("title" in value_in)
		{
		aa  = value_in.title;
		}

	return	aa;
}

// ---------------------------------------------------------------
