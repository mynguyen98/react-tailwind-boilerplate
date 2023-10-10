export const getItemFromLocalstorage = (itemName) => {
  const result = localStorage.getItem(itemName)
  if (result) {
    return JSON.parse(result)
  } else {
    return null
  }
}
