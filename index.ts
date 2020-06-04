
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
            deleteId: 0,
            deleteMessage: "",
            addMessage:""
,
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
        },
        deleteTransporter(deleteId: number){
            let uri: string = baseUri + "/" + deleteId
            axios.delete<void>(uri)
            .then((reponse: AxiosResponse<void>) => {
                this.deleteMessage = reponse.status + " " + reponse.statusText
                this.getAllTransporters()
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        addTransporter(){
            axios.post<ITransporter>(baseUri, this.formData)
            .then((response: AxiosResponse) => {
                let message: string = "Din Transporter er tilføjet"
                this.addMessage = message 
                this.getAllTransporters()
            })
        }
    }


})