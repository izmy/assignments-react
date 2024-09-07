const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

// custom route for setting item as done with timestamp
server.patch("/items/:id/done", (req, res, next) => {
    const db = router.db
    const id = Number(req.params.id);

    const item = db.get('items').find({ id }).value();

    if (item == null) {
        res.status(404);
        res.locals.data = { message: 'Item not found' }
    } else {
        const updates = db.get('items')
        .upsert({ ...item, isDone: true, finishedAt: Date.now() })
        .write()
  
    
      res.status(200)
      res.locals.data = updates
    }

    next()
})

server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
        req.body.isDone = false;
    }

    if (req.method === "PATCH") {
        if (req.body.isDone === false) {
            req.body.finishedAt = undefined;
        }
    }
    
    next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
