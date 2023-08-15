import { Layout } from "@/components/layouts";
import { NextPage } from "next"
import { Typography } from "@mui/material"


const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1">Hola mundo</Typography>
    </Layout>
  )
}

export default HomePage;