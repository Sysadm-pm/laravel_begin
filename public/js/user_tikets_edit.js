
<script>

function up() {
    $("#file1").trigger('click');
}
function drag_drop(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];

    var formdata = new FormData();
    formdata.append("attach", file);
    formdata.append("action", "addFile");

    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "/user/tikets/<?=App::getRouter()->getAction()?>/<?=App::getRouter()->getParams()['0']?>/upload");
    ajax.send(formdata);
}
function _(el){
    return document.getElementById(el);
}
$('#upload_form input[type=file]').change(function() {
    var file = _("file1").files[0];
    var formdata = new FormData();
    formdata.append("attach", file);
    formdata.append("action", "addFile");

    var ajax = new XMLHttpRequest();
    //console.log(ajax);
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "/user/tikets/<?=App::getRouter()->getAction()?>/<?=App::getRouter()->getParams()['0']?>/upload");
    ajax.send(formdata);
});
function formatBytes(a, b) {
    if (0 == a) return "0 Bytes";
    var c = 1024, d = b || 2, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}
function progressHandler(event){
    _("loaded_n_total").innerHTML = "Uploaded: <b style='color: #08670a'>"+(formatBytes(event.loaded, 3))+"</b> bytes of <b style='color: darkred'>"+formatBytes(event.total, 3)+"</b>";
    var percent = (event.loaded / event.total) * 100;
    $( "#progress-bar-wrapper" ).addClass('active');
    $( "#progress-bar" ).removeClass('progress-bar-danger');
    $( "#progress-bar" ).addClass('progress-bar-info');

    _("progress-bar").style.width = Math.round(percent)+"%";

    _("status").innerHTML = Math.round(percent)+"% uploaded... please wait";
}
function completeHandler(event){
    if(~event.target.responseText.indexOf("ERROR")){
        $( "#progress-bar" ).addClass('progress-bar-danger');
        $( "#progress-bar-wrapper" ).removeClass('active');

        _("status").innerHTML = "<b><h2>Помилка!</h2></b><br><b>Файл не відповідає вимогам сервера.<br>Завантажте інший файл.</br><br>Максимальний розмір не більше: "+formatBytes(104857600, 3);
    }else
    {
        _("status").innerHTML = event.target.responseText;
        $( "#progress-bar" ).removeClass('progress-bar-danger');
        $( "#progress-bar-wrapper" ).removeClass('active');
        $( "#progress-bar" ).removeClass('progress-bar-info');
        loadDoc();
    }
}
function errorHandler(event){
    _("status").innerHTML = "Upload Failed";
    document.getElementById("progress-bar").style.width = "1%";
    $( "#progress-bar" ).addClass('progress-bar-danger');
    $( "#progress-bar-wrapper" ).removeClass('active');
}
function abortHandler(event){
    _("status").innerHTML = "Upload Aborted";
    $( "#progress-bar" ).addClass('progress-bar-danger');
    $( "#progress-bar-wrapper" ).removeClass('active');
}
loadDoc();
// setInterval( function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML = this.responseText;
//
//             // var myObj = JSON.parse(this.responseText);
//             // console.log(myObj[0].name);
//             // document.getElementById("demo").innerHTML = myObj[0].name;
//         }
//     };
//     xhttp.open("GET", "/user/tikets/<?=App::getRouter()->getAction()?>/<?=App::getRouter()->getParams()['0']?>/showFiles", true);
//     xhttp.send();
// }, 5000);

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/user/tikets/<?=App::getRouter()->getAction()?>/<?=App::getRouter()->getParams()['0']?>/showFiles", true);
    xhttp.send();
}

function fileAction(action,id) {
    var queryString;

    switch (action) {
        case "delete":
            queryString = 'action=' + action + '&fid=' + id;
            break;
    }
    $.ajax({
        url: "/user/tikets/<?=App::getRouter()->getAction()?>/<?=App::getRouter()->getParams()['0']?>/fileAction",
        data: queryString,
        processData: false,
        type: "POST",
        success:function(data){
            switch(action) {
                case "delete":
                    setTimeout(function() {
                        //$('#fileBoxId_'+id).fadeOut();
                    }, 300 );

                    console.log(this.responseText);
                    break;
            }
            //var text = data.responseText;

        },
        error:function (){}
    }).done(function(data) {
        if(data == "OK")
        {
            $('#fileBoxId_'+id).fadeOut();
            alert( data+ " File was deleted!" );
            loadDoc();

        }else {
            alert("Status: " + data + " File not delited");
        }
    });

}


</script>

<script type="text/javascript">
    // function showEditBox(editobj,id) {
    //     $('#frmAdd').hide();
    //     $(editobj).prop('disabled','true');
    //     var currentMessage = $("#message_" + id + " .message-content").html();
    //     var editMarkUp = '<textarea rows="5" cols="80" id="txtmessage_'+id+'">'+currentMessage+'</textarea><button name="ok" onClick="callCrudAction(\'edit\','+id+')">Save</button><button name="cancel" onClick="cancelEdit(\''+currentMessage+'\','+id+')">Cancel</button>';
    //     console.log(currentMessage);
    //     $("#message_" + id + " .message-content").html(editMarkUp);
    // }
    // function cancelEdit(message,id) {
    //     $("#message_" + id + " .message-content").html(message);
    //     $("#message_"+id+" .btnEditAction").prop('disabled','');
    //     $('#frmAdd').show();
    // }
    function callCrudAction(action,id) {
        $("#loaderIcon").show();
        var queryString;
        switch(action) {
            case "add":
                queryString = 'action='+action+'&txtmessage='+ $("#txtmessage").val();
                break;
            case "edit":
                queryString = 'action='+action+'&message_id='+ id + '&txtmessage='+ $("#txtmessage_"+id).val();
                break;
            case "delete":
                queryString = 'action='+action+'&message_id='+ id;
                break;
            case "deleteFile":
                queryString = 'action='+action+'&message_id='+ id;
                break;
        }
        jQuery.ajax({
            url: "/user/tikets/<?=App::getRouter()->getAction()?>/<?=App::getRouter()->getParams()['0']?>/comments",
            data:queryString,
            type: "POST",
            success:function(data){
                switch(action) {
                    case "add":
                        //console.log(queryString);
                        setTimeout(function() {$("#comment-list-box").append(data);$('#loaderIcon').hide();}, 100);
                        break;
                    case "edit":
                        setTimeout(function() {$("#message_" + id + " .message-content").html(data);$('#frmAdd').show();$('#loaderIcon').hide();}, 100);
                        $("#message_"+id+" .btnEditAction").prop('disabled','');
                        break;
                    case "delete":
                        setTimeout(function() {$('#message_'+id).fadeOut();$('#loaderIcon').hide();}, 100);
                        break;
                    case "deleteFile":
                        setTimeout(function() {$('#fileBoxId_'+id).fadeOut();$('#loaderIcon').hide();}, 100);
                        console.log(queryString);
                        break;
                }
                $("#txtmessage").val('');
                $("#loaderIcon").hide();
            },
            error:function (){}
        });
    }
    </script>

