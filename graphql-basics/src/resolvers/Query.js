const Query= {
    comment(parent,args,{db},info){
        return db.comments
    },
    add(parent,args,ctx,info){
        if(args.numbers.length===0){
            return 0
        }
        
        return args.numbers.reduce((accumulator,currentValue) => {
            return accumulator + currentValue
        })
    },
    users(parent,args,{db},info){
        if(!args.query){
            return db.users
        }
        return db.users.filter((user)=>{
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent,args,{db},info){
        if(!args.query){
            return db.posts
        }
        return db.posts.filter((post)=>{
            const isTitle= post.title.toLowerCase().includes(args.query.toLowerCase())
            const isBody= post.body.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
            return isTitle || isBody
        })
    },
    me(){
        return {
            id:'139829',
            name:'Emre',
            email:'emre@example.com',
            age: null
        }
    },
    post(){
        return{
            id: '323234',
            title: 'Hello Everyone',
            body: 'This is the first post',
            published: true
        }
    }
}

export {Query as default}