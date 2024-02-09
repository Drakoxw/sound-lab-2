export type RadioOptionsContactUs = { value: string; label: string; id: string };

export const radioButtonsFormContactUs: RadioOptionsContactUs[] = [
  {
    value: 'Escenarios DJ',
    label: 'Escenarios DJ',
    id: 'DJ_stages',
  },
  {
    value: 'Respuestos',
    label: 'Respuestos',
    id: 'Spare_parts',
  },
  {
    label: 'Soporte, implementación o mantenimiento de sonido',
    value: 'Soporte, implementación o mantenimiento de sonido',
    id: 'Technological_Support',
  },
  {
    value: 'Alquiler de equipos',
    label: 'Alquiler de equipos',
    id: 'Equipment_rental',
  },
  {
    value: 'Montaje de clubes o discotecas',
    label: 'Montaje de clubes o discotecas',
    id: 'assembly_of_clubs',
  },
  {
    value: 'Otro',
    label: 'Otro',
    id: 'other_subject',
  },
]
