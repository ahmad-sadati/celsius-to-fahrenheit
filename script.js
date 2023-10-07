function run() {
    var x , y , z , f;
    x = document.getElementById("input").value;
    y = 1.8;
    z = 32;
    f = x * y + z;
    document.getElementById("output").innerHTML = f;
}