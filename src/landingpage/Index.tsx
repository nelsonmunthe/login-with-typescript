import MiniDrawer from "../components/MiniDrawer";
import { Box } from "@mui/material";
import Main from '../components/Main';
import DrawerHeader from "../drawer/DrawerHeader";


const Index:React.FC = () => {
    document.title = "Landing Page";

    return(
        <Box sx={{ display: 'flex'}}>
             <MiniDrawer title='Welcome to Petty Cash App'/>
             <Main>
                <DrawerHeader />

             </Main>
        </Box>
    )
};

export default Index;