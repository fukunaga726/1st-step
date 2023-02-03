"use strict";


// ３分割
// ⓵ボタンを作る　✅

// ➁ボタンを押したら文字が表示されるようにする
// ・何も表示のない画面を作る /pタグの中身を空白に✅
// ・HTMLのbottun要素を取得　/incrementをgetElementByIdで取得✅
// ・クリックしたらJSが反応するようにする　/addEventListener(click,~ ✅
// ・クリックしたら１（数字）が表示されるようにする ここで数字登場/document.write:使用禁止　✅

// ⓷ボタンを押したら文字が増えるようにする
// ・htmlの数字とJSを紐づける　/innerHTML? getErementById? 空欄に対してDOM操作 ✅
// ・クリックしたら数字が1ずつふえるようにする /1に対して++     let i = 1
    // count.innerHTML = i ++;

// ・それが画面に反映されるようにする（紐づけで解決？）/何か処理を呼び出す必要がある？

const button = document.getElementById("increment");

let i = 1;

button.addEventListener("click", ()=>{

    const count = document.getElementById("counter");
    // ここから上は大丈夫そう
    count.innerHTML = i;
    i++;
   
})


