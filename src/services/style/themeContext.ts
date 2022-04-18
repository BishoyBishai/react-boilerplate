import React from 'react';
import { TMode } from '../../models';

export const ThemeModeContext = React.createContext<{ mode: TMode; setMode?: React.Dispatch<React.SetStateAction<TMode>> }>({ mode: 'light' });
