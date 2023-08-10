let isLoggedIn = 
let isAdmin = false
let isEditor = false
let isOwner = false

// console.log(typeof isLoggedIn)

if (isLoggedIn) {
    if (isAdmin) {
        console.log('The user is an admin. Show them the user admin dashboard.')
    } else if (isEditor) {
        console.log('The use is an editor. Show them the editor content.')
    } else if (isOwner) {
    console.log('The user is the owner. Show them everything.')
    } else {
        console.log('Something unexpected occured. Please try again.')
    }
} else {
    console.log('The user is not logged in. Redirect to sign-in page.')
}



