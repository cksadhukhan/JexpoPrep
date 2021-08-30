export function getGreet() {
  const today = new Date()
  const time = today.getHours()

  if (time >= 5 && time < 12) {
    return 'Good Morning'
  } else if (time >= 12 && time < 17) {
    return 'Good Afternoon'
  } else if (time >= 17 && time < 22) {
    return 'Good Evening'
  } else if (time >= 22 && time < 24) {
    return 'Good Night'
  } else if (time >= 0 && time <= 5) {
    return 'Good Night'
  } else return 'Good Morning'
}
