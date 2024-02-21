const { getallposts, writeindata } = require('../models/post.js');
//! function to display all posts 
function displayposts() {
    return getallposts();
}
//! function to create new post
function createpost(post) {
    const allposts = getallposts();
    const Id = allposts[allposts.length - 1] + 1;
    const newPost = { id: Id, ...post };
    allposts.push(newPost);
    writeindata(allposts);
    return newPost;
}
//! function to update a post 
function updatepost(Id, updatedpost) {
    const allposts = getallposts();
    const index = allposts.findIndex(post => post.id == Id);
    if (index === -1) {
        throw new Error('oops the post to update was not found ');
    }
    allposts[index] = { ...allposts[index], ...updatedpost };
    writeindata(allposts);
    return allposts[index];
}
//! function to delete a post 
function deletepost(id) {
    const allposts = getallposts();
    const index = allposts.findIndex(post => post.id === id);
    if (index == -1) {
        throw new Error('Post not found');
    } else {
        allposts.splice(index, 1);
        writeindata(allposts);
        return true;
    }
}
module.exports = { displayposts, createpost, updatepost, deletepost };
