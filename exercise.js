
function repeatHello(callback) {
    setInterval(() => {
        console.log("Hello");
        callback()
    }, 1000);

    // setInterval(function () {
    //     console.log("Hello");   (Same result)
    //     callback()
    // }, 1000)

}

repeatHello(function () { })