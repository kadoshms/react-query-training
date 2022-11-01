import { useEffect } from "react";
import { useSocket } from "../../../../hooks";
import { useQuery, useQueryClient } from "react-query";
import {axiosInstance} from "../../../../api";

const queryKeys = {
  usersOnline: ["users-online"],
};

export function useFetchAndSubscribeToOnlineUsers() {
  const { on, cleanUp } = useSocket();
  const queryClient = useQueryClient();

  useEffect(() => {
    on("online-users", () => {
      queryClient.invalidateQueries(queryKeys.usersOnline);
    });

    return () => {
      cleanUp();
    };
  }, [cleanUp, on, queryClient]);

  return useQuery(queryKeys.usersOnline, async () => {
    const response = await axiosInstance.get<number>('online-users');
    return response.data;
  },{
    staleTime: Infinity,
  });
}
