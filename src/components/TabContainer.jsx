import { Box,Tabs,Tab } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TabContainer({navigateor}) {

    const [value, setValue] = useState(0);

    const { pathname } = useLocation();



    const handleChange = (event,newValue)=>{
        setValue(newValue)
        console.log('clicked')
    }

  
    return <div>
         <Box
      className={'flex flex-grow h-64 '}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
    
        sx={{ borderRight: 1, borderColor: 'divider',color:'black' }}
        className="overflow-hidden"
      >
        
        <Tab label="its Musalem"  component={Link} to="/itsMusalem" value="/itsMusalem" />
        <Tab label="Skills" component={Link} to="/skills" value="/skills" />
        <Tab label="Tab Three" component={Link} to="/pageThree" value="/pageThree" />
        <Tab label="Tab Four" component={Link} to="/pageFour" value="/pageFour" />
     
      </Tabs>
      </Box>
    </div>
}


export default TabContainer