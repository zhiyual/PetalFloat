# PetalFloat
PetalFloat是一个Web前端花瓣飘落效果插件
### 使用方法
* 引入petalfloat.js
```
<script src="js/petalfloat.js" type="text/javascript"></script>
```
* 添加如下代码
```
<script type="text/javascript">
  var pf = new PF();
  pf.init();
  pf.start();
</script>
```
* 参数设置
```
new PF({
	index : 100,
	life : 80,
})
```
|参数|类型|默认值|备注|
|-|-|-|-|
|index|int|99999|画布的层级（z-index）|
|life|int|30|花瓣的存在时间（单位：帧）|
* 自适应窗口变化  
&emsp;&emsp;如果需要画布响应浏览器窗口的变化，需添加如下代码：
```
window.addEventListener("resize", function () {
	pf.reSize();
})
```
### 效果预览
[https://zhiyual.github.io/PetalFloat/](https://zhiyual.github.io/PetalFloat/)
