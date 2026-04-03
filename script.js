

const users = [
    { name: 'Ali', address: 'Karachi' },
    { name: 'Saqib', address: 'Peshawar' },
    { name: 'Haider', address: 'Islamabad' },
    { name: 'Jamal', address: 'Peshawar' }
]

const arr = users.find((user) => {
    return user.address === 'Peshawar';
})
console.log(arr);