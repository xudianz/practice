/**
 * 坐标转换为向量
 */
function vector (a, b) {
  return {
    x: b.x - a.x,
    y: b.y - a.y
  }
}
/**
 * 向量叉乘公式
 */
function vectorProduct (v1, v2) {
  return v1.x * v2.y - v1.y * v2.x
}

/**
 * 判断点P是否在三角形ABC内部
 */
function isPointInTrangle (p, a, b, c) {
  var pa = vector(p, a)
  var pb = vector(p, b)
  var pc = vector(p, c)

  t1 = vectorProduct(pa, pb)
  t2 = vectorProduct(pb, pc)
  t3 = vectorProduct(pc, pa)

  return sameSign(t1, t2) && sameSign(t2, t3)
}

/**
 * 判断符号是否相同(位运算)
 */
function sameSign (a, b) {
  return (a ^ b) >= 0
}

/**
 * 是否需要延迟
 */

function needDelay (elem, leftCorner, currMousePos) {
  var offset = elem.offset()

  var topLeft = {
    x: offset.left,
    y: offset.top
  }

  var bottomLeft = {
    x: offset.left,
    y: offset.top + elem.height()
  }

  return isPointInTrangle(currMousePos, leftCorner, topLeft, bottomLeft)
}