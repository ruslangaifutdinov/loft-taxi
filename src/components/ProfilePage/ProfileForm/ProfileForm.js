import React, {Component} from 'react'
import './ProfileForm.css'

import Paper from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';

class ProfileForm extends Component {

    render () {

      
        return (
            <div className="ProfilePage">
            <Paper className="profile-paper-page">
              <Typography variant="h3" color="inherit" align="center">
                Профиль
              </Typography>
              <form className="form" noValidate>
                <Typography variant="h6" color="inherit">
                  Способ оплаты
                </Typography>
                <TextField
                  type="text"
                  label="Имя владельца"
                  placeholder="Имя владельца"
                  name="cardName"
                  margin="none"
                  autoComplete="cc-name"
                  fullwidth="true"
                  required
                />
                <NumberFormat
                  label="Номер карты"
                  placeholder="Номер карты"
                  name="cardNumber"
                  margin="none"
                  autoComplete="cc-number"
                  fullwidth="true"
                  required
                  format="#### #### #### ####"
                />
                <NumberFormat
                  label="Дата окончания действия"
                  placeholder="мм/гг"
                  name="cardExp"
                  margin="none"
                  autoComplete="cc-exp"
                  fullwidth="true"
                  required
                  format="##/##"
                />
                <NumberFormat
                  type="password"
                  customInput={TextField}
                  label="CVV"
                  placeholder="CVV"
                  name="cardCvv"
                  margin="none"
                  autoComplete="cc-csc"
                  fullwidth="true"
                  required
                  format="###"
                />
                <Button
                  type="submit"
                  variant="contained"
                  style={{ marginTop: "40px", backgroundColor: "#ffc617" }}
                  size="medium"
                  color="primary"
                >
                  Сохранить
                </Button>
              </form>
            </Paper>
          </div>
        )
    }
}

export default ProfileForm