var t1 = new Date(2017, 3, 31, 19, 30, 0, 0);

function timer() {
    var dif = new Date().getTime() - t1.getTime();

    return dif / 1000;
}
