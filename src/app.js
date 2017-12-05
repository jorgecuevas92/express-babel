import express from 'express'
import routes from './api'
import path from 'path'
import exphbs from 'express-handlebars'

const app = express()

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main'
}))
app.set('view engine', '.hbs')

// Public Folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', routes)

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
});

// Error handler
app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
  
    // Render the error page
    res.status(err.status || 500)
    res.send('error')
});

const { PORT = 8080 } = process.env

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app;
