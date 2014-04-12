// -----------------------------------------------------------------------
//	librivox_catalog.js
//
//					Mar/23/2014
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** librivox_catalog *** start *** Mar/23/2014 ***");

	var file_json = "db_catalog.json";

	fetch_json_proc (file_json);

	jQuery("#outarea_hh").html
		("*** librivox_catalog *** end *** Mar/23/2014 ***");
});

// -----------------------------------------------------------------------
// [6]:
function fetch_json_proc (file_json)
{
	var array_going = new Array ("All status","completed","in progress");

	var array_group = new Array ("Group & Solo","Group","Solo");

	jQuery.getJSON (file_json,function (data_received)
		{
		var str_out = data_received.authors["a599"].last_name;
		str_out += "<br />";
		str_out += data_received.readers["r7044"];
		str_out += "<br />";
		jQuery("#outarea_bb").html (str_out);
		search_display_proc (data_received,array_going,array_group);
		});
}

// -----------------------------------------------------------------------
