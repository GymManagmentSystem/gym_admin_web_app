import {create} from "zustand"

interface AdminNameStore{
    userName:string,
    setName:(name:string)=>void
}

const useAdminNameStore=create<AdminNameStore>((set)=>({
    userName:"",
    setName:(userName)=>set(()=>({userName}))
}))

export default useAdminNameStore;