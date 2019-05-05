/**
 * Created by chenshanshan on 2019/5/5.
 */
    //自调用函数---->食物
    //食物（一个对象）：宽，高，横纵坐标
(function () {
    var elements = [];

    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    }

    //设置小方块样式
    Food.prototype.init = function (map) {
        //先删除食物，外部无法访问这个函数
        remove();
        //创建div（食物）
        var div = document.createElement("div");
        map.appendChild(div);
        //食物样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        //随机横纵坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";

        //把div加入到数组elements中
        elements.push(div);
    };

    //私有函数---->删除食物
    function remove(){
        for(var i=0;i<elements.length;i++){
            var ele=elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i,1);
        }
    }


    //将Food构造函数暴露给window
    window.Food = Food;

}());