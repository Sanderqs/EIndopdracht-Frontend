export const fetchEventsData = async () => {
  const response = await fetch(`http://localhost:3000/events`);
  return response.json();
};
