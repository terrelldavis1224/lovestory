const Occupations = [
    "Musician", "Actor", "DJ","Producer", "Businessman", "Athlete", "Chef", "Architect",
    "Engineer", "Teacher", "Journalist", "Photographer", "Veterinarian", "Scientist",  "Doctor","Nurse",
    "Politician",  "Artist",  "Pilot", "Farmer", "Lawyer",  "Dentist",  "Therapist","Fashion Designer",  "Librarian"
];

const CommonPlaces = [
    "Supermarket", "Pharmacy", "Hospital", "Cafe", "Restaurant",
    "Movie Theater", "Gym", "Park", "Museum", "Art Gallery", "Shopping Mall", "Beach", "Zoo",
    "Amusement Park", "Stadium", "Bank", "Post Office", "Concert Hall", "Theater", "Aquarium", "Night Club", "Coffee Shop"
];

let start_time , end_time ;
submit_button=document.getElementById("submit_button");
start_time = new Date();

document.addEventListener('DOMContentLoaded', function() {
    job=document.getElementById("job")
    job_display=document.getElementById("job_display")
    setInterval(function() {
        job_title= Occupations[Math.floor(Math.random() * Occupations.length)];
        job.innerHTML = job_title;
        job_display.innerHTML = "Job: "+job_title;
        job.value = job_title;
    }, 200);



  });


  function handleSubmit(event) {


    event.preventDefault();
    const end_time = new Date(); 
    const timeSpent = (end_time - start_time) / 1000; 
    document.getElementById("time_spent").value = Math.round(timeSpent); 

    console.log(`Time spent on the page: ${Math.round(timeSpent)} seconds`);
    document.getElementById("myForm").submit(); 

}
