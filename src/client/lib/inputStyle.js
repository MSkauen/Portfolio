import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    root: {
        "& .MuiFormLabel-root": {
            color: "#c3c3c3",
            borderWidth: '2px',
        },
        '& label.Mui-focused': {
            color: 'white',
            borderWidth: '2px',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
            borderWidth: '2px',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',

            '& fieldset': {
                borderColor: '#6e85b2',
                borderWidth: '2px',
            },
            '&:hover fieldset': {
                borderColor: '#525252',
                borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6e85b2',
                borderWidth: '2px',
            },
        },
    }});

module.exports = {useStyles};
