import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

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
  "&:nth-of-type(odd)": {
    backgroundColor: "#fef8ef",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type tableRowProps = {
    key: any;
  instituteId: number | string;
  instituteName: string;
  instituteLogo: any;
  instituteNumber: string;
  instituteActive: any;
};

export default function CustomTableRow(props: tableRowProps) {
  const { key, instituteId, instituteName, instituteLogo, instituteNumber, instituteActive } = props;
  return (
    <>
      <StyledTableRow key={key}>
        <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
          {instituteId}
        </StyledTableCell>
        <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
          {instituteLogo}
        </StyledTableCell>
        <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
          {instituteName}
        </StyledTableCell>
        <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
          {instituteNumber}
        </StyledTableCell>
        <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
          {instituteActive}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
