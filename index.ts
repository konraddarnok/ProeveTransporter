
import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface ITransporter {
    id: number
    lastbil: string
    chauffor : string
    dato: number
    antalKm : number
    gennemsnit : number
}

let baseUri: string = "https://fubtransportertab.azurewebsites.net/api/TransporterTabs"


new Vue({
    el:"#app",
    data: {
            transporters: [],
            formData: { lastbil: "", chauffor: "", dato: 0, antalKm: 0, gennemsnit: 0},

    },
    methods: {
        getAllTransporters(){
            axios.get<ITransporter[]>(baseUri)
            .then((response: AxiosResponse<ITransporter[]>) => {
                this.transporters = response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            }) 
        }
    }


})