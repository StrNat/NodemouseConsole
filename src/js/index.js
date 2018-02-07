var target = "http://" + NODEMOUSE_IPADDR + ":" + SOCKET_IO_PORT;

var socket = io.connect(target);

socket.on('connect', function (data) {
    document.getElementById("status").innerHTML = "接続中";
});

document.getElementById("target").innerHTML = NODEMOUSE_IPADDR;

var domLeftSensor = document.getElementById("left");
var domLeftFrontSensor = document.getElementById("leftfront");
var domRightSensor = document.getElementById("right");
var domRightFrontSensor = document.getElementById("rightfront");

socket.on('position', function (position) {　
    domLeftSensor.innerHTML = "左センサー" + position.sensor.left;
    domLeftFrontSensor.innerHTML = "左前センサー" + position.sensor.leftfront;
    domRightSensor.innerHTML = "右センサー" + position.sensor.right;
    domRightFrontSensor.innerHTML = "右前センサー" + position.sensor.rightfront;
});