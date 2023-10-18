const weatherAPI = "https://api.open-meteo.com/v1/forecast?current_weather=true"

export const lambdaHandler = async (event) => {
    // Default to Madrid
    const lat = event.queryStringParameters ? event.queryStringParameters.lat : "40.42"
    const lon = event.queryStringParameters ? event.queryStringParameters.lon : "-3.70"

    try {
        const res = await fetch(`${weatherAPI}&latitude=${lat}&longitude=${lon}`)
        let data
        if (res.ok) {
            data = await res.json();
        }

        const { latitude, longitude, current_weather } = data
        return {
            statusCode: 200,
            body: JSON.stringify({ latitude, longitude, current_weather })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
