$(function() {
	var taskTemplate = $("#task-template").html();

	$("#tasks").sortable();

	$(".add-task").on("click", function() {
		$("#tasks").append(taskTemplate);

		return false;
	});

	$(".task-effort").on("keyup", function() {
		console.log("foo");
	});
});
