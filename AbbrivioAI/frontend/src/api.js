export async function generateSummary(text) {
    const response = await fetch('http://localhost:8000/api/generate-summary/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.summary;
}
