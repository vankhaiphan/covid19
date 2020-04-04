document.addEventListener('DOMContentLoaded', () => {
    const request = new XMLHttpRequest();
    request.open('POST', '/info');

    request.onload = () => {        
        const data = JSON.parse(request.responseText);

        if (data.success) {
            const g_cases = `Cases: ${data.data.global.cases}`
            document.querySelector('#g_cases').innerHTML = g_cases;
            const g_deaths = `Death: ${data.data.global.deaths}`
            document.querySelector('#g_deaths').innerHTML = g_deaths;
            const g_recovered = `Recovered: ${data.data.global.recovered}`
            document.querySelector('#g_recovered').innerHTML = g_recovered;

            const v_cases = `Cases: ${data.data.vietnam.cases}`
            document.querySelector('#v_cases').innerHTML = v_cases;
            const v_deaths = `Death: ${data.data.vietnam.deaths}`
            document.querySelector('#v_deaths').innerHTML = v_deaths;
            const v_recovered = `Recovered: ${data.data.vietnam.recovered}`
            document.querySelector('#v_recovered').innerHTML = v_recovered;            
        }
        else {            
            const g_cases = `Cases: error`
            document.querySelector('#g_cases').innerHTML = g_cases;
            const g_deaths = `Death: error`
            document.querySelector('#g_deaths').innerHTML = g_deaths;
            const g_recovered = `Recovered: error`
            document.querySelector('#g_recovered').innerHTML = g_recovered;

            const v_cases = `Cases: error`
            document.querySelector('#v_cases').innerHTML = v_cases;
            const v_deaths = `Death: error`
            document.querySelector('#v_deaths').innerHTML = v_deaths;
            const v_recovered = `Recovered: error`
            document.querySelector('#v_recovered').innerHTML = v_recovered;
        }
    }

    const data = new FormData();
    request.send(data);
    // return false;
});