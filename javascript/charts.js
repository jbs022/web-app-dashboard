//CHARTS SECTION

    //Line Chart Vars
    const hourlyChart = [
        {x:'16-22', y:800}, {x:'23-29', y:1400}, {x:'30-5', y:1000},
        {x:'6-12', y:2000}, {x:'13-19', y:1500}, {x:'20-26', y:1750},
        {x:'27-3', y:1350}, {x:'4-10', y:1900}, {x:'11-17', y:2200},
        {x:'18-24', y:1500}, {x:'25-31', y:2500}]
    
    const dailyChart = [
        {x:'Prev.F', y:3000}, {x:'Prev.Sat', y:3500}, {x:'Prev.Sun', y:4500},
        {x:'Mon', y:3000}, {x:'Tus', y:3300}, {x:'Wedn', y:3700},
        {x:'Thurs', y:3900}, {x:'Fri', y:4400}, {x:'Sat', y:4900},
        {x:'Sun', y:5500}];
    
    const weeklyChart = [
        {x:'Week 1', y:20500}, {x:'Week 2', y:24000}, {x:'Week 3', y:26500},
        {x:'Week 4', y:11000}, {x:'Week 5', y:27000}, {x:'Week 6', y:25000},
        {x:'Week 7', y:22000}, {x:'Week 8', y:15000}, {x:'Week 9', y:31000},
        {x:'Curr. Week', y:30000}];
    
    const monthlyChart = [
        {x:'Jan', y:111000}, {x:'Feb', y:130000}, {x:'Mar', y:150000},
        {x:'Apr', y:75000}, {x:'May', y:90000}, {x:'Jun', y:60000},
        {x:'Jul', y:80000}, {x:'Aug', y:111000}, {x:'Sept', y:160000},
        {x:'Oct', y:165000}];
    
    const trafficButtons = document.querySelectorAll('.traffic button');

// charts functions

    // changing chart data based on frequency 

    function updateChart(chart, dataObj, data) {
        // Store data into the database
            Object.assign(data, dataObj);
        // Fetch data from the database and replace old data
            chart.data.datasets.forEach((dataset) => {
                dataset.data = Object.values(data);
            });
        
            chart.update();
};

// running eventListener on each button to displey its corresponding chart
    for (let i = 0; i < trafficButtons.length; i++) {
        trafficButtons[i].addEventListener('click', (tButton) => {
            if (i === 0) {
                tButton = hourlyChart;
            } else if (i === 1) {
                tButton = dailyChart;
            } else if (i === 2) {
                tButton = weeklyChart;
                } else {
                    tButton = monthlyChart;
        }

        updateChart(chartLine, tButton, dataLine)
            
        })
    };


// Traffic line chart

const dataLine = {
    datasets: [{
        backgroundColor: 'rgba(76, 71, 175, 0.2)',
        borderColor: 'rgba(76, 71, 175, 0.3)',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        pointStyle: 'circle',
        pointRadius: 3,
        pointHoverRadius: 1.5,
        label: 'Concurrence',
        data: [ //Hourly chart
        {x:'16-22', y:800}, {x:'23-29', y:1400}, {x:'30-5', y:1000},
        {x:'6-12', y:2000}, {x:'13-19', y:1500}, {x:'20-26', y:1750},
        {x:'27-3', y:1350}, {x:'4-10', y:1900}, {x:'11-17', y:2200},
        {x:'18-24', y:1500}, {x:'25-31', y:2500}]
    }]
    };   

const configLine = {
    type: 'line',
    data: dataLine,
    options: { maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 2500,
                        alignToPixels: true,
                        ticks: {
                            stepSize: 500,
                            font: {
                                size: 9.2,
                                weight: 'bold'
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                }
    }
};

const chartLine = new Chart(
    document.getElementById('chart-line'),
    configLine
);

// daily traffic chart

const dataBar = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
        {
        data: [70, 110, 170, 80, 225, 200, 100],
        borderColor: 'none',
        backgroundColor: 'rgba(76, 71, 175, 0.8)',
        }]
};

const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
        maintainAspectRatio: false,
        plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
        }
    },
    };

const chartBar = new Chart(
    document.getElementById('chart-bar'),
    configBar
);

// mobile user chart 

const dataDon = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [
        {
        data: [68, 18, 16],
        backgroundColor: [
            'rgba(76, 71, 175, 0.8)', 
            "#A0C6A0", 
            "#45BFBE"
        ],
        borderWidth: 0,
        hoverOffset: 4,
        }]
};

const configDon = {
    type: 'doughnut',
    data: dataDon,
    options: {
        maintainAspectRatio: false,
        plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                font: {
                    weight: 'bold',
                }
            }
        }
        }
    }
};

const chartDon = new Chart(
    document.getElementById('chart-donut'),
    configDon
);
