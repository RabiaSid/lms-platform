import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#202124",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fef8ef",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type tableProps = {
  label: string;
  datasourse: any[];
  cols: any[];
};

export default function CustomizedTable(props: tableProps) {
  const { label, datasourse, cols } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {cols.map((x, i) => (
              <StyledTableCell align="left">{x.heading}</StyledTableCell>

            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {datasourse.map((row, i) => (
            <StyledTableRow>
              {cols.map((col, ind) => (
                <StyledTableCell sx={{height:"8vh", paddingY:1}} align="left">{row[col.key]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

