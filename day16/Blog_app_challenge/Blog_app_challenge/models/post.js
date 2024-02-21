

const fs = require('fs');
const path = require('path')
const filepath = path.join(__dirname, '../posts.json')

//! function to retrieve all posts 
function getallposts(filepath) {
    const data = fs.readFileSync(filepath, 'utf-8')
    return JSON.parse(data);
}
//! function to write in the posts data
function writeindata(data) {
    fs.writeFileSync(filepath, JSON.stringify(data));
}

module.exports = { getallposts, writeindata };
