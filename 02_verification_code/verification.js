// 1.Generate Verification Code
// random 6 digits string  0-9 a-f 

// 2.compare and verify when click submit

window.onload = () => {
    let v_code = document.getElementById('vCode');
    let input = document.getElementById('inputCode');
    let info = document.getElementById('info');

    // generate random verification code
    randomCode();


    document.getElementById('refresh').onclick = () => randomCode();


    document.getElementById('inputCode').onfocus = () => {
        info.innerHTML = '';
    }

    document.getElementById('submitBtn').onclick = () => {
        if (v_code.innerText != input.value) {
            info.innerText = ('Your input is incorrect.');
            randomCode();
            input.value = '';
            // return false;
        } else {
            alert('Correct! Now direct to Homepage.')
            location.href = "http://yingyao.codes"
        }
    }

    function randomCode() {
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
        let str = '';
        for (let i = 0; i < 6; i++) {
            let num = Math.round(Math.random() * (16 - 0) + 0);
            str += arr[num];
        }

        v_code.innerText = str;
    }
}

