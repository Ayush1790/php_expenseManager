let update_type = "";
$(document).ready(function () {
    $(".update").hide();
    $("#income_detail").hide();
    fillIncome();
    filltxns();
    // show expences
    if ($("#total_expense").val() > 0) {
        $("#record_table").show();
    } else {
        $("#record_table").hide();
    }
    $("#exp").click(function () {
        $("#income_detail").hide();
        $("#expense_detail").show();
    })
    //show income
    $("#inc").click(function () {
        $("#income_detail").show();
        $(".update_inc").hide();
        $("#expense_detail").hide();
    })
    //adding expences
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
            })
        } else {
            $(".msg").text("Value must be greater than zero").css("color", "red");
        }
    })
    //adding income
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
            })
        } else {
            $(".msg").text("Value must be greater than zero").css("color", "red");
        }
    })
})
// filling income detail
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
        let arr = result.split("/");
        $("#total_expense").val(arr[0]);
        $(".tbody").html("<tr><td>" + arr[1] + "</td><td>" + arr[2] + "</td><td>" + arr[3] + "</td><td>" + arr[4] + "</td></tr>");
    })
    $("#remaining").val($("#total_income").val() - $("#total_expense").val());
}
// displaying txns
function filltxns() {
    $.ajax({
        url: 'txns.php',
        type: 'post'
    }).done(function (value) {
        $("#txns").html(value);
    })
}
// delete data
function deleteData(value) {
    let id = value.id;
    $.ajax({
        url: 'remove.php',
        type: 'post',
        data: 'key=' + id,
    }).done(function (value) {
        filltxns();
        fillIncome();
    })
}
//edit data
function editData(value) {
    $.ajax({
        url: "edit.php",
        type: "post",
        data: "key=" + value.id,
        datatype: "text",
    }).done(function (value) {
        $(".update").show();
        let arr = value.split("=>");
        window.update_type = arr[0];
        if (arr[0] == "income") {
            $("#income_add").hide();
            $("#income_detail").show();
            $("#expense_detail").hide();
            $(".update_inc").show();
            $("#income_amt").val(arr[1]);
        } else {
            $("#expense_add").hide();
            $("#income_detail").hide();
            $("#expense_detail").show();
            $("#expense_amt").val(arr[1]);
            $("#expense_type").val(arr[0]);
            $('#expense_type option[value=' + arr[0] + ']').attr('selected', true);
        }
    });
}
// updation
$(".update").click(function () {
    let amt, type;
    if (window.update_type == 'income') {
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
            if (value == "income") {
                $("#income_add").show();
                $("#income_detail").show();
                $("#expense_detail").hide();
                $("#update_inc").hide();
                $("#income_amt").val("");
            } else {
                $("#expense_add").show();
                $("#income_detail").hide();
                $("#expense_detail").show();
                $("#update_exp").hide();
            }
            filltxns();
            fillIncome();

        })
    } else {
        $(".msg").text("Value must be greater than zero").css("color", "red");
    }
})