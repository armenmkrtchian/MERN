const {Router} = require('express')
const router = Router()


// /api/auth/register
router.post('register', async (req, res) => {
    try {
        const {email, password} = req.body

    } catch {
        res.status(500).jsin({ message: 'Something went wrong, please try again!' })
    }
})

// /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router