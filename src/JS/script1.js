$(document).ready(function () {
    let update_type = "";
    $("#update").hide();
    $("#income_detail").hide();
    fillIncome();
    filltxns();
    if($("#total_expense").val()>0){
        $("#record_table").show();
    }else{
        $("#record_table").hide();
    }
    $("#exp").click(function () {
        $("#income_detail").hide();
        $("#expense_detail").show();
    })
    $("#inc").click(function () {
        $("#income_detail").show();
        $(".update_inc").hide();
        $("#expense_detail").hide();
    })
    $("#expense_add").click(function () {
        let value = $("#expense_amt").val();
        let type = $("#expense_type").val();
        if (value > 0) {
            $(".msg").text("");
            $.ajax({
                url: 'addexp.php',
                type: 'post',
                data: 'key=' + value + "/" + type,
                datatype: 'text'
            }).done(function (value) {
                fillIncome();
                filltxns();
                $("#record_table").show();
                console.log(value);
            })
        } else {
            $(".msg").text("Value must be greater than zero").css("color", "red");
        }
    })
    $("#income_add").click(function () {
        let value = $("#income_amt").val();
        let type = "income";
        if (value > 0) {
            $(".msg").text("");
            $.ajax({
                url: 'addexp.php',
                type: 'post',
                data: 'key=' + value + "/" + type,
                datatype: 'text'
            }).done(function (value) {
                fillIncome();
                filltxns();
                console.log(value);
            })
        } else {
            $(".msg").text("Value must be greater than zero").css("color", "red");
        }
    })
})
function fillIncome() {
    $.ajax({
        url: 'totalIncome.php',
        async: false,
    }).done(function (result) {
        $("#total_income").val(result);
    })
    $.ajax({
        url: 'totalExpence.php',
        async: false,
    }).done(function (result) {
        console.log(result);
        let arr=result.split("/");
      $("#total_expense").val(arr[0]);
      $(".tbody").html("<tr><td>"+arr[1]+"</td><td>"+arr[2]+"</td><td>"+arr[3]+"</td><td>"+arr[4]+"</td></tr>");
    })
    $("#remaining").val($("#total_income").val() - $("#total_expense").val());
}
function filltxns() {
    $.ajax({
        url: 'txns.php',
        type: 'post'
    }).done(function (value) {
        $("#txns").html(value);
    })
}
function deleteData(value) {
    //console.log(value.id);
    let id = value.id;
    $.ajax({
        url: 'remove.php',
        type: 'post',
        data: 'key=' + id,
    }).done(function (value) {
        console.log(value);
        filltxns();
        fillIncome();
    })
}

function editData(value) {
    $.ajax({
        url: "edit.php",
        type: "post",
        data: "key=" + value.id,
        datatype: "text",
    }).done(function (value) {
        $("#update").show();
        let arr = value.split("=>");
        update_type = arr[0];
        if (arr[0] == "income") {
            $("#income_add").hide();
            $("#income_detail").show();
            $("#expense_detail").hide();
            $(".update_inc").show();
            $("#income_amt").val(arr[1]);
        } else {
            console.log("expense");
            $("#expense_add").hide();
            $("#income_detail").hide();
            $("#expense_detail").show();
            $("#expense_amt").val(arr[1]);
            $("#expense_type").val(arr[0]);
            $('#expense_type option[value=' + arr[0] + ']').attr('selected', true);
        }
    });
}
$("#update").click(function () {
    let amt, type;
    if (update_type == "income") {
        amt = $("#income_amt").val();
        type = "income";
    } else {
        amt = $("#expense_amt").val();
        type = $("#expense_type").val();
    }
    if (amt > 0) {
        $(".msg").text("");
        $.ajax({
            url: 'update.php',
            type: 'post',
            data: "key=" + type + "=>" + amt,
            datatype: 'text'
        }).done(function (value) {
            console.log(value);
            filltxns();
            fillIncome();
        })
    } else {
        $(".msg").text("Value must be greater than zero").css("color", "red");
    }
})