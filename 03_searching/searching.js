let arr = ['HTML+CSS+JavaScript 980', 'HTML 199', 'CSS 299', 'Vue 599', 'CSS+HTML 299', 'React 999', 'JavaScript 399', 'JavaScript Advance 899'];

// 逻辑：1.先完成 展示区域的显示或隐藏

let input = document.getElementById('val');
let show = document.getElementById('show');
input.onkeyup = function () {
    show.style.display = 'block';
    // input.value 和 arr的每一项进行匹配 indexOf() 匹配不到-1
    let str = '';
    arr.forEach((item) => {
        let res = item.indexOf(input.value);
        if (res != -1) {
            str += '<p>' + item + '</p>';
        }
    })

    // 如果input.value为空或者 str为false 给用户一个提示
    if (!input.value || !str) {
        show.innerHTML = '<p>-- Search Not Found --</p>'
    } else {
        show.innerHTML = str;
    }
}
input.onblur = function () {
    show.style.display = 'none';
    input.value = '';
}


