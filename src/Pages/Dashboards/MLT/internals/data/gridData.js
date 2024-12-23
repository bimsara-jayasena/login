import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import axios from 'axios';
function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={['hsl(210, 98%, 42%)']}
        xAxis={{
          scaleType: 'band',
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status) {
  const colors = {
    Online: 'success',
    Offline: 'default',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns = [
  { field: 'petient', headerName: 'Petient', flex: 1, minWidth: 100 },
  {
    field: 'test',
    headerName: 'Test',
    flex: 0.5,
    minWidth: 90,
    renderCell: (params) => renderStatus(params.value),
  },
  {
    field: 'users',
    headerName: 'Users',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'date',
    headerName: 'Date',
    headerAlign: 'right',
    align: 'right',
    flex: 0.5,
    minWidth: 50,
  },
  {
    field: 'time',
    headerName: 'Time',
    headerAlign: 'right',
    align: 'right',
    flex: 0.5,
    minWidth: 20,
  },
  {
    field: 'location',
    headerName: 'Location',
    flex: 0.5,
    minWidth: 150,
    renderCell: renderSparklineCell,
  },
  {
    field: 'prescription',
    headerName: 'Prescription',
    headerAlign: 'right',
    align: 'right',
    flex: 0.5,
    minWidth: 50,
  },
  
];

export const rows = [
  {
    id: 1,
    pageTitle: 'Homepage Overview',
    status: 'Online',
    eventCount: 8345,
    users: 212423,
    viewsPerUser: 18.5,
    averageTime: '2m 15s',
    conversions: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198, 944863,
      911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511, 1348746, 1560533,
      1670690, 1695142, 1916613, 1823306, 1683646, 2025965, 2529989, 3263473,
      3296541, 3041524, 2599497,
    ],
  },
  {
    id: 2,
    pageTitle: 'Product Details - Gadgets',
    status: 'Online',
    eventCount: 5653,
    users: 172240,
    viewsPerUser: 9.7,
    averageTime: '2m 30s',
    conversions: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      557488, 1341471, 2044561, 2206438,
    ],
  },
  
];

export function EmpRows() {
 
  const [empData, setEmpData] = React.useState([]);
  const [empDataLoading,setEmpDataLoading]=React.useState(true);
  const fetchEmpData=() => {
       axios.get("http://localhost:5555/employees")
        .then((res)=>{
          const newObj = res.data.map((e) => ({
            id: e.emp_id,
            fname: e.first_name+" "+e.last_name,
            email: e.email,
            contact_no: e.contact_no,
            role: e.role,
            department: e.department,
            available:"yes"
          }));
          setEmpData(newObj);
        })
      .catch ((err)=>{
        console.log(err);
      })
      .finally(()=>setEmpDataLoading(false));
  };
  React.useEffect(()=>fetchEmpData(),[]);
  return {empData,empDataLoading,fetchEmpData};
}