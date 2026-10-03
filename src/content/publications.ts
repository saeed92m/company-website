import type { Locale } from "../data/locales";

export type Publication = {
  title:string;
  venue:string;
  period:string;
  authors:string;
};

export const publications: Record<Locale, Publication[]> = {
  fa:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"۲۰۲۰",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"۲۰۱۹",authors:"A. Poro، S. Memarzadeh و همکاران"}
  ],
  en:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh and collaborators"}
  ],
  ar:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro، S. Memarzadeh و همکاران"}
  ],
  ru:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh и соавторы"}
  ],
  de:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh und Mitautoren"}
  ],
  zh:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro、S. Memarzadeh 等"}
  ],
  fr:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh et collaborateurs"}
  ],
  es:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh y colaboradores"}
  ]
};
