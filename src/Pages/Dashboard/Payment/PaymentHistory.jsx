import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const axiosSecure = UseAxiosSecure()
    const { user } = UseAuth()
    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)

            return res?.data;
        }
    })
    console.log(payment)
    return (
        <div>
            <SectionTitle heading={'Payment History'} subHeading={'taka'}></SectionTitle>
            <h2 className="text-2xl bg-orange-500 text-white font-bold text-center p-1 rounded-lg mb-2 "> Total Payments : {payment?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th>#</th>
                            <th>transactionId</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item?.transactionId}</td>
                                <td>{item?.price}</td>
                                <td>{item?.status}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;