import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CategoryIcon from '@mui/icons-material/Category';

// eslint-disable-next-line react/prop-types
export default function Sidebar({ onMenuClick }) {
  const menuItems = [
    { text: 'Despesas', icon: <ReceiptIcon /> },
    { text: 'Funcionários', icon: <PersonIcon /> },
    { text: 'Cartões', icon: <CreditCardIcon /> },
    { text: 'Categoria', icon: <CategoryIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', borderRight: '1px solid #ccc' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => onMenuClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
