const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  note: {
    type: Sequelize.TEXT
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  upvotes: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Post
