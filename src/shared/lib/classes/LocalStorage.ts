export class LocalStorage {
  public static getItem<T = unknown>(key: string): T | null {
    const item = localStorage.getItem(key)
    if (item) {
      try {
        return JSON.parse(item)
      } catch (e) {
        console.error('Error parsing JSON from localStorage', e)
        return item as T
      }
    }
    return null
  }
  public static setItem<T>(key: string, value: T): void {
    const item = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, item)
  }
}
