// -----------------------------------------------------------------------
//	librivox_catalog.js
//
//					Oct/23/2016
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** librivox_catalog *** start *** Oct/23/2016 ***");

	var file_json = "db_catalog.json";

	fetch_json_proc (file_json);

	jQuery("#outarea_hh").html
		("*** librivox_catalog *** end *** Oct/23/2016 ***");
});

// -----------------------------------------------------------------------
// [6]:
function fetch_json_proc (file_json)
{
	var array_going = new Array ("All status","completed","in progress");

	var array_group = new Array ("Group & Solo","Group","Solo");

	jQuery.getJSON (file_json,function (data_received)
		{
		search_display_proc (data_received,array_going,array_group);
		});
}

// -----------------------------------------------------------------------
