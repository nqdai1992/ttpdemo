import Joi from 'joi';

export default {
  // POST /api/admins
  createAdmin: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // UPDATE /api/admins/:adminId
  updateAdmin: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    },
    params: {
      adminId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // POST /api/product
  createProduct: {
    body: {
      code: Joi.string().required(),
      name: Joi.string().required(),
      category: Joi.string().required(),
      brand: Joi.string().allow(''),
      price: Joi.number().allow(''),
      availabitity: Joi.string().allow(''),
      condition: Joi.string().allow(''),
      specification: Joi.string().allow('')
    }
  },

  updateProduct: {
    params: {
      productId: Joi.string().hex().required()
    },
    body: {
      code: Joi.string(),
      name: Joi.string(),
      category: Joi.string(),
      brand: Joi.string().allow(''),
      price: Joi.number().allow(''),
      availabitity: Joi.string().allow(''),
      condition: Joi.string().allow(''),
      specification: Joi.string().allow(''),
      photos: Joi.string().allow('')
    }
  },

  createCategory: {
    body: {
      path: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().allow('')
    }
  },

  updateCategory: {
    params: {
      categoryPath: Joi.string().required()
    },
    body: {
      path: Joi.any().forbidden(),
      index: Joi.any().forbidden(),
      title: Joi.string(),
      description: Joi.string().allow('')
    }
  },

  createBlog: {
    body: {
      title: Joi.string().required(),
      content: Joi.any().required()
    }
  },

  updateBlog: {
    params: {
      blogId: Joi.string().required()
    },
    body: {
      title: Joi.string(),
      content: Joi.any()
    }
  }
}
