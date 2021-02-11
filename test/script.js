let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);      
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();

});
