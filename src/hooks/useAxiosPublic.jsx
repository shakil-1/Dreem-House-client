import axios from "axios";


const axiosPublic = axios.create({
    baseURL:'https://assignment-12-server-cyan-mu.vercel.app/api/v1'
})

const useAxiosPublic = () =>{
    return axiosPublic;
}

export default useAxiosPublic;