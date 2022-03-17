import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  createGame,
  initialiazeGame,
} from '../game/gameReducers';
import { RootState } from '../store/store';
import { GameTable } from '../game/gameTable';
import {
  useAppStyles,
  Item,
  lightTheme,
} from './appStyles';

function App() {
  const dispatch = useDispatch();
  const classes = useAppStyles();
  const gameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  const onPlayGame = () => dispatch(createGame('new 1'));
  const renderMessage = (message: string) => message !== 'OK' ? message : '';

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <div className={classes.field}>
          <Item elevation={2} className={classes.box}>
            <div className={classes.header}>
              <p className={classes.headText}>Minesweeper</p>
              <p className={classes.message}>
                {renderMessage(gameState.message)}
              </p>
            </div>
            <div className={gameState.map.length <= 10 ? `${classes.contentBox} ${classes.smallContentBox}` : classes.contentBox}>
              <GameTable gameMap={gameState.map} />
            </div>
            <div className={classes.footer}>
              <Button
                onClick={onPlayGame}
                variant="contained"
                color="success"
                className={classes.playButton}
                data-testid="start-game-btn"
              >
                {gameState.map.length ? 'Play again' : 'Play'}
              </Button>
            </div>
          </Item>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
