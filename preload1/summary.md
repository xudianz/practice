## 事件代理方式进行绑定
## mouseenter和mouseover的区别
  使用mouseover/mouseout时，如果鼠标移动到子元素上，即便没有离开父元素，也会触发父元素的mouseout事件。

  使用mouseenter/mouseleave时，如果鼠标没有离开父元素，在其子元素上任意移动，也不会触发mouseleave事件。

## 基于用户行为预测的切换技术
  跟踪鼠标的移动
  用鼠标的当前位置，和鼠标上一次位置与子菜单上下边缘形成的三角形区域进行比较
# 如何比较
  向量：Vab = Pa - Pb
  二维向量叉乘公式： a(x1, y1) X b(x2, y2) = x1y2 - x2y1
  用叉乘法判断点在三角形内：