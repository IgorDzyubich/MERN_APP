import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { indigo } from '@material-ui/core/colors';
  import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
  
  const TotalProfit = (props) => (
    <Card 
        style={{ height: '100%' }}
        {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          style={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL PROFIT
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              $23,200
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              style={{
                backgroundColor: indigo[600],
                height: '56px',
                width: '56px'
              }}
            >
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default TotalProfit;
  