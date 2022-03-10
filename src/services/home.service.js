import axios from 'axios'

export const getGender = async () =>{
  const gender = await axios.get("http://localhost:5000/gender")
  return gender.data
}

export const getGenderCateg = async (id) => {
  const genderCateg = await axios.get(`http://localhost:5000/prefix?gender_id=${id}`)
  
  return genderCateg.data
}
