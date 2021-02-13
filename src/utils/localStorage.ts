enum StorageValues {
  WATCH = 'STORAGE/WATCH_LATER',
  FAVOURITE = 'STORAGE/FAVOURITE',
}

const getStorageValue = (key: StorageValues): string | null => {
  const value = localStorage.getItem(key)

  if (!value) {
    return null
  }

  return value
}

const getAllStorageVars = () => ({
  watchLater: getStorageValue(StorageValues.WATCH),
  favourite: getStorageValue(StorageValues.FAVOURITE),
})

export { getAllStorageVars }
