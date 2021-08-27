
const users = [{
    id: '1',
    name: 'Emre',
    email: 'emre@example.com',
    age: '22'
},{  
    id: '2',
    name: 'Elanor',
    email: 'elanor@example.com',
    age: '32'

},
{
    id: '3',
    name: 'Steve',
    email: 'steve@example.com',
    age: null
}]

const posts=[{
    id: '21',
    title: 'My First Posts Title',
    body: 'Hello there.',
    published: true,
    author: '1'
},{
    id: '22',
    title: 'My Second Posts Title',
    body: 'Hello there.',
    published: true,
    author: '1'
},{
    id: '23',
    title: 'My Third Posts Title',
    body: 'Hello there.',
    published: true,
    author: '2'
}]

const comments=[{
    id: '12',
    text: 'my first comment',
    author: '1',
    post: '22'
},{
    id: '13',
    text: 'my second comment',
    author: '2',
    post: '22'
},{
    id: '14',
    text: 'my third comment',
    author:'3',
    post:'23'
}]

const db= {
    users,
    posts,
    comments
}

export {db as default}