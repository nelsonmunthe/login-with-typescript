import MiniDrawer from "../components/MiniDrawer";
import InputHeader from "./InputHeader";
import Main from "../components/Main";
import { Box } from "@mui/material";
import DashboardBonSementara from "./DashboardBonSementara";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Pagination from '../models/Pagination';
import axios from "../Api/axios";

const Index: React.FC = () => {
    document.title = "Bon Sementara";

    const [cookie] = useCookies();
    const { enqueueSnackbar } = useSnackbar();
    const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}`;
    const [pagination, setPagination] = useState<Pagination>({page: 0, per_page: 25});
    const [bonSementaraRows, setBonSementaraRows] = useState([])
    const [countData, setCountData] = useState(0);
   
    useEffect(() => {
        let refresh = true;
        if(refresh) {
            fetchBonSementara();
        }

        return() => {
            refresh = false;
        }

    }, [pagination]);
   
    const fetchBonSementara =  async () => {
        try {
            const payload = {
                subsidiary_id : cookie.subsidiary.subsidiary_id,
                page: pagination.page,
                per_page: pagination.per_page
            };
    
            let params = '';
            
            for(let [key, value] of Object.entries(payload)){
                params += `${[key]}=${value}&`
            }
            
            const bonSementara = await axios(`${API_URL}/v1/api/bon-sementara/search-bon?${params}`);
            if(bonSementara.data.status){
                setBonSementaraRows(bonSementara.data.data)
                setCountData(bonSementara.data.countData)
            }
        } catch (error: any) {
            enqueueSnackbar(error.message, {variant: "error", anchorOrigin: { vertical: 'bottom', horizontal: 'right'}});
        }
    };
    
    return(
        <Box sx={{ display: 'flex'}}>
            <MiniDrawer title="Bon Sementara" />
            <Main>
                <div className="input-header">
                    <InputHeader />
                    <DashboardBonSementara 
                        roles = {cookie.role}
                        rows = {bonSementaraRows}
                        countData={countData}
                        pagination = {pagination}
                        setPagination = {setPagination}
                    />
                </div>
                
            </Main>
        </Box>
    )
};

export default Index;