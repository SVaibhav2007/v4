document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const resumeText = document.getElementById('resume').value;

    fetch('/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `resume=${encodeURIComponent(resumeText)}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Your resume score is: ${data.score}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});