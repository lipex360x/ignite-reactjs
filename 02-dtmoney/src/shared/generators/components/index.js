/* eslint-disable */
const { pascalCase } = require('../_utils/textTransform')

module.exports = {
  description: 'Generate a new Component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component Name',
      // default: 'test',
      validate: (value) => {
        if (!value) return 'Value is required'
        
        return true
      }
    }

    // snippet: plopPromptTemplate
  ],

  actions: (data) => {
    const pathTemplate = './components/templates'
    const generatePath = `../../components/${pascalCase(data.componentName)}`

    const files = () => {
      const arrayFiles = []

      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: 'index.tsx',
        template: 'components.hbs',
        force: false
      })
      
      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: 'styles.ts',
        template: 'styles.hbs',
        force: false
      })
      
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
    const message = () => (`Component ${data.componentName} added`)
    action.push(message)

    return action
  }
}
