require("")
document.onreadystatechange(function (ev) {
    var width = 300; //画布的宽度
    var height = 300; //画布的高度

    var svg = d3.select("body") //选择文档中的body元素
        .append("svg") //添加一个svg元素
        .attr("width", width) //设定宽度
        .attr("height", height); //设定高度
})