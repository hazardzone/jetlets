const cron = require("node-cron");

cron.schedule("0 8 * * *", async () => {
  const users = await getUsersToEmail(); // Fetch eligible users
  users.forEach((user) => {
    sendEmail(
      user.email,
      "Your Daily Travel Tip",
      "<h1>Hello!</h1><p>Here is your tip...</p>"
    );
  });
});
