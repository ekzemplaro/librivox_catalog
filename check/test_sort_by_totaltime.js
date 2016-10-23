#! /usr/bin/nodejs
// ---------------------------------------------------------------
//	read/json_read.js
//
//					Sep/06/2016
//
// ---------------------------------------------------------------
var fs = require("fs")
var text_manipulate = require('/var/www/data_base/common/node_common/text_manipulate')
// ---------------------------------------------------------------
function to_totaltime_proc (value_in)
{
	rvalue = 0

	if ("totaltime" in value_in)
		{
		var dd_aa  = value_in.totaltime;
		var times = dd_aa.split(':')
		rvalue = parseInt (times[0],10) * 3600
			 + parseInt (times[1],10) * 60 + parseInt (times[2],10)
		}

	return	rvalue;
}
// ---------------------------------------------------------------
console.error ("*** 開始 ***")

var aa_in = new Object ()
aa_in["totaltime"]="2:43:12"
var aa = to_totaltime_proc (aa_in)
console.log (aa_in["totaltime"] + "\t" + aa)

 
aa_in["totaltime"]="02:35:51"
var aa = to_totaltime_proc (aa_in)
console.log (aa_in["totaltime"] + "\t" + aa)
 
console.error ("*** 終了 ***")
// ---------------------------------------------------------------
