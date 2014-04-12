// -----------------------------------------------------------------------
//	librivox_filter.js
//
//					Mar/23/2014
//
// -----------------------------------------------------------------------
function filter_going_proc (going_in,data_in)
{
	var data_out = new Object ();

	if (going_in === "completed")
		{
		for (var key in data_in)
			{
			if ("publicdate" in data_in[key])
				{
				data_out[key] = data_in[key];
				}
			}
		}
	else
		{
		for (var key in data_in)
			{
			if ("publicdate" in data_in[key])
				{
				}
			else
				{
				data_out[key] = data_in[key];
				}
			}
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function filter_language_proc (language_in,data_in,array_languages)
{
	var data_out = new Object ();

	for (var key in data_in)
		{
		var lang = data_in[key].language;
		if (lang == language_in)
			{
			data_out[key] = data_in[key];
			}
		else if (language_in == "Others")
			{
			var flag = hantei_language_proc (lang,array_languages);

			if (flag)
				{
			data_out[key] = data_in[key];
				}
			}
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function hantei_language_proc (lang,array_languages)
{
	var rvalue = true;

	for (var it=1; it< (array_languages.length - 1); it++)
		{
		if (lang === array_languages[it])
			{
			rvalue = false;
			break;
			}
		}

	return	rvalue;
}

// -----------------------------------------------------------------------
function filter_genre_proc (genres_in,data_in,array_categories)
{
	jQuery("#outarea_ff").text ("*** filter_genre genres_in = " + genres_in);

	var data_out = new Object ();

	for (var key in data_in)
		{
		var genres = "";
		if ("genres" in data_in[key])
			{
			var genres = data_in[key].genres;
			}

		if (genres_in == genres)
			{
			data_out[key] = data_in[key];
			}
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function filter_group_proc (group_in,data_in)
{
	jQuery("#outarea_ff").text ("*** filter group = " + group_in);

	var data_out = new Object ();

	if (group_in === "Group")
		{
		for (var key in data_in)
			{
			if ('readers' in data_in[key])
				{
				var readers = data_in[key].readers;
				if (1 < readers.length)
					{
					data_out[key] = data_in[key];
					}
				}
			}
		}
	else
		{
		for (var key in data_in)
			{
			if ('readers' in data_in[key])
				{
				var readers = data_in[key].readers;
				if (readers.length <= 1)
					{
					data_out[key] = data_in[key];
					}
				}
			else
				{
				data_out[key] = data_in[key];
				}
			}
		}

	return	data_out;
}

// -----------------------------------------------------------------------
function filter_completed_proc (month,data_in)
{
	var data_out = new Object ();

	if (month === "all")
		{
		for (var key in data_in)
			{
			if ("publicdate" in data_in[key])
				{
				data_out[key] = data_in[key];
				}
			}
		}
	else
		{
		for (var key in data_in)
			{
		if ("publicdate" in data_in[key])
			{
			ddx = data_in[key].publicdate;

			if (0 <= ddx.indexOf (month))
				{
				data_out[key] = data_in[key];
				}
			}
			}
		}

	return	data_out;
}

// -----------------------------------------------------------------------
