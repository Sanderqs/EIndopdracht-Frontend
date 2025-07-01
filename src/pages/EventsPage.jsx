import { useEffect, useState } from "react";
import {
  Heading,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { fetchEventsData } from "../Api";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEventsData();
      setEvents(data);
    };
    getEvents();
  }, []);

  return (
    <>
      <Heading>List of events</Heading>
      {events.map((item) => (
        <Card
          key={item.id}
          width="250px"
          mb="4px"
          cursor="pointer"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
          }}
        >
          <Image
            src={item.image}
            rounded="md"
            height="150px"
            objectFit="cover"
            alt={item.title}
          />
          <CardHeader p="0px">
            <Text fontSize="xl" fontWeight="normal">
              {item.title}
            </Text>
          </CardHeader>
          <CardBody>
            <Text>{item.description}</Text>
            <Text>{item.startTime}</Text>
            <Text>{item.endTime}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

// {
//   "id": 1,
//   "createdBy": 1,
//   "title": "Trampoline party",
//   "description": "Bounce around with your friends",
//   "image": "https://i.pinimg.com/736x/3d/2f/af/3d2faf4e3188d34a9fcdc00df59e77b0.jpg",
//   "categoryIds": [
//     2
//   ],
//   "location": "My back yard",
//   "startTime": "2023-03-10T18:00:00.000Z",
//   "endTime": "2023-03-10T19:00:00.000Z"
