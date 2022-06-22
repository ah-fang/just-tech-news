async function deleteFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/posts/:id`, {
        method: 'DELETE',
    });

    if(response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
  
  document.querySelector('.delete-post-btn').addEv  