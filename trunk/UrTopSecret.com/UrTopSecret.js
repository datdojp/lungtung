//------------------------------------------------------
//               COMMON
//------------------------------------------------------
var currentNoteId = 0;
var autoIncNoteId = 0;
function removeCurrentNote() {
	$("#" + currentNoteId).hide();
}
function toggleCheckbox() {
	if( $(this).hasClass("standardCheckbox") ) {
		$(this).removeClass("standardCheckbox");
		$(this).addClass("standardCheckbox_checked");
	} else {
		$(this).addClass("standardCheckbox");
		$(this).removeClass("standardCheckbox_checked");
	}
}
function saveNote() {
	//validate the name
	var $name = $("#" + currentNoteId + " input[name='name']");
	if(!$name.val() || $name.val() == "") {
		alert("Please enter the name");
		$name.focus();
		return;
	}

	if( $("#" + currentNoteId).hasClass("new") ) {
		var type;
		if( $("#" + currentNoteId).hasClass("textNote") ) {
			type = "Text";
		} else if( $("#" + currentNoteId).hasClass("canvasNote") ) {
			type = "Handwriting";
		}
		$("#allNotesTable").append([
			"<tr id='allNotesTable_" + currentNoteId + "'>",				
				"<td>",
					"<button class='delete' onclick='deleteNote(" + currentNoteId + ")'>x</button>",
				"</td>",
				"<td>",
					"<a class='name' onclick='editNote(" + currentNoteId + ")'>",
						$name.val(),
					"</a>",
					
				"</td>",
				"<td>",
					type,
				"</td>",
				"<td>",
					"<p class='lastUpdate'>",
						getSystemDate(),
					"</p>",
				"</td>",				
			"</tr>"
		].join(""));
		
		$("#" + currentNoteId).removeClass("new");
		$("#" + currentNoteId + " .cancel").hide("slow");
	} else {
		$("#allNotesTable_" + currentNoteId + " a.name").html( $name.val() );
		$("#allNotesTable_" + currentNoteId + " p.lastUpdate").html(getSystemDate());
	}
	
	$("#" + currentNoteId).hide("slow");	
}

function getSystemDate() {
	var date = new Date();
	return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function deleteNote(noteId) {
	$("#" + noteId).remove();
	$("#allNotesTable_" + noteId).remove();
}
function editNote(noteId) {	
	if( $("#" + noteId).is(":hidden") ) {
		$(".textNote, .canvasNote").hide("slow");
		$("#" + noteId).show("slow");
		currentNoteId = noteId;
	}
}


//------------------------------------------------------
//               TEXT NOTE
//------------------------------------------------------
function generateTextNoteHTML(noteId) {
	return [
		"<div id=" + noteId + " class='textNote' style='display:none'>",
			"<form>",
				"<table>",
					"<tr>",
						"<td>",
							"<input type='text' class='standardInput' placeholder='Enter name of note here' required='required' name='name'/>",
						"</td>",
						"<td>",
							"<input type='submit' onclick='saveNote();return false;' class='standardButton' value='Save'/>",
						"</td>",
						"<td>",
							"<button class='standardButton cancel' onclick='removeCurrentNote();return false;'>Cancel</button>",
						"</td>",
					"</tr>",
				"</table>",
			"<textarea placeholder='Enter your secret here. We will not tell anyone. We promise' style='width:100%;height:300px' class='standardTextArea'></textarea>",
			"</form>",
		"</div>"
	].join("");	
}

function newTextNote() {
	$(".textNote, .canvasNote").hide("slow");
	currentNoteId = (autoIncNoteId++);
	$("#noteEditZone").append(generateTextNoteHTML("" + currentNoteId));	
	$("#" + currentNoteId).addClass("new");	
	$("#" + currentNoteId).show("slow");
}

//------------------------------------------------------
//               CANVAS NOTE
//------------------------------------------------------
function generateCanvasNotHTML(noteId) {
	return [
		"<div id=" + noteId + " class='canvasNote' style='display:none'>",
			"<form>",
				"<table>",
					"<tr>",
						"<td>",
							"<input type='text' class='standardInput' placeholder='Enter name of note here' required='required' name='name'/>",
						"</td>",
						"<td>",
							"<input type='submit' onclick='saveNote();return false;' class='standardButton' value='Save'/>",
						"</td>",
						"<td>",
							"<button class='standardButton cancel' onclick='removeCurrentNote();return false;'>Cancel</button>",
						"</td>",
					"</tr>",
				"</table>",				
				"<div id='container'>",
				  "<canvas id='imageView' width='400' height='300'>",
				  "</canvas>",
				"</div>",	
				"<p>",
					"<label>Drawing tool: <select id='dtool' class='standardInput' >",
					"<option value='line'>Line</option>",
					"<option value='rect'>Rectangle</option>",
					"<option value='pencil'>Pencil</option>",
					"</select></label>",
				"</p>",				
			"</form>",
		"</div>"
	].join("");	
}

function newCanvasNote() {	
	$(".textNote, .canvasNote").hide("slow");
	currentNoteId = (autoIncNoteId++);
	$("#noteEditZone").append(generateCanvasNotHTML("" + currentNoteId));
	initCanvasNote("" + currentNoteId);
	$("#" + currentNoteId).addClass("new");
	$("#" + currentNoteId).show("slow");
}