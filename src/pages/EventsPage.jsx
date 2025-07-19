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
import { Link } from "react-router-dom";
import Button from "../utils";
import EventModal from "../components/Modal";
import { useDisclosure } from "@chakra-ui/react";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  //later implementeren
  // useEffect(() => {
  //   const getEvents = async () => {
  //     try {
  //       const data = await fetchEventsData();
  //       setEvents(data);
  //     } catch (error) {
  //       // Show user-friendly feedback
  //       console.error("Failed to load events:", error);
  //       // Optionally: set an error state to display a message
  //     }
  //   };

  //   getEvents();
  // }, []);

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
      <Button text="Add a new Event" onClick={onOpen} />
      {events.map((item) => (
        <Link
          key={item.id}
          to={`/event/${item.id}`}
          style={{ textDecoration: "none" }}
        >
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
        </Link>
      ))}
      <EventModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
