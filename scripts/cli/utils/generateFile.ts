import fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'

// Handle __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function generateFile(templatePath: string, outputPath: string, data: unknown) {
  const fullTemplatePath = path.resolve(__dirname, '..', templatePath)
  console.log({ fullTemplatePath })
  const fullOutputPath = path.resolve(process.cwd(), outputPath)

  const content = await ejs.renderFile(fullTemplatePath, data)

  const dir = path.dirname(fullOutputPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(fullOutputPath, content, 'utf-8')
}
