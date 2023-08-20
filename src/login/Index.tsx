import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import './Index.css';
import { Button, CircularProgress, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { VisibilityOffTwoTone, VisibilityTwoTone } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "../Api/axios";
import { useNavigate } from "react-router-dom";
import UserLogin from "../models/UserLogin";
import Subsidiary from "../models/Subsidiary";

const Index:React.FC = () => {
    const navigate = useNavigate()
    const logo = require('../source/images/satria.jpg');
    const { enqueueSnackbar } = useSnackbar();
    const [isLogin, setIsLogin] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [subsidiarysName, setSubsidiarysName] = useState([]);
    const [role, setRole] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [userLogin, setUserLogin] = useState<UserLogin>({user_id: 0, username: '', password: '', role_id: 0, role_name: '', subsidiary_name: '', subsidiary_id: 0});
    const [subsidiarys, setSubsidiarys] = useState<Subsidiary[]>([]);
    const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}`;

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin(prev => {
            return{
                ...prev,
                username: event.target.value
            }
        });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin(prev => {
            return{
                ...prev,
                password: event.target.value
            }
        });
    };

    const handleSubsidiaryChange = (event: SelectChangeEvent<unknown>) => {
        const newValue = event.target.value;
        const subsidiary = subsidiarys.find(item => item.subsidiary_name === newValue);
        setUserLogin(prev => {
            return{
                ...prev,
                subsidiary_name: subsidiary!.subsidiary_name,
                subsidiary_id: subsidiary!.subsidiary_id
            }
        });
    };

    const handleRoleChange = (event: SelectChangeEvent<unknown>) => {
        const  newValue = event.target.value
        setUserLogin(prev => {
            return{
                ...prev,
                role_name: newValue
            }
        });
    };

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
            },
        },
    };
    
    const textButtonLogin = !isLogin ? 'Log In' : 'Set Position';

    const onSubmit = async (event: React.FormEvent) => {
        setLoading(true);
        event.preventDefault();

        try {
            if(!userLogin.password || !userLogin.username) return enqueueSnackbar("Username or password is Empty", { variant: "error"});

            const body = {
                username: userLogin.username,
                password: userLogin.password
            };

            const response = await axios.post(`${API_URL}/v1/api/user-header/login`, body);
            
            if (response.data.success) {
                setTimeout(() => {
                    setIsLogin(true)
                    setLoading(false);
                    setRole([response.data.data.role])
                    setSubsidiarys(response.data.data.subsidiarys);
                    const subsidiarysName = response.data.data.subsidiarys.map((subsidiary: Subsidiary) => subsidiary.subsidiary_name);
                    
                    setUserLogin(prev => {
                        return{
                            ...prev,
                            user_id: response.data.data.user_id,
                            role_id: response.data.data.role_id,
                            role_name : response.data.data.role
                        }
                    })
                    setSubsidiarysName(subsidiarysName);
                }, 1500);
            } 
        } catch (error: any) {
            enqueueSnackbar(error.response.data.message, { variant: "error"}); 
            setLoading(false);
        }
    };

    const onSetPosition = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            if(!userLogin.role_name || !userLogin.subsidiary_name) return enqueueSnackbar("Role or Subsidiary is Empty", { variant: "error"});
            if(userLogin.role_name !== role[0]) return enqueueSnackbar("Invalid Role", { variant: "error"});
            
            const body = {
                user_id : userLogin.user_id,
                role_id: userLogin.role_id,
                subsidiary_id : userLogin.subsidiary_id
            }
            
            const response = await axios.post(`${API_URL}/v1/api/user-header/set-position`, body);

            if(response.data.success){
                setLoading(false);
                navigate("/landing-page");
                enqueueSnackbar("Logged In!", { variant: "success"});
            } else {
                setLoading(false);
                return enqueueSnackbar("Invalid Role or Subsidiary", { variant: "error"});
            }
        } catch (error: any) {
            setLoading(false);
            return enqueueSnackbar(error.response.data.message, { variant: "error"});   
        }
    };

    const showPassword = () => setHidePassword(!hidePassword);

    return(
        <div className="login-body">
             <div className="login-wrapper">
                <Avatar className="avatar"> 
                    <img src={logo} className="logo" alt="Logo" srcSet="" />
                    <div className="photo"></div>
                </Avatar>

                <div className="login-div">
                    <div className="title">Petty Cash</div>
                    <div className="sub-title"> Sign in to continue! </div>
                    <div className="input-control">
                    <form className="form" onSubmit={!isLogin ? onSubmit : onSetPosition}> 
                        {!isLogin && 
                            <div className="login-content">
                            <FormControl required fullWidth>
                                <InputLabel className="labels">User Name</InputLabel>
                                <Input
                                    autoComplete="false"
                                    name="username"
                                    className="inputs"
                                    disableUnderline={true}
                                    value={userLogin!.username}
                                    onChange={handleUserNameChange}
                                />
                            </FormControl>
                            <FormControl required fullWidth margin={"normal"}>
                                <InputLabel htmlFor="password" className="labels"> password </InputLabel>
                                <Input
                                    autoComplete="false"
                                    name="password"
                                    className="inputs"
                                    disableUnderline={true}
                                    value={userLogin?.password}
                                    onChange={handlePasswordChange}
                                    type={hidePassword ? "password" : "input"}
                                    endAdornment={
                                    hidePassword ? (
                                        <InputAdornment position="end">
                                        <VisibilityOffTwoTone
                                            fontSize="medium"
                                            className="passwordEye"
                                            onClick={showPassword}
                                        />
                                        </InputAdornment>
                                    ) : (
                                        <InputAdornment position="end">
                                        <VisibilityTwoTone
                                            fontSize="medium"
                                            className="passwordEye"
                                            onClick={showPassword}
                                        />
                                        </InputAdornment>
                                    )
                                    }
                                />
                            </FormControl>
                        </div>
                        }
                        
                        {isLogin && (
                                <div className="login-content" >
                                    <FormControl required fullWidth>
                                        <InputLabel id="demo-multiple-name-label">Subsidiary</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            value={userLogin!.subsidiary_name}
                                            onChange={handleSubsidiaryChange}
                                            input={<OutlinedInput label="Subsidiary" />}
                                            MenuProps={MenuProps}
                                        >
                                            {subsidiarysName.map((name) => (
                                                <MenuItem key={name} value={name} >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl required fullWidth margin={"normal"}>
                                        <InputLabel htmlFor="password" className="labels"> Role </InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            value={userLogin!.role_name}
                                            onChange={handleRoleChange}
                                            input={<OutlinedInput label="Role" />}
                                            MenuProps={MenuProps}
                                        >
                                            {role.map((name) => (
                                                <MenuItem key={name} value={name}  >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            )}
                        <div className="heightbox" style={{ height: 25 }}></div>
                            <Button
                                disabled={loading}
                                disableRipple
                                fullWidth
                                variant="outlined"
                                className="button-login"
                                type="submit"
                            >
                                {loading ? <CircularProgress size={14} /> : textButtonLogin}
                            </Button>
                    </form>
                    </div>
                </div>
             </div>
        </div>
    )
};

export default Index;