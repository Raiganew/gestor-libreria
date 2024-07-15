const formatearDinero = valor => {
  const formatter = Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  });
  return formatter.format(valor);
}

export { formatearDinero };
