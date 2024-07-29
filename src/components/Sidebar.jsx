import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const selectedCatagory = "New";

const Sidebar = () =>  (
    <Stack 
    direction="row"
    sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
    }}
    >
        {categories.map((category) => (
            <button
            className="category-btn"
            style={{
                backgroundColor: category.name === selectedCatagory && 'FC1503', color: 'white'
            }}
            >
                <span style={{ color: category.name === selectedCatagory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCatagory ? '1' : '0.8' }}>{category.name}</span>
            </button> 
        ))}

    </Stack>
  )

export default Sidebar