// -----------------------------------------------------------------------
//	filter_title_reader.js
//
//					Apr/19/2014
//
// -----------------------------------------------------------------------
function filter_title_reader_proc (data_in,key_title,key_reader,db_readers)
{
	key_title = jQuery.trim (key_title);
	key_reader = jQuery.trim (key_reader);

	if (0 < key_title.length)
		{
		data_in = filter_title_proc (data_in,key_title);
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

	var nn_count = 0;
	for (var key in data_in)
		{
		var title = "" + data_in[key].title;
		if (0<= title.indexOf (key_title))
			{
			data_out[key] = data_in[key];
			}

		nn_count++;
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function filter_reader_proc (data_in,key_reader,db_readers)
{
	var data_out = new Object ();

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
				if (0<= reader.indexOf (key_reader))
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
