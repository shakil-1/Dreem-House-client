import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const A = ({ items,refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { apartmentName, blockName, florNo, roomNumber, rent, image, _id } =
    items;
  const date = new Date();
  const todyasDate = date.toLocaleDateString();

  const handelbooking = (id) => {
    if (user && user.email) {
      const item = {
        roomId: _id,
        email: user.email,
        name: user.displayName,
        status: "pending",
        roomNumber,
        date: todyasDate,
        apartmentName,
        blockName,
        florNo,
        rent,
      };
      axiosSecure.patch(`/apainment/${id}`)
      .then(() =>{
        refetch()
      })
      axiosSecure.post("bookings", item)
      .then((res) => {
        if(res.data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: 'Agreement accepted successfully',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  };
  return (
    <div className="">
      <div className="border bg-blue-200 p-2 rounded-md mx-auto lg:w-[450px] ">
        <img className="w-full h-72" src={image} alt="" />
        <p>Floor no: {florNo}</p>
        <p>Block name: {blockName}</p>
        <p>Apartment no: {apartmentName}</p>
        <p>Rent: {rent}</p>
        <button onClick={()=> handelbooking(_id)} className="btn w-full bg-orange-100">
          Agreement
        </button>
      </div>
    </div>
  );
};

export default A;