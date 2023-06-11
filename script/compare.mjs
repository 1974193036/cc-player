// 比较两个版本号之间的大小
export function compareVersion(newV, oldV) {
  const newVArray = newV.split('.').map((item) => parseInt(item, 10))
  const oldVArray = oldV.split('.').map((item) => parseInt(item, 10))
  for (let i = 0; i < Math.min(newVArray.length, oldVArray.length); i++) {
    if (newVArray[i] > oldVArray[i]) {
      return 1
    } else if (newVArray[i] < oldVArray[i]) {
      return -1
    } else {
      continue
    }
  }
  return newVArray.length < oldVArray.length ? -1 : newVArray.length === oldVArray.length ? 0 : 1
}
