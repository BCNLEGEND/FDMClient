import React, { useState, useEffect, useContext } from 'react';

import OrderDetails from '@/components/Orders/OrderDetails';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Typography } from '@mui/material';

import OrderContext from '@/context/OrderContext';

const AllOrders = () => {
  const { allOrders, getAllOrders } = useContext(OrderContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  useEffect(() => {
    getAllOrders();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const data = allOrders.filter(
      (order) =>
        order.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
        order.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        order.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        String(order.encarrec)
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
    );
    setSearchResults(data);
  };

  const handleView = (id) => {
    setSelectedOrder(allOrders.filter((order) => order._id === id)[0]);
    setOpenOrderDetails(true);
  };

  return (
    <section>
      {openOrderDetails && (
        <OrderDetails
          setOpenOrderDetails={setOpenOrderDetails}
          order={selectedOrder}
        />
      )}
      <Paper style={{ margin: 'var(--size-xxs)', padding: 'var(--size-xxs)' }}>
        <form
          noValidate
          autoComplete="off"
          style={{ margin: '0 auto', width: '90%' }}
        >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon color="primary" />
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="searchOrders"
                label="Search Orders"
                value={searchTerm}
                onChange={handleChange}
                variant="standard"
                style={{ width: '100%', color: 'var(--primary-color)' }}
              ></TextField>
            </Grid>
          </Grid>
        </form>
      </Paper>
      {searchResults.length > 0 ? (
        <Paper
          style={{ margin: 'var(--size-xxs)', padding: 'var(--size-xxs)' }}
        >
          <Typography variant="h3" color="primary">
            Search Results:
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" color="primary">
                      Nº de Encarrec:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Order Date:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Customer Name:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Status:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Payed:
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell component="th" scope="row">
                      {order.encarrec}
                    </TableCell>
                    <TableCell align="right">
                      {String(order.newDate).substring(0, 10)}
                    </TableCell>
                    <TableCell align="right">{`${order.firstName} ${order.lastName}`}</TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                    <TableCell align="right">
                      {order.payed ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="secondary"
                        size="small"
                        onClick={() => handleView(order._id)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(order._id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        style={{ color: 'red' }}
                        size="small"
                        onClick={() => handleDelete(order._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <Paper
          style={{ margin: 'var(--size-xxs)', padding: 'var(--size-xxs)' }}
        >
          <Typography variant="h3" color="primary">
            All Orders:
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" color="primary">
                      Nº de Encarrec:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Order Date:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Customer Name:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Status:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      Payed:
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order.encarrec}</TableCell>
                    <TableCell align="right">
                      {String(order.newDate).substring(0, 10)}
                    </TableCell>
                    <TableCell align="right">{`${order.firstName} ${order.lastName}`}</TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                    <TableCell align="right">
                      {order.payed ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="secondary"
                        size="small"
                        onClick={() => handleView(order._id)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(order._id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        style={{ color: 'red' }}
                        size="small"
                        onClick={() => handleDelete(order._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </section>
  );
};

export default AllOrders;
