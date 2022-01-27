import { useMemo, useState } from "react";

/**
 * 
 * @param {Promise} query 
 */
export default function useQuery(query) {
  let data = useState([]);
  let error = useState(null);
  let loading = useState(false);
  
  let operation = useMemo(async () => {
    return await query;
  }, [query]);
}