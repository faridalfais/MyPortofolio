// components/DenseTable.tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const formatUSD = (value: number) => {
  return `$${value.toLocaleString("en-US")}`;
};

function createData(name: string, calories: string, fat: number, carbs: number, protein: number, city: string) {
  return { name, calories, fat, carbs, protein, city };
  // 'city' is optional, so you can pass it as an empty string if not needed
}

const rows = [
  createData('Smartwatch Zeta', 'Teknologi', 150, 120, 87, 'jakarta'),
  createData('Nova Air Laptop', 'Teknologi', 900, 75, 60, 'Kuala lumpur'),
  createData('Wireless Earbuds Max','Teknologi', 129, 150, 90, 'Tokyo'),
  createData('S9 Mini Tablet', 'Teknologi', 255, 80, 50, 'New york'),
  createData('Pro V2 Desktop', 'Teknologi', 1200, 40, 35, 'chongqing'),
  createData('Core X smartphone','Teknologi', 799, 65, 52, 'Istanbul'),
  createData('Flash Gaming Mouse', 'Teknologi', 55, 20, 12, 'Los Angeles'),
  createData('Beam Mini Projector', 'Teknologi', 330, 95, 78, 'Petersburg'),
  createData('Neo Chromebook', 'Teknologi', 400, 110, 82, 'Amsterdam'),
  createData('UltraView smart TV', 'Teknologi', 1000, 88, 69, 'Sdyney'),
];

const DenseTable = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">📊 Sample table example (temporary)</h2>
      <TableContainer component={Paper} className="max-w-4xl mx-auto">
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Unit Price&nbsp;(USD)</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Units Sold</TableCell>
              <TableCell align="right">Distribution City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{formatUSD(row.fat)}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.city || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DenseTable;
