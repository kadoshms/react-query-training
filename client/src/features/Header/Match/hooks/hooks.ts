import { useEffect } from "react";
import { useSocket } from "../../../../hooks";
import { useQueryClient } from "react-query";

const MATCH_UPDATE = "match-update";

export function useSyncMatch() {
  const { on, off, isConnected } = useSocket();
  const queryClient = useQueryClient();

  useEffect(() => {
    on(MATCH_UPDATE, () => {
        console.log('match update')
    });

    return () => {
      off(MATCH_UPDATE);
    };
  }, [off, on]);
}
