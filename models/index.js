const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});
//ask about belongsTo vs hasOne for Post 

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };