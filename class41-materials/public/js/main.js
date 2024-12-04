const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

// Attach event listeners for delete actions
Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteRapper)
})

// Attach event listeners for like actions
Array.from(thumbText).forEach((element) => {
    element.addEventListener('click', addLike)
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
async function addLike() {
    const sName = this.parentNode.childNodes[1].innerText.trim()
    const bName = this.parentNode.childNodes[3].innerText.trim()
    const likes = parseInt(this.parentNode.childNodes[5].innerText.trim())
    console.log('Attempting to add like to:', sName, bName, likes)  // Debugging line

    try {
        const response = await fetch('/addOneLike', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName,
                'likesS': likes
            })
        })
        const data = await response.json()
        console.log(data)  // Verify response
        location.reload()  // Reload to reflect changes
    } catch (err) {
        console.error('Error adding like:', err)
    }
}
