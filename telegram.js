async function sendLead(name, phone) {

  const text = `📩 Новая заявка\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;

  const data = new URLSearchParams();
  data.append("chat_id", CONFIG.CHAT_ID);
  data.append("text", text);

  await fetch(url, {
    method: "POST",
    body: data
  });

}
