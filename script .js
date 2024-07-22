function toggleFriend(buttonClass, paraClass , boxclass , imgtag) {
    let button = document.querySelector(buttonClass);
    let para = document.querySelector(paraClass);
    let box = document.querySelector(boxclass)
    let img = document.querySelector(imgtag)
    let check = 1;

    button.addEventListener("click", function () {
        if (check == 1) {
            para.innerHTML = "Friend";
            para.style.color = "green";
            button.innerHTML = "Remove";
            button.style.backgroundColor = "gray";
            box.style.backgroundColor = "red";
            img.style.borderRadius = '50%';
            check = 0;
        } else {
            para.innerHTML = "Stranger";
            para.style.color = "red";
            button.innerHTML = "Add Friend";
            button.style.backgroundColor = "green";
            box.style.backgroundColor = "white"
            img.style.borderRadius = '12%' ;
            check = 1;
        }
    });
}

toggleFriend('.btn', '.para' , '.box', '.mini img');
toggleFriend('.btn1', '.para1' , '.box1', '.mini1 img');
toggleFriend('.btn2', '.para2', '.box2' ,'.mini2 img');
toggleFriend('.btn3', '.para3', '.box3' ,'.mini3 img');