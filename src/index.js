export const users = {
    4 : 'mark',
    5 : 'roy'
}

export default function testUser(userId) {
    return new Promise((resolve, reject) => {
        if(userId === 4 || userId === 5 ){
            resolve(users[userId])
        }else{
            reject(`user with id : ${userId} not found`)
        }
    })
}

