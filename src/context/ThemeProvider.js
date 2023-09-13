import React, { useEffect } from 'react';
import { getInstitucion } from '../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const ThemeProvider = ({ children }) => {
  const { isLoading, data: institucion } = useQuery({
    queryKey: ['institucion'],
    queryFn: getInstitucion,
  });

  useEffect(() => {
    if (!isLoading && institucion) {
      document.documentElement.style.setProperty(
        "--color-primario",
        institucion.color_primario
      );
      document.documentElement.style.setProperty(
        "--color-secundario",
        institucion.color_secundario
      );
      document.documentElement.style.setProperty(
        "--color-terciario",
        institucion.color_terciario
      );
    }
  }, [isLoading, institucion]);

  if(!isLoading){
    return <>{children}</>;
  }
  return null
};

export default ThemeProvider;