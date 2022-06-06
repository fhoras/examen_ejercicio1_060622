let cant = document.getElementById("cantidad");

function AzarNumeros(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargar_numeros_vector(max: number): number[] {
  let numeros: number[] = [];
  for (let i = 0; i < max; i++) {
    numeros[i] = AzarNumeros(10, -10);
  }
  console.log(numeros);
  return numeros;
}

function consultar_min(vector_numeros: number[]) {
  let min: number = 0;
  let cant: number = vector_numeros.length;
  for (let i = 0; i < cant; i++) {
    if (vector_numeros[i] < min) {
      min = vector_numeros[i];
    }
  }
  console.log(min);
}
btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let vector_numeros: number[];
  vector_numeros = cargar_numeros_vector(cantidad);
  consultar_min(vector_numeros);
});
