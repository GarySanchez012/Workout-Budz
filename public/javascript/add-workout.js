async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const exerciseImages = [...document.querySelectorAll(".exercise-image")];
  const imageLabels = [...document.querySelectorAll(".exercise-label")];

  const exercises = exerciseImages.map((image, index) => {
    const label = imageLabels[index];

    const imageURL = image.getAttribute("src");
    const labelHTML = label.innerHTML;

    const exercise = {
      imageURL,
      labelHTML,
    };

    return exercise;
  });

  const response = await fetch(`/api/workouts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      exercises: JSON.stringify(exercises),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/new-workout");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
