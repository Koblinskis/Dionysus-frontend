import React from 'react'

export default function Login() {
  return (
    <Box className={classes.center}>
      {console.log(TextField)}
      <Box bgcolor='success.main' border={1} className={classes.signUp}>
        <Typography variant="h4" component="h2" color='secondary' className={classes.signUpTitle}>
          Registration
        </Typography>
        <div>
        <TextField
          required
          id="standard-basic"
          label="Username"
          autoFocus
          color='secondary'
          className={classes.inputFields}
          inputProps={{
            color: 'white'
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Email"
          color='secondary'
          className={classes.inputFields}
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color='secondary'
          className={classes.inputFields}
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          required
          id="standard-password-input"
          label="Comfirm Password"
          type="password"
          autoComplete="current-password"
          color='secondary'
          className={classes.inputFields}
          InputProps={{
            className: classes.input
          }}
        />
      </div>
      </Box>
    </Box>
  )
}