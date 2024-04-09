
const REQUEST_WAS_REJECTED_BY_SERVER = 'Request was rejected'

let data
let comments = []
const getPostsByThen = () => {
    const onResolvePosts = res => res.json()
    const onRejectPosts = e => console.log(e);
    const response = fetch('https://jsonplaceholder.typicode.com/posts')
    response.then(onResolvePosts, onRejectPosts)
        .then(newData => {
            data = newData
            console.log(data);
        })
}

const promise = new Promise((res, rej) => {
    throw 'asd'
})



getPostsByThen()
const getPostsByAsync = async () => {
    try {
        try {
            response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.jon()
            if (!data.isSuccess) {
                throw REQUEST_WAS_REJECTED_BY_SERVER
            }
        } catch (e) {
            console.log(e);
            console.log('hello');
            switch (e) {
                case REQUEST_WAS_REJECTED_BY_SERVER:
                    const newData = await fetch('https://jsonplaceholder.typicode.com/posts')
                    console.log(await newData.json(), 'work!')
                    break
                default:
                    console.log('Unexpected error');
                    throw 'q'
            }
        }
    } catch (e) {
        console.log('megacatch', e);
        throw 'qqqqqqqqqqqqq'
    }
}


let gigaComments

const getPostsWithComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    const commentsPromises = posts.map(post =>

        fetch(`https://jsonp${post.id % 2 ? 'l' : ''}aceholder.typicode.com/comments?postId=${post.id}`))

    const allCommentsWithErrors = await Promise.allSettled(commentsPromises)
    console.log(allCommentsWithErrors.filter(promise => promise.status === 'rejected'));


    const commentsResponses = await Promise.all(commentsPromises)
    const commentsJsonPromises = commentsResponses.map(resp => resp.json())
    const commentsData = await Promise.all(commentsJsonPromises)


    // posts {id} // comments {id, postId} === posts {id, comments > postId === id}

    // const theFastest = await Promise.race(commentsPromises)
    // console.log(await theFastest.json(), '123');




    gigaComments = commentsData
    return commentsData.flat()

}

console.log(gigaComments, '1');


// const injectCommentsIntoPage = async() => {
//     const comments = await gigaComments
//     comments.forEach(comment => document.body.append(comment.body))

// }
// injectCommentsIntoPage()


window.addEventListener('click', () => {

    const getData = async () => {
        console.log(gigaComments, '2');
        const comms = await getPostsWithComments()
        console.log(comms, 'coms');
    }

    getData()
});


// (async () => {

//     const response =await fetch('https://jsonplaceholder.typicode.com/posts/3')
// })()

// let getFullPosts = async () => {
//     let promisePostsReq = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let posts = await promisePostsReq.json();

//     let promiseCommentsReq = await fetch('https://jsonplaceholder.typicode.com/comments');
//     let comments = await promiseCommentsReq.json();

//     return posts.map(post => {
//         let commentsForPost = comments.filter(comment => comment.postId === post.id);
//         return {...post, comments: commentsForPost};
//     })
// }

// let getFullPosts = async () => {
//     const [promisePostsReq, promiseCommentsReq] =await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/posts'),
//         fetch('https://jsonplaceholder.typicode.com/comments')
//     ])

//     const [posts, comments] = await Promise.all([
//         promisePostsReq.json(),
//         promiseCommentsReq.json()
//     ])


//     return posts.map(post => ({
//         ...post,
//          comments: comments.filter(comment => comment.postId === post.id)
//         }))
// }

console.log('start')
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
promise1.then(res => {
    console.log(res)
})
console.log('end')

// start, 1, 2 ,end
// start, 1, end, 2