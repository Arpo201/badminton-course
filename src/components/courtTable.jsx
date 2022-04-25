import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ShowCourtCell from './courtCell';

const ShowCourtTable = ({courtData}) => {
  function createData(name, stateList) {
    return {name, ...stateList}
  }
  var rows = [];
  var cols = [{ id: 'name', label: 'Court', minWidth: 100 }];

  //Row
  var rowNum = 0
  courtData.map((court) => rows.push(createData(court.name, court.state)))
  
  //Column
  var colNum = 0
  var time = 57600 //เริ่มที่เวลา 16:00
  courtData[0].state.forEach(timeState => {
    var date = new Date(0);
    date.setSeconds(time);
    var timeString = date.toISOString().substr(11, 5);
    cols.push({
      id: colNum,
      label: timeString,
      align: 'center',
      minWidth: 100,
    })
    colNum++
    time += 3600 //ผ่านไป 1 ชม.
  })

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                rowNum++
                colNum = -2 //ใช้เพื่ออ้างอิง index ของ state ใน court.json (-1 เนืองจาก col แรก, -2 เนื่องจาก index เริ่มจาก 0)
                return (
                  <TableRow key={"row"+rowNum} hover role="checkbox" tabIndex={-1}>
                    {cols.map((column) => {
                      const value = row[column.id];
                      const courtID = parseInt(row.name.split(' ')[1])
                      colNum += 1
                      return (
                        <TableCell key={"row"+rowNum+"cell"+column.id} align={column.align}>
                          {typeof value === 'number'
                            ? <ShowCourtCell courtData={courtData} id={courtID} stateIndex={colNum} time={column.label}/>
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ShowCourtTable