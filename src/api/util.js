import axios from "../shared/axios";

//Utility function
export const getRequest = async (uri) => {
    try {
        let response = await axios.get(uri);
        return {
            data: response.data,
            error:null
        };

    }catch (console){
        return {
            data : null,
            // error : error
        }
    }
};
export default getRequest;
