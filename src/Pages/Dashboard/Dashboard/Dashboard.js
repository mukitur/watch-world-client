import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink, useRouteMatch, Switch, Route  } from 'react-router-dom';
import { Button } from '@mui/material';
import PaymentSystem from '../PaymentSystem/PaymentSystem';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MyOrders from '../MyOrders/MyOrders';
import Reviews from '../../Home/Reviews/Reviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../../Home/AddProducts/AddProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
  const {admin} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logout } = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
            <Button color="inherit">Home</Button>
        </NavLink> 
        <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/logout">
            <Button onClick={logout} color="inherit">Logout</Button>
        </NavLink> 
      
      <Divider />
      <Typography style={{marginTop: '15px', textAlign: 'center'}} variant="h6" paragraph>
          DashBoard Menu
        </Typography>
      <Divider />
      
      <Link style={{color: "black", textDecoration: 'none'}} to={`${url}`}><Button style={{color: "black"}} color="inherit">Dashboard</Button></Link><br/>
      <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link><br/>
      <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/payment`}><Button  color="inherit">Pay Now</Button></Link><br/>
      <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link><br/>
      <Divider />
      {
        admin && <Box>
            <Link style={{color: "black",textAlign: 'left', textDecoration: 'none'}} to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link><br/>
            <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/addproduct`}><Button color="inherit">Add Product</Button></Link>
            <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/manaheAllOrders`}><Button color="inherit">Manage Orders</Button></Link>
            <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
        </Box>
      }
      
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD, Welcome to {user?.displayName} !
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <PaymentSystem></PaymentSystem>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/manaheAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default Dashboard;