// -----------------------------------------------------------------------
//	filter_title_reader.js
//
//					May/11/2014
//
// -----------------------------------------------------------------------
function filter_title_author_reader_proc
	(data_in,key_title,key_author,key_reader,db_authors,db_readers)
{
	key_title = jQuery.trim (key_title);
	key_author = jQuery.trim (key_author);
	key_reader = jQuery.trim (key_reader);

	var str_out = "*** filter_title_author_reader_proc ***<br />";
	str_out += "key_title: " + key_title + "<br />";
	str_out += "key_author: " + key_author + "<br />";
	str_out += "key_reader: " + key_reader + "<br />";

	jQuery ("#outarea_cc").html (str_out);

	if (0 < key_title.length)
		{
		data_in = filter_title_proc (data_in,key_title);
		}

	if (0 < key_author.length)
		{
		data_in = filter_author_proc (data_in,key_author,db_authors);
		}

	if (0 < key_reader.length)
		{
		data_in = filter_reader_proc (data_in,key_reader,db_readers);
		}

	return	data_in;
}

// -----------------------------------------------------------------------
function filter_title_proc (data_in,key_title)
{
	var data_out = new Object ();

	var data_reg = new RegExp (key_title,"i");

	var nn_count = 0;
	for (var key in data_in)
		{
		var title = "" + data_in[key].title;
		if (title.search (data_reg) != -1)
//		if (0<= title.indexOf (key_title))
			{
			data_out[key] = data_in[key];
			}

		nn_count++;
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function filter_author_proc (data_in,key_author,db_authors)
{
	var data_out = new Object ();

	var data_reg = new RegExp (key_author,"i");

	for (var key in data_in)
		{
		var flag_copy = false;

		var key_cur = "a" + data_in[key].authors;

		jQuery ("#outarea_dd").text (key_cur);

		if (key_cur in db_authors)
			{
			var author_last = db_authors[key_cur]["last_name"];

			if (author_last != null)
				{
		jQuery ("#outarea_ee").text (author);
				if (author_last.search (data_reg) != -1)
//				if (0<= reader.indexOf (key_reader))
					{
					flag_copy = true;
					}
				}

			var author_first = db_authors[key_cur]["first_name"];

			if (author_first != null)
				{
				if (author_first.search (data_reg) != -1)
					{
					flag_copy = true;
					}
				}

			}

		if (flag_copy)
			{
			data_out[key] = data_in[key];
			}	
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function filter_reader_proc (data_in,key_reader,db_readers)
{
	var data_out = new Object ();

	var data_reg = new RegExp (key_reader,"i");

	for (var key in data_in)
		{
		var flag_copy = false;

		for (var it in data_in[key].readers)
		{
		var key_cur = "r" + data_in[key].readers[it];


		if (key_cur in db_readers)
			{
			var reader = db_readers[key_cur];

			if (reader != null)
				{
				if (reader.search (data_reg) != -1)
//				if (0<= reader.indexOf (key_reader))
					{
					flag_copy = true;
					}
				}
			}
		}

		if (flag_copy)
			{
			data_out[key] = data_in[key];
			}	
		}

	return	data_out;
}

// -----------------------------------------------------------------------
