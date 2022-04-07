const jokEle = document.getElementById('joksey');
var count = 0;
var ia = [];

function counter() {
    // // var count = 0;
    count += 1;
    console.log(count);
    piCake();

}


function piCake() {

    const url = 'https://icanhazdadjoke.com/'
    const con = {
        headers: {
            Accept: 'application/json',

        },
    }

    fetch(url, con)
        .then((resp) => resp.json())
        .then(data => {
            var text = data.joke;
            jokEle.innerHTML = text;
            var ti = data.id;
            ia.push(ti + " : " + text)
                // console.log(data);
        })
    console.log(ia);
}