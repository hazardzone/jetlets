const handleSubscribe = async (e) => {
  e.preventDefault();
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail }),
  });
  if (response.ok) alert("Subscription successful!");
};
