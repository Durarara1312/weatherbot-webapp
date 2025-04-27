const tg = window.Telegram.WebApp;

// Инициализация Mini App
tg.ready();

// Кнопка "Получить погоду"
document.getElementById('getWeather').addEventListener('click', () => {
    tg.sendData('action=get_weather'); // Отправляем действие в бот
});

// Кнопка "Настройки"
document.getElementById('settings').addEventListener('click', () => {
    tg.sendData('action=open_settings'); // Открываем настройки
});

// Кнопка "Активировать премиум"
document.getElementById('activatePremium').addEventListener('click', () => {
    tg.sendData('action=activate_premium'); // Активируем премиум
});

// Кнопка "Закрыть приложение"
document.getElementById('closeApp').addEventListener('click', () => {
    tg.close(); // Закрываем Mini App
});