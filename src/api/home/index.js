import { Router } from 'express'

const router = Router()

router.get('/', (req,res) => {
    res.render('home/home', {
        helpers: {
            message: 'Welcome to your Express - Babel App'
        }
    })
})

export default router