$(function () {
    $(".alert").hide();

    $("#submitBtn").click(function () {

        var sendFlag = true;

        if (!$("#name").val()) {
            $("#nameSection .alert").show();
            sendFlag = false;
        } else {
            $("#nameSection .alert").hide();
        }

        if (!$("#email").val()) {
            $("#emailSection .alert").show();
            sendFlag = false;
        } else {
            $("#emailSection .alert").hide();
        }

        if (!$("#telephoneNumber").val()) {
            $("#telephoneSection .alert").show();
            sendFlag = false;
        } else {
            $("#telephoneSection .alert").hide();
        }

        if (!$("#message").val()) {
            $("#textAreaSection .alert").show();
            sendFlag = false;
        } else {
            $("#textAreaSection .alert").hide();
        }


        var radioChk = $('input[name="radio"]:checked').length;
        if (radioChk == 0) {
            $("#radioSection .alert").show();
            sendFlag = false;
        } else {
            $("#radioSection .alert").hide();
        }


        if (sendFlag == false) {
            return false;
        }
    });

    //  to-topボタンのスクロール

    $(".top-btn").hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {    //スクロール量が500以上になったら、
            $(".top-btn").fadeIn(500);       //.to-topを0.5秒かけてフェードインさせる。
        } else {                              //そうでなければ、
            $(".top-btn").fadeOut(500);      //.to-topを0.5秒かけてフェードアウトさせる。
        }
    });


    // スムーススクロール
    $(".top-btn").click(function () {                   //.to-topの中のaタグがクリックされたとき、
        $("html,body").animate({ scrollTop: 0 }, 500);    //0.5秒かけて画面の一番上までスクロールするアニメーションを実行
        return false;
    });


});