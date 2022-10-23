import { Card } from "../../../components";
import { useFetchAndSubscribeToOnlineUsers } from "./hooks";
import { Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function OnlineUsers() {
  const { data } = useFetchAndSubscribeToOnlineUsers();
  const isPlural = data && data > 1;

  return (
    <Card>
        {data ? (
            <Flex gap={4} alignItems="center">
                <FontAwesomeIcon icon={faUser} /> There {isPlural ? 'are' : 'is'} {data} online user{isPlural ? 's' : ''} viewing this
                page.
            </Flex>
        ) : 'Loading...'}
    </Card>
  );
}
