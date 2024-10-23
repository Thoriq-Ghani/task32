console.log("OK");

const simulatedResponse = [
    {
        "id": 1,
        "name": "Mushthofa Thoriq",
        "username": "Thoriq",
        "email": "thoriqmushthofa@gmail.com",
        "address": {
            "Jalan": "Jl.Gondosuli",
            "Kota": "Yogyakarta"
        },
        "phone": "0812-2661-7677"
    }
];

function displayData(data) {
    document.getElementById("userData").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simulatedResponse);
        }, 1000);
    });
}

fetchData()
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
        document.getElementById("userData").innerHTML = `<p>Terjadi kesalahan: ${error.message}</p>`;
    });
