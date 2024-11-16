// Datos de ejemplo para el gráfico de energía solar
const data = {
    labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [{
        label: "Capacidad Instalada (MW)",
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        data: [5, 10, 20, 30, 40, 60, 80, 100, 130, 150, 175],
    }]
};

// Configuración del gráfico
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// Renderización del gráfico
window.onload = function() {
    const ctx = document.getElementById('energiaSolarChart').getContext('2d');
    new Chart(ctx, config);

    // Actualizar las estadísticas
    document.getElementById('capacidadTotal').textContent = data.datasets[0].data.reduce((a, b) => a + b, 0);
    document.getElementById('consumoTotal').textContent = (data.datasets[0].data.reduce((a, b) => a + b, 0) * 1.5).toFixed(2); // Ejemplo de consumo total
}
