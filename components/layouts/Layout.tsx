import Head from "next/head"
import {FC, PropsWithChildren} from 'react'
import { Box } from "@mui/material"
import { NavBar, SideBar } from "../ui"

interface Props extends PropsWithChildren{
    title?: string 
}





export const Layout: FC<Props>= ({title='OpenJira', children}) => {
  return (
    <Box sx={{ flexFlow:'1'}}>
        <Head>
            <title>{title}</title>

            <NavBar></NavBar>
            
            <SideBar></SideBar>

            <Box sx={{padding: '10px 20px'}}>
                {children}
            </Box>

        </Head>
        
    </Box>
  )
}
