const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

// Attach event listeners for delete actions
Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteRapper)
})

// Attach event listeners for like actions
Array.from(thumbText).forEach((element) => {
    element.addEventListener('click', addOneLike)
})

// Function to handle deleting a rapper
async function deleteRapper() {
    const sName = this.parentNode.childNodes[1].innerText.trim()
    const bName = this.parentNode.childNodes[3].innerText.trim()
    console.log('Attempting to delete:', sName, bName)  // Debugging line

    try {
        const response = await fetch('/deleteRapper', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName
            })
        })
        const data = await response.json()
        console.log(data)  // Verify response
        location.reload()  // Reload to reflect changes
    } catch (err) {
        console.error('Error deleting rapper:', err)
    }
}

// Function to handle adding a like
async function addOneLike() {
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    const tlikes = Number(this.parentNode.childNodes[5].innerText)
    console.log('Attempting to add like to:', sName, bName, tlikes)  // Debugging line

    try {
        const response = await fetch('/addOneLike', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName,
                'likesS': tlikes
            })
        })
        const data = await response.json()
        console.log(data)  // Verify response
        location.reload()  // Reload to reflect changes
    } catch (err) {
        console.error('Error adding like:', err)
    }
}
