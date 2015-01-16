// ---------------------------------------------------------------
//	sort_by_author.js
//
//					Jan/16/2015
//
// ---------------------------------------------------------------
function sort_by_author_proc (obj_in,db_authors)
{
	var compare_function = author_compare (db_authors);

	var array = new Array();
	for(var it in obj_in)
		{
		array.push({'key':String (it), 'value':obj_in[it]});
		}

	array.sort (compare_function);

	return array;
}
  
// ---------------------------------------------------------------
function author_compare (db_authors)
{return function sort_by_author_function (left, right)
{
	var rvalue = 0;

	var aa = to_author_name_proc (left.value,db_authors);
	var bb = to_author_name_proc (right.value,db_authors);

	if (aa < bb)
		{
		rvalue = -1;
		}
	else if (aa > bb)
		{
		rvalue = 1;
		}

	return rvalue;
}
}

// ---------------------------------------------------------------
function to_author_name_proc (value_in,db_authors)
{
	var rvalue = "";

	if ("authors" in value_in)
		{
		var key_author = "a" + value_in.authors;
		var author_cur = db_authors[key_author];
		rvalue = author_cur.last_name;
		var first_name = author_cur.first_name;
		if (0 < first_name.length)
			{
			rvalue += " , " + first_name;
			}
//		rvalue = author_cur.last_name;
//		rvalue = value_in.authors;
		}

	return rvalue;
}

// ---------------------------------------------------------------
