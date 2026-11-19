// Инициализируем Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем на весь экран

// Функция отправки данных в бота
function sendAction(action) {
    // Собираем данные, которые бот получит
    const data = {
        action: action,
        timestamp: Date.now()
    };
    
    // Отправляем боту в виде JSON-строки
    tg.sendData(JSON.stringify(data));
    
    // Закрываем мини-приложение (по желанию)
    // tg.close(); 
}
