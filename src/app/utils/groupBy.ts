const groupBy = <T, K>(arr: T[], getKey: (item: T) => K): Map<K, T[]> => {
  return arr.reduce((map: Map<K, T[]>, item: T) => {
    const key = getKey(item)
    const list = map.get(key) || []
    return map.set(key, [...list, item])
  }, new Map<K, T[]>())
}

export { groupBy }
