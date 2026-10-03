import type { Locale } from "../data/locales";

export type Publication = {
  title:string;
  venue:string;
  period:string;
  authors:string;
};

export const publications: Record<Locale, Publication[]> = {
  fa:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"۲۰۲۰",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"۲۰۱۹",authors:"A. Poro، S. Memarzadeh و همکاران",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  en:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh and collaborators",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  ar:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro، S. Memarzadeh و همکاران",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  ru:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh и соавторы",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  de:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh und Mitautoren",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  zh:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro、S. Memarzadeh 等",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  fr:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh et collaborateurs",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ],
  es:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://www.researchgate.net/publication/339944254_The_New_Ephemeris_of_BZ_Leo_V2545_Cyg_and_V0402_Gem",downloadUrl:"https://hal.archives-ouvertes.fr/hal-02501416"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh y colaboradores",url:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars",downloadUrl:"https://www.researchgate.net/publication/336318898_O-C_Study_of_545_Lunar_Occultations_from_13_Double_Stars"}
  ]
};
