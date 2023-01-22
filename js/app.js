// var
let bodyBg = document.body,
    title = document.querySelector('.content__text'),
    result = document.querySelector('.content__result--text'),
    btn = document.querySelector('.content__btn'),
    rgb = [],
    copyBtn = document.querySelector('.copy--btn'),
    notification = document.querySelector('.notif');

// random color
btn.onclick = function () {
    for (let i = 0; i < 7; i++) {
        randomNum = Math.floor(Math.random() * 255 + 1).toString();
        rgb.push(randomNum)
    }
    title.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    bodyBg.style.background = `linear-gradient(${rgb[0]}deg, rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), rgb(${rgb[3]}, ${rgb[4]}, ${rgb[5]}))`;
    rgb = []
    result.innerText = `${bodyBg.style.background.valueOf()}`
    result.style.marginLeft = '0px'
    result.style.marginRight = 'auto'
    copyBtn.style.display = 'block'
    
}

// 'copy function'dan foydalanilgan!🌐
copyBtn.onclick = function () {
    let text = result.innerText;
    let textArea = document.createElement('textarea');
    textArea.width = "1px";
    textArea.height = "1px";
    textArea.background = "transparents";
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setTimeout(() => {
        notification.style.display = 'block';
        notification.classList.add('animate__fadeInDown');
    }, 300);
    setTimeout(() => {
        notification.classList.remove('animate__fadeInDown');
        notification.classList.add('animate__bounceOut');
    }, 1500);
    notification.style.display = 'none';
    notification.classList.remove('animate__bounceOut');
}