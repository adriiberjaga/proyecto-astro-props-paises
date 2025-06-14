export interface countryInterface {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Languages;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: Translations;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: null | string;
  regex: null | string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Car {
  signs?: string[];
  side: string;
}

interface Gini {
  '2018'?: number;
  '2019'?: number;
  '2015'?: number;
  '2014'?: number;
  '2012'?: number;
  '2013'?: number;
  '2005'?: number;
  '2010'?: number;
  '2011'?: number;
  '2016'?: number;
  '2017'?: number;
  '2006'?: number;
  '2009'?: number;
  '1998'?: number;
  '2003'?: number;
  '1999'?: number;
  '1992'?: number;
  '2004'?: number;
  '2008'?: number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Translations {
  ara: Mon;
  bre: Mon;
  ces: Mon;
  cym: Mon;
  deu: Mon;
  est: Mon;
  fin: Mon;
  fra: Mon;
  hrv?: Mon;
  hun: Mon;
  ind?: Mon;
  ita: Mon;
  jpn?: Mon;
  kor: Mon;
  nld: Mon;
  per?: Mon;
  pol: Mon;
  por: Mon;
  rus: Mon;
  slk: Mon;
  spa: Mon;
  srp: Mon;
  swe: Mon;
  tur: Mon;
  urd: Mon;
  zho?: Mon;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Languages {
  mon?: string;
  spa?: string;
  eng?: string;
  ton?: string;
  ara?: string;
  fra?: string;
  zdj?: string;
  swe?: string;
  fij?: string;
  hif?: string;
  por?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  sot?: string;
  ssw?: string;
  tsn?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  fas?: string;
  aze?: string;
  nep?: string;
  ron?: string;
  kin?: string;
  cnr?: string;
  kir?: string;
  rus?: string;
  run?: string;
  gil?: string;
  cat?: string;
  kaz?: string;
  zho?: string;
  ell?: string;
  tur?: string;
  ind?: string;
  msa?: string;
  jpn?: string;
  est?: string;
  cal?: string;
  cha?: string;
  nor?: string;
  ber?: string;
  mey?: string;
  mlg?: string;
  lao?: string;
  som?: string;
  hat?: string;
  ces?: string;
  slk?: string;
  mlt?: string;
  mfe?: string;
  urd?: string;
  lav?: string;
  lit?: string;
  deu?: string;
  ltz?: string;
  mkd?: string;
  srp?: string;
  smo?: string;
  tkl?: string;
  swa?: string;
  kon?: string;
  lin?: string;
  sqi?: string;
  mri?: string;
  nzs?: string;
  tuk?: string;
  rar?: string;
  slv?: string;
  bis?: string;
  dan?: string;
  fil?: string;
  ita?: string;
  uzb?: string;
  fin?: string;
  kor?: string;
  fao?: string;
  hin?: string;
  tam?: string;
  kat?: string;
  bjz?: string;
  nya?: string;
  nld?: string;
  pap?: string;
  heb?: string;
  glv?: string;
  bel?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  pol?: string;
  div?: string;
  kal?: string;
  gle?: string;
  mah?: string;
  tvl?: string;
  tir?: string;
  arc?: string;
  ckb?: string;
  ukr?: string;
  nau?: string;
  eus?: string;
  glc?: string;
  crs?: string;
  bul?: string;
  aym?: string;
  que?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  zib?: string;
  nrf?: string;
  pov?: string;
  pih?: string;
  isl?: string;
  hmo?: string;
  tpi?: string;
  khm?: string;
  jam?: string;
  hye?: string;
  vie?: string;
  nfr?: string;
  tha?: string;
  sag?: string;
  grn?: string;
  tet?: string;
  prs?: string;
  pus?: string;
  dzo?: string;
  mya?: string;
  hrv?: string;
  lua?: string;
  sin?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  gsw?: string;
  roh?: string;
  hun?: string;
  lat?: string;
  ben?: string;
  niu?: string;
  amh?: string;
  tgk?: string;
  bos?: string;
  pau?: string;
}

interface Idd {
  root?: string;
  suffixes?: string[];
}

interface Currencies {
  MNT?: MNT;
  PAB?: MNT;
  USD?: MNT;
  TOP?: MNT;
  KMF?: MNT;
  SEK?: MNT;
  GNF?: MNT;
  FJD?: MNT;
  SAR?: MNT;
  XPF?: MNT;
  CVE?: MNT;
  AUD?: MNT;
  ZAR?: MNT;
  IRR?: MNT;
  AZN?: MNT;
  NPR?: MNT;
  LBP?: MNT;
  SSP?: MNT;
  STN?: MNT;
  MDL?: MNT;
  RWF?: MNT;
  EUR?: MNT;
  KGS?: MNT;
  BIF?: MNT;
  KID?: MNT;
  BBD?: MNT;
  KZT?: MNT;
  JOD?: MNT;
  MOP?: MNT;
  IDR?: MNT;
  BND?: MNT;
  SGD?: MNT;
  JPY?: MNT;
  CAD?: MNT;
  NOK?: MNT;
  AED?: MNT;
  BWP?: MNT;
  MRU?: MNT;
  DZD?: MNT;
  MAD?: MNT;
  MGA?: MNT;
  LAK?: MNT;
  SOS?: MNT;
  HTG?: MNT;
  FKP?: MNT;
  CZK?: MNT;
  BSD?: MNT;
  MUR?: MNT;
  PKR?: MNT;
  SDG?: MNT;
  MKD?: MNT;
  GBP?: MNT;
  RSD?: MNT;
  NZD?: MNT;
  KES?: MNT;
  XOF?: MNT;
  XAF?: MNT;
  CUC?: MNT;
  CUP?: MNT;
  SZL?: MNT;
  ALL?: MNT;
  RON?: MNT;
  OMR?: MNT;
  EGP?: MNT;
  RUB?: MNT;
  TMT?: MNT;
  CKD?: MNT;
  VUV?: MNT;
  XCD?: MNT;
  UYU?: MNT;
  DKK?: MNT;
  PHP?: MNT;
  ILS?: MNT;
  UZS?: MNT;
  KRW?: MNT;
  FOK?: MNT;
  QAR?: MNT;
  INR?: MNT;
  MZN?: MNT;
  YER?: MNT;
  TWD?: MNT;
  BMD?: MNT;
  GEL?: MNT;
  BZD?: MNT;
  MWK?: MNT;
  AWG?: MNT;
  IMP?: MNT;
  BYN?: MNT;
  NAD?: MNT;
  GTQ?: MNT;
  BRL?: MNT;
  PLN?: MNT;
  MVR?: MNT;
  GYD?: MNT;
  KPW?: MNT;
  SBD?: MNT;
  GIP?: MNT;
  TND?: MNT;
  TVD?: MNT;
  ANG?: MNT;
  ERN?: MNT;
  WST?: MNT;
  DOP?: MNT;
  UGX?: MNT;
  IQD?: MNT;
  UAH?: MNT;
  LRD?: MNT;
  HKD?: MNT;
  CHF?: MNT;
  TRY?: MNT;
  SCR?: MNT;
  BGN?: MNT;
  AOA?: MNT;
  PEN?: MNT;
  CLP?: MNT;
  NIO?: MNT;
  ZWL?: MNT;
  JEP?: MNT;
  COP?: MNT;
  BHD?: MNT;
  TZS?: MNT;
  VES?: MNT;
  ISK?: MNT;
  TTD?: MNT;
  CRC?: MNT;
  PGK?: MNT;
  KHR?: MNT;
  JMD?: MNT;
  SRD?: MNT;
  ZMW?: MNT;
  AMD?: MNT;
  VND?: MNT;
  DJF?: MNT;
  GGP?: MNT;
  SHP?: MNT;
  KWD?: MNT;
  SLE?: MNT;
  HNL?: MNT;
  MXN?: MNT;
  NGN?: MNT;
  LYD?: MNT;
  THB?: MNT;
  PYG?: MNT;
  AFN?: MNT;
  BTN?: MNT;
  MMK?: MNT;
  SYP?: MNT;
  BOB?: MNT;
  CDF?: MNT;
  ARS?: MNT;
  LKR?: MNT;
  LSL?: MNT;
  GMD?: MNT;
  MYR?: MNT;
  GHS?: MNT;
  HUF?: MNT;
  BDT?: MNT;
  KYD?: MNT;
  ETB?: MNT;
  TJS?: MNT;
  BAM?: MNT;
  CNY?: MNT;
}

interface MNT {
  symbol: string;
  name: string;
}

interface Name {
  common: string;
  official: string;
  nativeName?: NativeName;
}

interface NativeName {
  mon?: Mon;
  spa?: Mon;
  eng?: Mon;
  ton?: Mon;
  ara?: Mon;
  fra?: Mon;
  zdj?: Mon;
  swe?: Mon;
  fij?: Mon;
  hif?: Mon;
  por?: Mon;
  afr?: Mon;
  nbl?: Mon;
  nso?: Mon;
  sot?: Mon;
  ssw?: Mon;
  tsn?: Mon;
  tso?: Mon;
  ven?: Mon;
  xho?: Mon;
  zul?: Mon;
  fas?: Mon;
  aze?: Mon;
  nep?: Mon;
  ron?: Mon;
  kin?: Mon;
  cnr?: Mon;
  kir?: Mon;
  rus?: Mon;
  run?: Mon;
  gil?: Mon;
  cat?: Mon;
  kaz?: Mon;
  zho?: Mon;
  ell?: Mon;
  tur?: Mon;
  ind?: Mon;
  msa?: Mon;
  jpn?: Mon;
  est?: Mon;
  cal?: Mon;
  cha?: Mon;
  nor?: Mon;
  ber?: Mon;
  mey?: Mon;
  mlg?: Mon;
  lao?: Mon;
  som?: Mon;
  hat?: Mon;
  ces?: Mon;
  slk?: Mon;
  mlt?: Mon;
  mfe?: Mon;
  urd?: Mon;
  lav?: Mon;
  lit?: Mon;
  deu?: Mon;
  ltz?: Mon;
  mkd?: Mon;
  srp?: Mon;
  smo?: Mon;
  tkl?: Mon;
  swa?: Mon;
  kon?: Mon;
  lin?: Mon;
  sqi?: Mon;
  mri?: Mon;
  nzs?: Mon;
  tuk?: Mon;
  rar?: Mon;
  slv?: Mon;
  bis?: Mon;
  dan?: Mon;
  fil?: Mon;
  ita?: Mon;
  uzb?: Mon;
  fin?: Mon;
  kor?: Mon;
  fao?: Mon;
  hin?: Mon;
  tam?: Mon;
  kat?: Mon;
  bjz?: Mon;
  nya?: Mon;
  nld?: Mon;
  pap?: Mon;
  heb?: Mon;
  glv?: Mon;
  bel?: Mon;
  her?: Mon;
  hgm?: Mon;
  kwn?: Mon;
  loz?: Mon;
  ndo?: Mon;
  pol?: Mon;
  div?: Mon;
  kal?: Mon;
  gle?: Mon;
  mah?: Mon;
  tvl?: Mon;
  tir?: Mon;
  arc?: Mon;
  ckb?: Mon;
  ukr?: Mon;
  nau?: Mon;
  crs?: Mon;
  bul?: Mon;
  aym?: Mon;
  que?: Mon;
  bwg?: Mon;
  kck?: Mon;
  khi?: Mon;
  ndc?: Mon;
  nde?: Mon;
  sna?: Mon;
  toi?: Mon;
  zib?: Mon;
  nrf?: Mon;
  bar?: Mon;
  pov?: Mon;
  pih?: Mon;
  isl?: Mon;
  hmo?: Mon;
  tpi?: Mon;
  khm?: Mon;
  jam?: Mon;
  hye?: Mon;
  vie?: Mon;
  nfr?: Mon;
  tha?: Mon;
  sag?: Mon;
  grn?: Mon;
  tet?: Mon;
  prs?: Mon;
  pus?: Mon;
  dzo?: Mon;
  mya?: Mon;
  hrv?: Mon;
  lua?: Mon;
  sin?: Mon;
  nno?: Mon;
  nob?: Mon;
  smi?: Mon;
  gsw?: Mon;
  roh?: Mon;
  hun?: Mon;
  lat?: Mon;
  ben?: Mon;
  niu?: Mon;
  amh?: Mon;
  tgk?: Mon;
  bos?: Mon;
  pau?: Mon;
}

interface Mon {
  official: string;
  common: string;
}