export const users = {
    4 : 'mark',
    5 : 'roy'
}

export default function testUser(userId) {
    return new Promise((resolve, reject) => {
        resolve(users[userId])
    })
}

