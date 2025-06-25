const TELEGRAM_BOT_TOKEN = '8145204188:AAHdHT5Q0pz-PcTuZsEKnGq9IjydZ9-dTZQ';
const TELEGRAM_CHAT_ID = '845808132';

export const sendTelegramMessage = async (message: string) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to send Telegram message');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
};