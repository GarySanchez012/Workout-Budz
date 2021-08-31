async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = this.getAttribute("data-id")
  
 
    const response = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/new-workout');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-link').addEventListener('click', deleteFormHandler);
  