import type { countryInterface } from '../types/countryInterface';

export async function getCountries(): Promise<countryInterface[]> {
  // const URL = 'https://restcountries.com/v3.1/name/spain'
  const URL = 'https://restcountries.com/v3.1/all'

  try {
    const resp = await fetch(URL);

    if (!resp.ok) {
      throw new Error('Error al hacer fetch');
    }

    const data: countryInterface[] = await resp.json();
    
    // Ejemplo de acceso a los datos tipados


    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default getCountries;
