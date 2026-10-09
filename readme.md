# ⚡ Análisis del Mercado Eléctrico Español (2018)

## 📌 Descripción
Este proyecto analiza el comportamiento operativo y económico del sistema eléctrico peninsular español durante el año 2018 a partir de 8.760 registros horarios oficiales. El objetivo principal es evaluar la precisión del operador en la previsión de demanda, la formación marginalista del precio del pool y el impacto del despliegue renovable sobre el mercado mayorista. Para ello, se integran datos del mercado financiero (OMIE), del operador del sistema (REE) y variables climáticas peninsulares dentro de un flujo completo de ETL y modelado en un cuadro de mando interactivo.

---

## 📁 Estructura del Proyecto
```text
├── data/
│   ├── raw_data/                  # Registros horarios originales (Kaggle / ENTSO-E)
│   └── clean_data/                # Matriz saneada con variables calculadas e imputaciones
├── docs/
│   └── INFORME_TECNICO_DATAPROJECT.pdf  # Informe analítico completo de negocio
├── scripts/
│   └── macros.js              # Macro en Google Apps Script para exportar el dashboard
└── README.md                      # Documentación principal del repositorio
```

## 📊 Resultados y Conclusiones Breves

| Indicador Clave (KPI) | Valor Anual 2018 | Referencia | Desviación | Conclusión Analítica |
| :--- | :---: | :---: | :---: | :--- |
| **Precio Final Liquidado** | **63,44 €/MWh** | 57,29 €/MWh *(Diario)* | `+6,15 €/MWh` | Sobrecoste por servicios de ajuste y restricciones técnicas de red |
| **Demanda Peninsular** | **254,54 TW** | 254,56 TW *(Prevista)* | `-0,01%` | Ajuste de balance volumétrico anual prácticamente exacto. |
| **Pico Máximo** | **40.693 MWh** | 29.057 MWh *(Media)* | `+40,04%` | Máximo anual (8 de febrero) por ola de frío. |
| **Cuota Renovable** | **38,10%** | 40,00% *(Objetivo UE)* | `-1,90 p.p.` | Liderada por la aportación eólica e hidroeléctrica. |
| **Error Previsión (MAPE)** | **0,93%** | 2,00% *(Estándar red)* | `-1,07 p.p.` | Gran desempeño predictivo del algoritmo de balance de REE. |

El análisis evidencia que el coste de la electricidad no depende solo del volumen consumido, sino de la tecnología marginal requerida en cada momento. Mientras que la aportación renovable abarata la casación diaria, la desconexión solar tensiona la red y encarece el cierre diario con ciclos combinados. Esta dinámica física, unida a un sobrecoste de balance de +6,15 €/MWh por restricciones técnicas, sitúa la gestión de la demanda y el arbitraje con almacenamiento como las palancas estratégicas determinantes para comercializadoras, generadores y grandes consumidores.

## 🔗 Enlace a la hoja de cálculos (Google Sheets)
Puedes consultar el modelo analítico completo, las matrices de datos (`clean_data`) y el dashboard en el siguiente enlace oficial:
https://docs.google.com/spreadsheets/d/1XPGJvredC7gG07FQ_lJ4fOAoWgt4E00nPMi1QJpxq-I/edit?usp=sharing

También cuenta con unas pestañas destinadas a la explicación de cada una de las variables (glosarios)

## 🚀 Próximos Pasos e Ideas de ExpansiónModelo Predictivo de Precios:

 Implementar modelos de Machine Learning para pronosticar el precio marginal horario con 24 horas de antelación.
   
 Análisis de Series Multianuales: Incorporar datos históricos posteriores a 2018 para analizar el impacto de la eliminación de peajes solares y la aceleración fotovoltaica reciente.

 ## 🤝 Contribuciones

 Las contribuciones, sugerencias y mejoras son bienvenidas. 
 
 ## 👤 Autor
 
 Carlos A. Ferrer Mendoza — Ingeniero Electrónico | MBA y Alumno del Máster en Data & Analytics (ThePower Business School).
 www.linkedin.com/in/carlos-ferrer-mendoza-835294292