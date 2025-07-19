export const fetchEventsData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/events`);
    if (!response.ok) {
      throw new Error(`"HTTP error. Status ${response.status}"`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error Fetching: ", error);
  }
};
