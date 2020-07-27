import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Header from '../../Components/Header/Header';

const useEstilos = makeStyles({
  titulo: {
    textAlign: 'center',
    color: 'blue',
  },
});

const Sobre = () => {
  const classes = useEstilos();

  return (
    <>
      <Header />

      <Container maxWidth="sm">
        <Typography className={classes.titulo} variant="h1" component="h2">
          Sobre
        </Typography>
        <Typography variant="body1" component="p">
          A Casa do Código é uma editora que desenvolve e edita livros em diversos formatos.
        </Typography>
      </Container>
    </>
  );
};
export default Sobre;
