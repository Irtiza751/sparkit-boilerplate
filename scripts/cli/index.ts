import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { generateFile } from './utils/generateFile'
import { templateMap } from './utils/templateMap'
import { fixNameCase } from './utils/fiixNameCase'

yargs(hideBin(process.argv))
  .command(
    'g [type] [name]',
    'Generate a new component, interface, or class',
    (yargs) => {
      return yargs
        .positional('type', {
          describe: 'Type to generate (component | interface | class)',
          type: 'string',
        })
        .positional('name', {
          describe: 'Name of the item',
          type: 'string',
        })
        .option('dry-run', {
          alias: 'dr',
          type: 'boolean',
          default: false,
          describe: 'Preview the output without creating the file(s)',
        })
    },
    async (argv) => {
      const { type, name, dryRun } = argv
      if (!type || !name) {
        console.error('Please provide both type and name')
        return
      }
      const fileName = fixNameCase(name, type)
      const templatePath = `templates/${type}.ejs`
      const outputPath = `${templateMap[type]}/${fileName}.ts${type === 'component' ? 'x' : ''}`

      await generateFile(templatePath, outputPath, { name: fileName }, dryRun || false)
    },
  ) // this line 38
  .demandCommand()
  .help()
  .parse()
