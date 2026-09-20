// Country -> search terms for finding restaurants of that cuisine in OpenStreetMap.
// The first term is also used to match restaurant names ("Hungarian Kitchen").
// OSM cuisine tags are lowercase and use underscores for spaces ("sri_lankan").

const CUISINES = {
    'Afghanistan': ['afghan'], 'Albania': ['albanian'], 'Algeria': ['algerian'], 'Andorra': ['andorran', 'catalan'],
    'Angola': ['angolan'], 'Antigua and Barbuda': ['antiguan', 'caribbean'], 'Argentina': ['argentinian', 'argentine', 'argentinean'],
    'Armenia': ['armenian'], 'Australia': ['australian'], 'Austria': ['austrian'], 'Azerbaijan': ['azerbaijani', 'azeri'],
    'Bahamas': ['bahamian', 'caribbean'], 'Bahrain': ['bahraini'], 'Bangladesh': ['bangladeshi', 'bengali'],
    'Barbados': ['barbadian', 'bajan', 'caribbean'], 'Belarus': ['belarusian'], 'Belgium': ['belgian'], 'Belize': ['belizean'],
    'Benin': ['beninese'], 'Bhutan': ['bhutanese'], 'Bolivia': ['bolivian'], 'Bosnia and Herzegovina': ['bosnian'],
    'Botswana': ['botswanan', 'tswana'], 'Brazil': ['brazilian'], 'Brunei': ['bruneian'], 'Bulgaria': ['bulgarian'],
    'Burkina Faso': ['burkinabe'], 'Burundi': ['burundian'], 'Cabo Verde': ['cape verdean', 'cabo verde'],
    'Cambodia': ['cambodian', 'khmer'], 'Cameroon': ['cameroonian'], 'Canada': ['canadian', 'poutine'],
    'Central African Republic': ['central african'], 'Chad': ['chadian'], 'Chile': ['chilean'], 'China': ['chinese'],
    'Colombia': ['colombian'], 'Comoros': ['comorian'], 'Congo': ['congolese'], 'DR Congo': ['congolese'],
    'Costa Rica': ['costa rican'], 'Croatia': ['croatian'], 'Cuba': ['cuban'], 'Cyprus': ['cypriot'], 'Czechia': ['czech'],
    'Denmark': ['danish'], 'Djibouti': ['djiboutian'], 'Dominica': ['dominica'], 'Dominican Republic': ['dominican'],
    'Ecuador': ['ecuadorian', 'ecuadorean'], 'Egypt': ['egyptian'], 'El Salvador': ['salvadoran', 'salvadorian'],
    'Equatorial Guinea': ['equatoguinean'], 'Eritrea': ['eritrean'], 'Estonia': ['estonian'], 'Eswatini': ['swazi'],
    'Ethiopia': ['ethiopian'], 'Fiji': ['fijian'], 'Finland': ['finnish'], 'France': ['french'], 'Gabon': ['gabonese'],
    'Gambia': ['gambian'], 'Georgia': ['georgian'], 'Germany': ['german'], 'Ghana': ['ghanaian'], 'Greece': ['greek'],
    'Grenada': ['grenadian'], 'Guatemala': ['guatemalan'], 'Guinea': ['guinean'], 'Guinea-Bissau': ['guinea-bissau', 'bissau'],
    'Guyana': ['guyanese'], 'Haiti': ['haitian'], 'Honduras': ['honduran'], 'Hungary': ['hungarian'], 'Iceland': ['icelandic'],
    'India': ['indian'], 'Indonesia': ['indonesian'], 'Iran': ['iranian', 'persian'], 'Iraq': ['iraqi'], 'Ireland': ['irish'],
    'Israel': ['israeli'], 'Italy': ['italian'], 'Jamaica': ['jamaican'], 'Japan': ['japanese'], 'Jordan': ['jordanian'],
    'Kazakhstan': ['kazakh'], 'Kenya': ['kenyan'], 'Kiribati': ['kiribati'], 'North Korea': ['north korean'],
    'South Korea': ['korean'], 'Kuwait': ['kuwaiti'], 'Kyrgyzstan': ['kyrgyz'], 'Laos': ['lao', 'laotian'], 'Latvia': ['latvian'],
    'Lebanon': ['lebanese'], 'Lesotho': ['basotho', 'lesotho'], 'Liberia': ['liberian'], 'Libya': ['libyan'],
    'Liechtenstein': ['liechtenstein'], 'Lithuania': ['lithuanian'], 'Luxembourg': ['luxembourgish', 'luxembourg'],
    'Madagascar': ['malagasy', 'madagascan'], 'Malawi': ['malawian'], 'Malaysia': ['malaysian'], 'Maldives': ['maldivian'],
    'Mali': ['malian'], 'Malta': ['maltese'], 'Marshall Islands': ['marshallese'], 'Mauritania': ['mauritanian'],
    'Mauritius': ['mauritian'], 'Mexico': ['mexican'], 'Micronesia': ['micronesian'], 'Moldova': ['moldovan'],
    'Monaco': ['monegasque', 'monaco'], 'Mongolia': ['mongolian'], 'Montenegro': ['montenegrin'], 'Morocco': ['moroccan'],
    'Mozambique': ['mozambican'], 'Myanmar': ['burmese', 'myanmar'], 'Namibia': ['namibian'], 'Nauru': ['nauruan'],
    'Nepal': ['nepalese', 'nepali'], 'Netherlands': ['dutch'], 'New Zealand': ['new zealand', 'kiwi'], 'Nicaragua': ['nicaraguan'],
    'Niger': ['nigerien'], 'Nigeria': ['nigerian'], 'North Macedonia': ['macedonian'], 'Norway': ['norwegian'], 'Oman': ['omani'],
    'Pakistan': ['pakistani'], 'Palau': ['palauan'], 'Palestine': ['palestinian'], 'Panama': ['panamanian'],
    'Papua New Guinea': ['papua new guinea', 'papuan'], 'Paraguay': ['paraguayan'], 'Peru': ['peruvian'],
    'Philippines': ['filipino', 'philippine'], 'Poland': ['polish'], 'Portugal': ['portuguese'], 'Qatar': ['qatari'],
    'Romania': ['romanian'], 'Russia': ['russian'], 'Rwanda': ['rwandan'], 'Saint Kitts and Nevis': ['kittitian', 'st kitts'],
    'Saint Lucia': ['saint lucian', 'st lucia'], 'Saint Vincent and the Grenadines': ['vincentian', 'st vincent'],
    'Samoa': ['samoan'], 'San Marino': ['sammarinese', 'san marino'], 'Sao Tome and Principe': ['sao tome', 'são tomé'],
    'Saudi Arabia': ['saudi'], 'Senegal': ['senegalese'], 'Serbia': ['serbian'], 'Seychelles': ['seychellois', 'seychelles'],
    'Sierra Leone': ['sierra leonean', 'sierra leone'], 'Singapore': ['singaporean'], 'Slovakia': ['slovak'],
    'Slovenia': ['slovenian', 'slovene'], 'Solomon Islands': ['solomon'], 'Somalia': ['somali'], 'South Africa': ['south african'],
    'South Sudan': ['south sudanese'], 'Spain': ['spanish', 'tapas'], 'Sri Lanka': ['sri lankan'], 'Sudan': ['sudanese'],
    'Suriname': ['surinamese'], 'Sweden': ['swedish'], 'Switzerland': ['swiss'], 'Syria': ['syrian'], 'Taiwan': ['taiwanese'],
    'Tajikistan': ['tajik'], 'Tanzania': ['tanzanian'], 'Thailand': ['thai'], 'Timor-Leste': ['timorese'], 'Togo': ['togolese'],
    'Tonga': ['tongan'], 'Trinidad and Tobago': ['trinidadian', 'trini'], 'Tunisia': ['tunisian'], 'Türkiye': ['turkish'],
    'Turkmenistan': ['turkmen'], 'Tuvalu': ['tuvaluan'], 'Uganda': ['ugandan'], 'Ukraine': ['ukrainian'],
    'United Arab Emirates': ['emirati'], 'United Kingdom': ['british'], 'United States': ['american'], 'Uruguay': ['uruguayan'],
    'Uzbekistan': ['uzbek'], 'Vanuatu': ['vanuatu'], 'Vatican City': ['vatican'], 'Venezuela': ['venezuelan'],
    'Vietnam': ['vietnamese'], 'Yemen': ['yemeni'], 'Zambia': ['zambian'], 'Zimbabwe': ['zimbabwean']
};

module.exports = { CUISINES };

// When a country has little or nothing tagged in OSM, fall back to the nearest regional
// cuisine so the group still gets somewhere to go. Listed as [search terms, countries].
const REGION_GROUPS = [
    [['caribbean', 'west indian'], ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Cuba', 'Dominica', 'Dominican Republic', 'Grenada', 'Haiti', 'Jamaica', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'Guyana', 'Suriname']],
    [['latin american', 'central american', 'mexican'], ['Belize', 'Costa Rica', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama']],
    [['latin american', 'south american'], ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela']],
    [['north american', 'american'], ['Canada', 'United States']],
    [['west african', 'african', 'nigerian'], ['Benin', 'Burkina Faso', 'Cabo Verde', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Liberia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Togo']],
    [['central african', 'african', 'congolese'], ['Angola', 'Cameroon', 'Central African Republic', 'Chad', 'Congo', 'DR Congo', 'Equatorial Guinea', 'Gabon', 'Sao Tome and Principe']],
    [['east african', 'african', 'ethiopian'], ['Burundi', 'Comoros', 'Djibouti', 'Eritrea', 'Ethiopia', 'Kenya', 'Madagascar', 'Malawi', 'Mauritius', 'Mozambique', 'Rwanda', 'Seychelles', 'Somalia', 'South Sudan', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe']],
    [['south african', 'african'], ['Botswana', 'Eswatini', 'Lesotho', 'Namibia', 'South Africa']],
    [['north african', 'maghrebi', 'moroccan'], ['Algeria', 'Egypt', 'Libya', 'Morocco', 'Sudan', 'Tunisia']],
    [['middle eastern', 'arab', 'lebanese'], ['Bahrain', 'Iraq', 'Jordan', 'Kuwait', 'Lebanon', 'Oman', 'Palestine', 'Qatar', 'Saudi Arabia', 'Syria', 'United Arab Emirates', 'Yemen']],
    [['persian', 'iranian', 'middle eastern'], ['Iran', 'Afghanistan']],
    [['central asian', 'uzbek', 'turkish'], ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Uzbekistan']],
    [['caucasian', 'georgian', 'turkish'], ['Armenia', 'Azerbaijan', 'Georgia']],
    [['balkan', 'eastern european', 'greek'], ['Albania', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Montenegro', 'North Macedonia', 'Serbia', 'Slovenia']],
    [['eastern european', 'polish', 'russian'], ['Belarus', 'Moldova', 'Russia', 'Ukraine', 'Poland', 'Romania']],
    [['baltic', 'eastern european', 'polish'], ['Estonia', 'Latvia', 'Lithuania']],
    [['scandinavian', 'nordic', 'danish'], ['Denmark', 'Finland', 'Iceland', 'Norway', 'Sweden']],
    [['central european', 'german', 'austrian'], ['Austria', 'Czechia', 'Germany', 'Hungary', 'Liechtenstein', 'Luxembourg', 'Slovakia', 'Switzerland']],
    [['french'], ['Monaco', 'Belgium']],
    [['italian'], ['San Marino', 'Vatican City']],
    [['spanish', 'catalan', 'tapas'], ['Andorra', 'Portugal']],
    [['mediterranean', 'italian', 'greek'], ['Malta', 'Cyprus']],
    [['pacific', 'polynesian', 'hawaiian'], ['Fiji', 'Kiribati', 'Marshall Islands', 'Micronesia', 'Nauru', 'Palau', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tonga', 'Tuvalu', 'Vanuatu']],
    [['australian', 'new zealand', 'pacific'], ['Australia', 'New Zealand']],
    [['south asian', 'indian', 'nepalese'], ['Bangladesh', 'Bhutan', 'Maldives', 'Nepal', 'Pakistan', 'Sri Lanka']],
    [['southeast asian', 'thai', 'malaysian'], ['Brunei', 'Cambodia', 'Indonesia', 'Laos', 'Malaysia', 'Myanmar', 'Singapore', 'Timor-Leste', 'Vietnam', 'Philippines']],
    [['korean'], ['North Korea']],
    [['mongolian', 'chinese'], ['Mongolia']],
    [['chinese', 'taiwanese'], ['Taiwan', 'China']],
    [['japanese'], ['Japan']],
    [['turkish', 'middle eastern'], ['Türkiye']],
    [['israeli', 'middle eastern'], ['Israel']],
    [['irish', 'british'], ['Ireland', 'United Kingdom']]
];

const REGIONS = {};
for (const [terms, countries] of REGION_GROUPS) for (const c of countries) REGIONS[c] = terms;

module.exports.REGIONS = REGIONS;
