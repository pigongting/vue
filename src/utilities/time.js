export function currentHour () {
  const instance = new Date()
  const fullyear = instance.getFullYear()
  const month = instance.getMonth() + 1
  const date = instance.getDate()
  const hour = instance.getHours()
  const minute = instance.getMinutes()
  const result = new Date(
    fullyear + '-' + month + '-' + date + ' ' + hour + ' ' + minute + ':00'
  ).getTime()
  return result
}
