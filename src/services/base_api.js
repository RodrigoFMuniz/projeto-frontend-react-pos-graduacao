import axios from 'axios'

class BaseApi{
  constructor(){
    this.base_url = 'http://localhost:5000'
    this.axios = axios
  }
  get_base_url(){
    return this.base_url
  }
}
export default BaseApi