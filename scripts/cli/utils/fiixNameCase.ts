import { templateMap } from './templateMap'

type FileType = keyof typeof templateMap

function toPascalCase(input: string): string {
  return input
    .replace(/[-_ ]+/g, ' ') // normalize delimiters
    .replace(/([a-z])([A-Z])/g, '$1 $2') // split camelCase
    .split(/\s+/) // split words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export function fixNameCase(name: string, type: FileType): string {
  switch (type) {
    case 'component':
      return toPascalCase(name)
    case 'class':
      return toPascalCase(name)
    case 'interface':
      return 'I' + toPascalCase(name)
    default:
      throw new Error(`Unknown type: ${type}`)
  }
}
