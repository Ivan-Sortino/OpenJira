import { Layout } from "@/components/layouts";
import { NextPage } from "next"
import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import { EntryList, NewEntry } from "@/components/ui";


const HomePage: NextPage = () => {

  //console.log(process.env.NEXT_PUBLIC_CLIENT_KEY)
  return (
    <Layout title="Home-OpenJira">
      <Grid container spacing={ 2 }  >
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendinete"/>

            
              {/* Agregar una nieva entrada */}
              <NewEntry/>
              <EntryList status="pending"/>
            
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Progreso"/>
            <EntryList status="in-progress"/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas"/>
            <EntryList status="finished"/>
          </Card>
        </Grid>


      </Grid>
      
    </Layout>
  )
}

export default HomePage;