import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'X-RapidAPI-Key': 'c6947dba57mshd08a8ef5dffcd2bp1062e3jsn40f9cdae0344',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
export const fetchApi = async(url)=>{
    const {data} = await axios.get((url), {
        headers: {
        'X-RapidAPI-Key': 'c6947dba57mshd08a8ef5dffcd2bp1062e3jsn40f9cdae0344',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}