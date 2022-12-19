export class WeatherDataProcessor {
    #cityGeocodes;
    constructor() {
        this.#cityGeocodes = [{city: "Rehovot", latitude: 31.046, longitude: 34.851}, {}];
    }
    getData(requestObject) {
        // {city, dateFrom, dateTo, hoursFrom, hoursTo}
        const url = this.getURL(requestObject);
        const promiseResponse = fetch(url);
        return this.processData(promiseResponse.then(response => response.json()));

    }
    getURL(requestObject) {
        // creates URL for request
    }
    processData(promiseData) {
        return promiseData(data => {
            // return {city, objects: [{date, hour, temperature},...]}
        })
    }
}