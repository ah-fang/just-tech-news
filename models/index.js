const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});
//ask about belongsTo vs hasOne for Post 
module.exports = { User, Post };