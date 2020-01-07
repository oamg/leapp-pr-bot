import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('pull_request.opened', async (context) => {
    const welcomeString: string = 'Thanks for opening this pull request!'
    const issueComment = context.issue({ body: welcomeString })
    await context.github.issues.createComment(issueComment)
  })
}
