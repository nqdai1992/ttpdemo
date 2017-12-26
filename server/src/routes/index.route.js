import express from 'express'
import adminRoutes from './admin.route'
import authRoutes from './auth.route'
import productRoutes from './product.route'
import categoryRoutes from './category.route'
import blogRoutes from './blog.route'
import imageRoutes from './image.route'
import displayRoutes from './display.route'

const router = express.Router()

router.use('/admin', adminRoutes)

router.use('/auth', authRoutes)

router.use('/product', productRoutes)

router.use('/category', categoryRoutes)

router.use('/blog', blogRoutes)

router.use('/image', imageRoutes)

router.use('/display', displayRoutes)

export default router
