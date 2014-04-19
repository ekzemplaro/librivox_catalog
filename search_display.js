// -----------------------------------------------------------------------
//	search_display.js
//
//					Apr/19/2014
//
// -----------------------------------------------------------------------
// [8]:
function search_display_proc (data_received,array_going,array_group)
{
	var array_languages = data_received.languages;

	array_languages.unshift (["All languages"]);

	var array_genres = data_received.genres;
	array_genres.unshift (["All genres"]);

	var str_menu = display_select_proc
		(array_going,array_languages,array_genres,array_group);

	jQuery("#menu").html (str_menu);
	jQuery("#summary").html ("<br />");

	var out_str = display_books_proc
		(data_received.books,data_received.authors,data_received.readers);

	
	jQuery("#contents").html (out_str);


	jQuery (".search").change (function ()
               	{
		search_display_s2_proc
			(data_received,array_going,
			array_group,array_languages,array_genres);
		});


	jQuery ("button.search").click (function ()
		{
		search_display_s2_proc
			(data_received,array_going,
			array_group,array_languages,array_genres);
		});
}

// -----------------------------------------------------------------------
function search_display_s2_proc
	(data_received,array_going,array_group,array_languages,array_categories)
{
	var data_out = select_parser_proc
			(data_received.books,array_going,
			array_languages,array_categories,array_group);
	var key_title = jQuery("input#title").val ();
	var key_reader = jQuery("input#reader").val ();

	if ((0 < key_title.length) || (0 < key_reader.length))
		{
		data_out = filter_title_reader_proc
			(data_out,key_title,key_reader,data_received.readers);
		}

	var out_str = display_books_proc
			(data_out,data_received.authors,data_received.readers);

	jQuery("#contents").html (out_str);
}

// -----------------------------------------------------------------------
// [8-4]:
function display_select_proc
	 (array_going,array_languages,array_genres,array_group)
{
	var str_out = display_select_box_proc ('search','going',array_going);
	str_out += display_select_box_proc ('search','language',array_languages);
	str_out += display_select_box_proc ('search','genre',array_genres);
	str_out += display_select_box_proc ('search','group',array_group);

	str_out += '<p />';
	str_out += 'title';
	str_out += '<input type="text" id="title">';
	str_out += '&nbsp&nbsp';
	str_out += 'reader';
	str_out += '<input type="text" id="reader">';
	str_out += '&nbsp&nbsp';

	str_out += '<button class="search" id="execute">Search</button>';

	return	str_out;
}

// -----------------------------------------------------------------------
// [8-4-2]:
function display_select_box_proc (class_in,id_select,array_in)
{
	var str_out = "<select class=\"" + class_in + "\" id=\"" + id_select + "\" name=\"" + id_select + "\">";
	str_out += "<option selected>" + array_in[0] + "</option>";

	for (var it=1; it< array_in.length; it++)
		{
		str_out += "<option>" + array_in[it] +" </option>";
		}
	str_out += "</select>";

	str_out += '&nbsp&nbsp';

	return	str_out;
}

// -----------------------------------------------------------------------
// [8-6]:
function select_parser_proc
	(db_books,array_going,array_languages,array_genres,array_group)
{
	var index_going = jQuery ("#going").get(0).selectedIndex;
	var index_language = jQuery ("#language").get(0).selectedIndex;
	var index_category = jQuery ("#genre").get(0).selectedIndex;
	var index_group = jQuery ("#group").get(0).selectedIndex;

	var going = array_going[index_going];
	var language = array_languages[index_language];
	var category = array_genres[index_category];
	var group = array_group[index_group];

//	var str_tmp = "***  going = " + going + "<br />";
//	str_tmp += "***  language = " + language + "<br />";
//	str_tmp += "***  category = " + category + "<br />";
//	str_tmp += "***  group = " + group + "<br />";
//	jQuery("#outarea_dd").html (str_tmp);

	if (going === array_going[0])
		{
		data_out = db_books;
		}
	else
		{
		data_out = filter_going_proc (going,db_books);
		}

	if (language !== array_languages[0])
		{
	data_out = filter_language_proc (language,data_out,array_languages);
		}

	if (category !== array_genres[0])
		{
		data_out = filter_genre_proc (category,data_out,array_genres);
		}

	if (group !== array_group[0])
		{
		data_out = filter_group_proc (group,data_out);
		}

	return	data_out;
}

// -----------------------------------------------------------------------
