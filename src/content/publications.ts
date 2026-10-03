import type { Locale } from "../data/locales";

export type Publication = {
  title:string;
  venue:string;
  period:string;
  authors:string;
  url:string;
  downloadUrl:string;
};

export const publications: Record<Locale, Publication[]> = {
  fa:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"۲۰۲۰",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"۲۰۱۹",authors:"A. Poro، S. Memarzadeh و همکاران",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  en:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh and collaborators",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  ar:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro، S. Memarzadeh و همکاران",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  ru:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh и соавторы",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  de:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh und Mitautoren",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  zh:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro、S. Memarzadeh 等",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  fr:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh et collaborateurs",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ],
  es:[
    {title:"New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem",venue:"Journal of Occultation and Eclipse (JOE), No. 7",period:"2020",authors:"A. Poro, L. Shirzadi, A. Safary, S. Memarzadeh",url:"https://hal.science/hal-02501416v1",downloadUrl:"https://hal.science/hal-02501416v1"},
    {title:"O-C Study on 545 Lunar Occultation Events of 13 Binary Stars",venue:"Journal of Occultation and Eclipse (JOE), No. 6",period:"2019",authors:"A. Poro, S. Memarzadeh y colaboradores",url:"https://hal.science/hal-02306413v1",downloadUrl:"https://hal.science/hal-02306413v1"}
  ]
};
