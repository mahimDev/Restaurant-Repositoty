import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from './UseAuth';
const useCard = () => {
    // ten stack query
    const axiosSecure = UseAxiosSecure()
    const { user } = UseAuth()
    // console.log(user)
    const { refetch, data: card = [] } = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cards?email=${user?.email}`)

            return res?.data;
        }
    })
    return [card, refetch]
};

export default useCard;