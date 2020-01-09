import { Application } from 'probot' // eslint-disable-line no-unused-vars

const welcomeMessage: string = `Thank you for contributing to Leapp project!

Please note that every PR needs to comply with the [Leapp Guidelines](https://github.com/oamg/leapp-guidelines), pass tests and linter check before it can be merged.
If you want to re-run tests or request review, you can use following commands as a comment:
- "leapp-ci build" - runs unit tests
- "please review" - notifies leapp developers of review request
- "e2e tests" - runs unit tests and end-to-end tests (oamg members only)`

export = (app: Application) => {
  app.on('pull_request.opened', async (context) => {
    const issueComment = context.issue({ body: welcomeMessage })
    await context.github.issues.createComment(issueComment)
  })
}
