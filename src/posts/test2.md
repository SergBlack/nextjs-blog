---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

```js
const startServer = async () => {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use('/users', usersRouter);
  app.use('/groups', groupsRouter);
  app.use('/userGroup', userGroupsRouter);

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the users API!');
  });

  app.get('*', (req, res) => {
    res.status(404).json({ error: 'No such route exists!' });
  });

  app.listen(PORT, () => {
    Logger.log(`Server running on port: http://localhost:${PORT}`);
  }).on('error', (err: Error) => {
    Logger.error(err);
    process.exit(1);
  });
};
```

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
