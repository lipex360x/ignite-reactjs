const { capitalize } = require('../_utils/textTransform')

module.exports = {
  description: 'Generate a Context',
  prompts: [
    {
      type: 'input',
      name: 'contextName',
      message: 'Context Name',
      // default: 'test',
      validate: (value) => {
        if (!value) return 'Value is required'

        return true
      }
    }

    // snippet: plopPromptTemplate
  ],

  actions: (data) => {
    const pathTemplate = './context/templates'
    const generatePath = '../../hooks/'

    const files = () => {
      const arrayFiles = []

      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: `use${capitalize(data.contextName)}.tsx`,
        template: 'context.hbs',
        force: false
      })

      // snippet: plopFilesTemplate

      return arrayFiles
    }

    // Create Files
    const action = []

    files().forEach(file => {
      const createFile = {
        type: 'add',
        path: `${file.path}/${file.name}`,
        data: file.data,
        templateFile: `${pathTemplate}/${file.template}`,
        // force: !!file.force
        force: true
      }

      action.push(createFile)
    })

    // Message
    const message = () => (`Context ${data.contextName} created`)
    action.push(message)

    return action
  }
}
