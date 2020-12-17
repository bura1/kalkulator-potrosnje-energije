var popisNamirnica = [
	["Mlijeko kravlje punomasno", 65.3],
	["Mlijeko kravlje / 3.3% masti /", 61.7],
	["Mlijeko kravlje / 1.8% masti /", 50.2],
	["Mlijeko kravlje obrano", 34.2],
	["Mlijeko punom.evaporir.nezašećereno", 135.1],
	["Mlijeko punom. kondenz.zašećereno", 328.7],
	["Mlijeko punomasno u prahu", 490.3],
	["Mlijeko obrano u prahu", 349.5],
	["Mlijeko kozje", 71.8],
	["Mlijeko ovčje", 100.1],
	["Mlijeko žene / zrelo /", 70.9],
	["Jogurt / 3.2% masti /", 61.6],
	["Jogurt voćni iz obranog mlijeka", 100.3],
	["Kefir", 60.0],
	["Mlaćenica / stepka /", 40.5],
	["Sirutka svježa", 26.7],
	["Sirutka u prahu", 355.5],
	["Vrhnje kiselo / 10% masti /", 120.0],
	["Vrhnje kiselo / 20% masti/", 206.8],
	["Vrhnje tučeno / 30% masti /", 290.4],
	["Čokoladno mlijeko / punomasno /", 92.0],
	["Sladoled mliječni", 154.0],
	["Sladoled mliječni krem / 10% masti/", 194.0],
	["Camembert / 45% M u ST /", 284.0],
	["Cheddar", 401.0],
	["Edamer / 40% M u ST /", 345.0],
	["Ementaler", 390.0],
	["Gervais / 60% M u ST /", 422.0],
	["Gorgonzola", 345.4],
	["Gouda punomasni", 392.0],
	["Mozzarella", 224.5],
	["Parmezan", 411.0],
	["Roquefort", 359.0],
	["Sir kravlji svježi / obr. mlijeko /", 69.4],
	["Sir kravlji svježi / cottage /", 95.0],
	["Sirni namaz / 20% M u ST /", 174.0],
	["Sirni namaz / 30% M u ST /", 219.0],
	["Sirni namaz / 40% M u ST /", 251.0],
	["Govedina mršava / BK /", 128.7],
	["Govedina srednje masna / BK /", 213.8],
	["Govedina masna / BK /", 326.0],
	["Govedina - kuk (kapak)", 271.6],
	["Govedina - prsa", 251.7],
	["Govedina - pržolica / rostbraten /", 289.9],
	["Govedina - unutr.butina / schol /", 179.2],
	["Janjetina - mršava /BK /", 121.4],
	["Janjetina srednje masna / BK /", 211.0],
	["Janjetina - masna / BK /", 279.0],
	["Jare / prosjek /", 117.3],
	["Kozje meso / prosjek /", 159.4],
	["Konjsko meso srednje masno / BK  /", 108.8],
	["Kunić / težine cca 4 kg /", 174.0],
	["Ovčetina / prosjek -BK /", 293.0],
	["Svinjetina mršava / BK /", 161.0],
	["Svinjetina srednje masna / BK /", 280.0],
	["Svinjetina masna / BK /", 371.0],
	["Teletina mršava / BK /", 113.1],
	["Teletina srednje masna / BK /", 160.1],
	["Teletina masna / BK /", 203.8],
	["Jetra pileća", 128.0],
	["Jetra svinjska", 154.8],
	["Jetra teleća", 153.7],
	["Kobasica / prosjek /", 401.0],
	["Kobasice / kranjske i sl.goved.+svinj./", 393.4],
	["Kobasice svinjske - pečenice", 361.4],
	["Kobasice svinjske suhe", 512.7],
	["Mesni narezak / svinj. + goved. /", 338.0],
	["Mesni narezak / od svinj. mesa /", 424.0],
	["Mortadela / svinj.+ govedina /", 414.7],
	["Salama trajna / milanska i sl. /", 475.2],
	["Salama trajna / svinj. + goved. /", 454.3],
	["Salama trajna / od svinjetine /", 464.7],
	["Slanina suha masna", 781.0],
	["Slanina suha / prerašt. mršava /", 506.0],
	["Šunka dimljena soljena sušena", 434.1],
	["Šunka dimljena kuhana", 412.0],
	["Šunka mršava", 153.4],
	["Šunka mršava prešana", 129.5],
	["Vratina sušena / bez kosti /", 450.6],
	["Kokoš / cijela - prosjek /", 185.8],
	["Patka / samo meso /", 122.0],
	["Pile / cijelo - prosjek /", 229.7],
	["Pile / bijelo meso bez kosti /", 116.0],
	["Pile / crno meso - batak, zabatak /", 125.9],
	["Puran / cijeli prosjek /", 143.0],
	["Puran  / crno meso - batak, zabatak /", 184.4],
	["Puran / bijelo meso - prsa BK /", 132.1],
	["Grgeč", 75.1],
	["Losos", 210.6],
	["Ozimica / jezerski losos /", 149.4],
	["Pastrva kalifornijska", 188.6],
	["Pastrva potočna", 85.8],
	["Som", 162.9],
	["Šaran", 127.2],
	["Štuka", 84.9],
	["Bakalar", 75.9],
	["Cipal", 127.6],
	["Gavun", 98.2],
	["Haringa", 233.7],
	["Inćun / brgljun /", 88.8],
	["Iverak / pasara, ploča /", 74.0],
	["Kovač", 77.7],
	["List", 82.5],
	["Lubin / brancin /", 81.9],
	["Oslić / tovar /", 71.1],
	["Palamida", 96.2],
	["Pas / bjelopjeg, pena /", 80.0],
	["Raža", 68.1],
	["Skuša / lokarda /", 184.0],
	["Srdela", 98.4],
	["Škarpina", 81.7],
	["Tuna", 225.5],
	["Ugor / gruj /", 147.0],
	["Zubatac", 77.0],
	["Hobotnica / mrkač /", 71.6],
	["Lignja / liganj /", 77.0],
	["Sipa", 71.8],
	["Hlap / rarog /", 86.7],
	["Jastog", 85.9],
	["Kozica velika", 85.6],
	["Škampi", 86.7],
	["Dagnja", 73.5],
	["Bakalar suhi", 342.4],
	["Haringa dimljena / bez kosti /", 204.9],
	["Inćun konzervirani", 166.8],
	["Inćun slani", 170.8],
	["Sardine konz. u ulju", 333.5],
	["Sardine konz. / samo riba /", 217.2],
	["Tuna konz. u ulju", 289.2],
	["Tuna u aspiku", 116.5],
	["Bjelanjak kokošji", 44.0],
	["Jaje guščje", 188.8],
	["Jaje kokošje / cijelo /", 151.0],
	["Jaje kokošje u prahu / cijelo /", 562.0],
	["Žutanjak kokošji / sirovi /", 361.0],
	["Maslac / neslani /", 751.0],
	["Mast svinjska / nesoljena /", 891.0],
	["Ulje bučino", 899.1],
	["Ulje bučino miješ. /20% buč+80% jest./", 899.1],
	["Ulje kokosovo", 899.1],
	["Ulje kukuruzno", 899.1],
	["Ulje maslinovo", 899.1],
	["Ulje pšeničnih klica", 899.1],
	["Ulje repičino", 899.1],
	["Ulje sezamovo", 899.1],
	["Ulje sojino", 899.1],
	["Ulje suncokretovo", 899.1],
	["Margarin soft / od biljnih ulja /", 729.4],
	["Majoneza", 732.0],
	["Tartar umak", 541.9],
	["Bob suhi", 315.6],
	["Grah bijeli", 282.0],
	["Grah šareni / trešnjevac /", 285.5],
	["Grašak suhi", 323.8],
	["Leća suha", 317.0],
	["Slanutak suhi", 308.9],
	["Soja suha u zrnu", 427.0],
	["Soja fermentirana - miso", 206.0],
	["Sojino mlijeko", 38.0],
	["Sojin sir - tofu", 79.0],
	["Heljdino brašno", 346.0],
	["Heljdina kaša", 346.0],
	["Ječmena kaša", 381.3],
	["Kukuruz u zrnu - suhi", 359.5],
	["Kukuruzno brašno ili krupica", 361.8],
	["Kukuruzne pahuljice / cornflakes /", 389.2],
	["Kokice / popkorn /", 376.0],
	["Pšenica u zrnu / mekane sorte /", 346.8],
	["Pšenično brašno / puno zrno 100% /", 334.0],
	["Pšenično brašno crno / 85% ekstrah. /", 344.4],
	["Pšenično brašno polub. / 72% ekstrah. /", 355.2],
	["Pšenično brašno bijelo", 370.4],
	["Pšenične klice", 287.0],
	["Pšenična krupica / griz /", 333.0],
	["Pšenične mekinje / posije /", 213.1],
	["Proso", 364.0],
	["Raženo brašno / 100% ekstrah. /", 354.4],
	["Riža nepolirana", 334.0],
	["Riža polirana / ili brašno /", 349.0],
	["Zob u zrnu", 308.1],
	["Zobene pahuljice", 390.7],
	["Makaroni", 350.0],
	["Špageti", 399.4],
	["Tjestenina bez jaja", 355.5],
	["Tjestenina s jajima", 388.0],
	["Graham / i kruh od punog zrna /", 206.0],
	["Kruh miješani / pšen. + raž.-puno zrno /", 230.0],
	["Kruh pšenični bijeli", 234.0],
	["Kruh pšenični bijeli mliječni", 239.0],
	["Kruh pšenični crni", 222.0],
	["Mrvice /ili dvopek / od bijelog kruha /", 373.5],
	["Pecivo bijelo", 256.0],
	["Toast bijeli", 313.3],
	["Kruh kukuruzni žuti domaći", 222.0],
	["Biskvit obični - nemasni", 351.0],
	["Biskvit - masni", 462.0],
	["Biskvit punjen džemom", 317.7],
	["Keksi petit beure", 367.4],
	["Keksi s čokoladnim preljevom", 540.8],
	["Krekeri / masni /", 465.0],
	["Matzes kreker", 325.0],
	["Vafli", 457.4],
	["Šećer kristal", 399.6],
	["Šećer u prahu", 380.0],
	["Šećer smeđi (djelomično rafin.)", 380.0],
	["Med vrcani (prosjek)", 321.6],
	["Bomboni tvrdi obični", 388.0],
	["Bomboni voćni", 292.0],
	["Gumeni bomboni", 352.8],
	["Guma za žvakanje", 280.0],
	["Marshmallow", 328.0],
	["Pepermint bomboni", 392.0],
	["Prženi bademi u šećeru", 459.0],
	["Čokolada mliječna", 528.0],
	["Čokolada", 512.0],
	["Čokolada s lješnjacima", 610.0],
	["Čokoladni namaz", 534.0],
	["Čokoladni bomboni", 490.0],
	["Čokoladni bomboni s likerom", 351.0],
	["Kakao instant (Benko i sl.)", 375.0],
	["Puding u prahu - okus čokolade", 382.0],
	["Puding u prahu (različiti okusi)", 380.0],
	["Džem", 278.4],
	["Marmelada miješana", 278.4],
	["Voćni žele - u kocki (razni)", 274.4],
	["Blitva", 12.1],
	["Celer list", 12.0],
	["Endivija", 10.7],
	["Kelj glavati", 27.3],
	["Kelj lisnati (raštika)", 41.0],
	["Kelj pupčar - prokulica", 27.7],
	["Kiselica (samo listovi)", 31.1],
	["Komorač (list)", 26.0],
	["Kupus glavati bijeli", 23.7],
	["Kupus glavati crveni", 21.7],
	["Kupus glavati zeleni (zimski)", 22.4],
	["Kupus kineski", 12.0],
	["Maslačak (regvart) - list", 47.9],
	["Matovilac (repušac)", 20.0],
	["Peršin list", 20.0],
	["Rabarbara", 12.0],
	["Radić crveni", 11.6],
	["Radić savinjski (witloff)", 18.3],
	["Radić zeleni", 24.5],
	["Salata glavatica", 12.4],
	["Salata zelena", 14.1],
	["Špinat", 12.0],
	["Artičok (mladi cvjetovi)", 17.8],
	["Brokula (vrhovi s cvijetom)", 25.6],
	["Cvjetača (samo cvijet)", 25.4],
	["Cvjetača (listovi i cvijet)", 14.5],
	["Bamija (mladi zeleni plodovi)", 19.0],
	["Bob (mladi sirovi)", 47.2],
	["Grašak zeleni (u zrnu)", 69.2],
	["Grašak zeleni (smrznuti)", 56.4],
	["Grah mladi (sirovi)", 113.8],
	["Mahune zelene (mlade)", 18.9],
	["Mahune žute (zrele)", 28.0],
	["Kukuruz slatki mladi na klipu", 132.8],
	["Krastavci (svježi, sirovi)", 14.5],
	["Paprika zelena", 17.1],
	["Paprika žuta (mesnata)", 23.5],
	["Patlidžan", 16.9],
	["Rajčica crvena", 14.8],
	["Tikva (buča - misirača)", 16.0],
	["Tikva muškatna žuta", 16.0],
	["Tikvice zelene", 15.3],
	["Koraba", 24.0],
	["Šparoge divlje", 36.2],
	["Šparoge vrtne", 22.1],
	["Luk bijeli (češnjak)", 136.0],
	["Luk crveni", 24.4],
	["Luk srebrenac (proljetni)", 37.6],
	["Poriluk (bijeli dio)", 33.3],
	["Poriluk (cijeli)", 28.0],
	["Vlasac (drobnjak) - listovi", 32.0],
	["Celer korijen", 23.7],
	["Cikla", 36.0],
	["Hren", 62.0],
	["Mrkva crvena", 36.0],
	["Paštrnjak", 52.0],
	["Povrtnica (crna rotkva)", 28.0],
	["Rotkvica crvena", 15.2],
	["Repa bijela", 21.1],
	["Repa žuta (koraba)", 21.6],
	["Krumpir mladi", 75.8],
	["Krumpir zreli", 92.5],
	["Krumpir slatki (batat)", 120.0],
	["Jelen gljiva (tartuf)", 36.4],
	["Šampinjoni (uzgojeni)", 16.8],
	["Vrganj", 25.4],
	["Gljive sušene", 151.0],
	["Cikla (kuhana, rezana, konzerv.)", 33.3],
	["Krastavci kiseli", 11.8],
	["Kupus i repa kiseli (rezani pakirani)", 22.7],
	["Kupus kiseli (glave, sirove svj.)", 12.0],
	["Paprika kisela", 15.4],
	["Rajčica - ketchup", 140.0],
	["Rajčica ukuhana (konc. 28 - 30%)", 68.0],
	["Rajčica ukuhana (konc. 10%)", 34.8],
	["Grejp - frut", 28.0],
	["Limun", 12.0],
	["Mandarina", 35.6],
	["Naranča (žuto - narančasto meso)", 37.2],
	["Naranča (crveno meso)", 43.1],
	["Bazgove bobice", 80.9],
	["Borovnice", 65.0],
	["Brusnice", 15.6],
	["Dud (murva)", 37.6],
	["Grožđe bijelo", 63.6],
	["Grožđe crno", 56.9],
	["Jagode", 27.2],
	["Kupine", 30.8],
	["Maline", 26.0],
	["Ogrozd (zreli)", 39.2],
	["Ribiz crni", 30.0],
	["Ribiz bijeli", 27.6],
	["Ribiz crveni", 22.0],
	["Dunja (mesnati dio)", 26.4],
	["Jabuka (cijela)", 40.0],
	["Jabuka (mesnati dio)", 48.8],
	["Kruška (cijela)", 31.2],
	["Kruška (mesnati dio)", 43.6],
	["Mušmula (cijela)", 29.6],
	["Mušmula (mesnati dio)", 44.4],
	["Breskva", 38.8],
	["Marelica", 29.2],
	["Nektarina", 53.2],
	["Šljiva", 40.8],
	["Trešnje", 50.9],
	["Višnje", 44.0],
	["Ananas", 48.4],
	["Avokado (mesnati dio9", 126.0],
	["Banane", 83.9],
	["Kiwi", 40.0],
	["Mango (mesnati dio)", 63.2],
	["Dinja (mesnati dio)", 25.2],
	["Lubenica (mesnati dio)", 22.8],
	["Smokve zelene - zrele", 43.2],
	["Šipak dalmatinski (pomegranate)", 74.7],
	["Datule sušene", 263.6],
	["Grožđice (grožđe suho)", 262.0],
	["Masline zelene, slane konzerv.", 102.6],
	["Rogač mljeveni", 353.4],
	["Smokve sušene", 226.0],
	["Šljive suhe", 170.0],
	["Šipak sušeni (mljeveni)", 348.3],
	["Arašid (kikiriki) sirovi, nesoljeni", 572.6],
	["Arašid (kikiriki) prženi, soljenii", 572.6],
	["Badem oljušteni suhi", 566.3],
	["Kesten", 178.7],
	["Kokosov orah", 351.6],
	["Kokosovo brašno zašećereno", 488.6],
	["Lješnjak sirovi", 381.6],
	["Lješnjak suhi", 701.0],
	["Orah sirovi ", 525.9],
	["Orah suhi", 651.0],
	["Sjemenke bundeve oljušt. Sušene", 590.0],
	["Sjemenke maka (sušene)", 545.8],
	["Sjemenke sezama oljuštene suhe", 637.4],
	["Sjemenke suncokreta oljuštene suhe", 599.0],
	["Kompot od ananasa", 82.0],
	["Kompot od bresaka", 93.2],
	["Kompot od krušaka", 81.6],
	["Kompot od marelica", 112.8],
	["Kompot od šljiva (s košticama)", 69.6],
	["Kompot od trešanja ili višanja", 77.6],
	["Sok od cikle", 36.0],
	["Sok od rajčice (prirodni svježi)", 20.0],
	["Sok od rajčice (konzerv. Slani)", 20.0],
	["Sok od ananasa (konz.)", 56.1],
	["Sok od borovnice", 44.8],
	["Sok od breskve", 48.0],
	["Sok od grejpfruta (prirod. svj.)", 32.8],
	["Sok od grejpfruta (zaslađ. konz.)", 47.7],
	["Sok od grožđa (konzerv.)", 63.3],
	["Sok od jabuke (konzerv.)", 48.1],
	["Sok od kruške (konzerv.)", 54.1],
	["Sok od limuna (prirod. svježi)", 34.8],
	["Sok od mandarina (prirod. svježi)", 43.8],
	["Sok od naranče (prirod. svježi)", 46.2],
	["Sok od naranče (zaslađ. konz.)", 54.9],
	["Sirup od borovnica", 253.6],
	["Sirup od jabuka", 241.2],
	["Sirup od malina", 241.6],
	["Sirup od ribiza", 240.4],
	["Sirup od višnje", 248.0],
	["Bitter lemon", 52.0],
	["Coca - cola", 42.0],
	["Nara i slična gazirana pića", 48.0],
	["Tonic water", 44.0],
	["Pivo", 15.6],
	["Vino bijelo stolno (12 vol % alkoh.)", 14.0],
	["Vino crveno stolno (12 vol % alkoh.)", 10.8],
	["Vino desertno suho", 16.8],
	["Vino desertno slatko", 46.0],
	["Vermut", 64.0],
	["Likeri (prosjek)", 116.0],
	["Konjak (38 vol % alkoh.)", 4.0],
	["Rakija šljivovica (33 vol % alkoh.)", 4.0],
	["Čaj indijski (suhi list)", 108.4],
	["Kakao u prahu nezašećereni", 312.0],
	["Kava u zrnu - pržena", 294.2],
	["Kava instant", 102.4],
	["Juha kokošja s tjesteninom dehidrir.", 343.8]
];