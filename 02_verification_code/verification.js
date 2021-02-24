// 1.Generate Verification Code
// random 6 digits string  0-9 a-f 
// 数组 下标 0、1、2……    从数组当中 随机下标 0-15位

// 2.compare and verify when click submit

window.onload = function () {
    var res = getCode();
    function getCode() {
        var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        var str = '';
        for (var i = 0; i < 6; i++) {
            var num = Math.round(Math.random() * (15 - 0) + 0);
            str += arr[num];
        }
        return str;
    }
    document.getElementById('checkCode').innerText = res;
    // 点击事件
    document.getElementById('linkbt').onclick = function () {
        document.getElementById('checkCode').innerText = getCode();
    }


    // 提交进行对比
    document.getElementById('Button1').onclick = function () {
        var code = document.getElementById('checkCode').innerText;
        var inputCode = document.getElementById('inputCode').value;
        if (code != inputCode) {
            alert('您输入的验证码不正确');
            document.getElementById('inputCode').value = '';
            return false;
        }
    }
}
