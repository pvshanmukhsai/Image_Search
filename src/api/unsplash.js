import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID Z8DYIStvbNrZucL5Lob93-38mnlEsGQ8XndBH-IA_Wc'
    }
});