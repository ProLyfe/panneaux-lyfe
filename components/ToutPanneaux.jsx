import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

//DEBUT PANNEAUX INTERDICTION

import Logo1 from '../assets/panneaux-svg/3_interdiction/B0.svg';
import Logo2 from '../assets/panneaux-svg/3_interdiction/B1.svg';
import Logo3 from '../assets/panneaux-svg/3_interdiction/B2a.svg';
import Logo4 from '../assets/panneaux-svg/3_interdiction/B2b.svg';

import Logo5 from '../assets/panneaux-svg/3_interdiction/B2c.svg';
import Logo6 from '../assets/panneaux-svg/3_interdiction/B3.svg';
import Logo7 from '../assets/panneaux-svg/3_interdiction/B3a.svg';
import Logo8 from '../assets/panneaux-svg/3_interdiction/B4.svg';

import Logo9 from '../assets/panneaux-svg/3_interdiction/B5a.svg';
import Logo10 from '../assets/panneaux-svg/3_interdiction/B5b.svg';
import Logo11 from '../assets/panneaux-svg/3_interdiction/B5c.svg';
import Logo12 from '../assets/panneaux-svg/3_interdiction/B6a1.svg';

import Logo13 from '../assets/panneaux-svg/3_interdiction/B6a2.svg';
import Logo14 from '../assets/panneaux-svg/3_interdiction/B6a3.svg';
import Logo15 from '../assets/panneaux-svg/3_interdiction/B6d.svg';
import Logo16 from '../assets/panneaux-svg/3_interdiction/B7a.svg';

import Logo17 from '../assets/panneaux-svg/3_interdiction/B7b.svg';
import Logo18 from '../assets/panneaux-svg/3_interdiction/B8.svg';
import Logo19 from '../assets/panneaux-svg/3_interdiction/B9a.svg';
import Logo20 from '../assets/panneaux-svg/3_interdiction/B9b.svg';

import Logo21 from '../assets/panneaux-svg/3_interdiction/B9c.svg';
import Logo22 from '../assets/panneaux-svg/3_interdiction/B9d.svg';
import Logo23 from '../assets/panneaux-svg/3_interdiction/B9e.svg';
import Logo24 from '../assets/panneaux-svg/3_interdiction/B9f.svg';

import Logo25 from '../assets/panneaux-svg/3_interdiction/B9g.svg';
import Logo26 from '../assets/panneaux-svg/3_interdiction/B9h.svg';
import Logo27 from '../assets/panneaux-svg/3_interdiction/B9i.svg';
import Logo28 from '../assets/panneaux-svg/3_interdiction/B10a.svg';

import Logo29 from '../assets/panneaux-svg/3_interdiction/B11.svg';
import Logo30 from '../assets/panneaux-svg/3_interdiction/B12.svg';
import Logo31 from '../assets/panneaux-svg/3_interdiction/B13.svg';
import Logo32 from '../assets/panneaux-svg/3_interdiction/B13a.svg';

import Logo33 from '../assets/panneaux-svg/3_interdiction/B14_15.svg';
import Logo34 from '../assets/panneaux-svg/3_interdiction/B14_30.svg';
import Logo35 from '../assets/panneaux-svg/3_interdiction/B14_50.svg';
import Logo36 from '../assets/panneaux-svg/3_interdiction/B14_70.svg';

import Logo37 from '../assets/panneaux-svg/3_interdiction/B14_90.svg';
import Logo38 from '../assets/panneaux-svg/3_interdiction/B14_110.svg';
import Logo39 from '../assets/panneaux-svg/3_interdiction/B14_130.svg';
import Logo40 from '../assets/panneaux-svg/3_interdiction/B15.svg';

import Logo41 from '../assets/panneaux-svg/3_interdiction/B16.svg';
import Logo42 from '../assets/panneaux-svg/3_interdiction/B17.svg';
import Logo43 from '../assets/panneaux-svg/3_interdiction/B18a.svg';
import Logo44 from '../assets/panneaux-svg/3_interdiction/B18b.svg';

import Logo45 from '../assets/panneaux-svg/3_interdiction/B18c.svg';
import Logo46 from '../assets/panneaux-svg/3_interdiction/B19.svg';
import Logo47 from '../assets/panneaux-svg/3_interdiction/B31.svg';
import Logo48 from '../assets/panneaux-svg/3_interdiction/B33_15.svg';

import Logo49 from '../assets/panneaux-svg/3_interdiction/B33_30.svg';
import Logo50 from '../assets/panneaux-svg/3_interdiction/B33_50.svg';
import Logo51 from '../assets/panneaux-svg/3_interdiction/B33_70.svg';
import Logo52 from '../assets/panneaux-svg/3_interdiction/B33_90.svg';

import Logo53 from '../assets/panneaux-svg/3_interdiction/B33_110.svg';
import Logo54 from '../assets/panneaux-svg/3_interdiction/B33_130.svg';
import Logo55 from '../assets/panneaux-svg/3_interdiction/B34.svg';
import Logo56 from '../assets/panneaux-svg/3_interdiction/B34a.svg';

import Logo57 from '../assets/panneaux-svg/3_interdiction/B35.svg';
import Logo58 from '../assets/panneaux-svg/3_interdiction/B39.svg';

//FIN PANNEAUX INTERDICTION

//DEBUT PANNEAUX OBLIGATION

import Logo59 from '../assets/panneaux-svg/4_obligation/B21-1.svg';
import Logo60 from '../assets/panneaux-svg/4_obligation/B21-2.svg';
import Logo61 from '../assets/panneaux-svg/4_obligation/B21a1.svg';
import Logo62 from '../assets/panneaux-svg/4_obligation/B21a2.svg';

import Logo63 from '../assets/panneaux-svg/4_obligation/B21b.svg';
import Logo64 from '../assets/panneaux-svg/4_obligation/B21c1.svg';
import Logo65 from '../assets/panneaux-svg/4_obligation/B21c2.svg';
import Logo66 from '../assets/panneaux-svg/4_obligation/B21d1.svg';

import Logo67 from '../assets/panneaux-svg/4_obligation/B21d2.svg';
import Logo68 from '../assets/panneaux-svg/4_obligation/B21e.svg';
import Logo69 from '../assets/panneaux-svg/4_obligation/B22a.svg';
import Logo70 from '../assets/panneaux-svg/4_obligation/B22b.svg';

import Logo71 from '../assets/panneaux-svg/4_obligation/B22c.svg';
import Logo72 from '../assets/panneaux-svg/4_obligation/B25.svg';
import Logo73 from '../assets/panneaux-svg/4_obligation/B26.svg';
import Logo74 from '../assets/panneaux-svg/4_obligation/B27a.svg';

import Logo75 from '../assets/panneaux-svg/4_obligation/B27b.svg';
import Logo76 from '../assets/panneaux-svg/4_obligation/B29.svg';
import Logo77 from '../assets/panneaux-svg/4_obligation/B40.svg';
import Logo78 from '../assets/panneaux-svg/4_obligation/B41.svg';

import Logo79 from '../assets/panneaux-svg/4_obligation/B42.svg';
import Logo80 from '../assets/panneaux-svg/4_obligation/B43.svg';
import Logo81 from '../assets/panneaux-svg/4_obligation/B44.svg';
import Logo82 from '../assets/panneaux-svg/4_obligation/B45a.svg';

import Logo83 from '../assets/panneaux-svg/4_obligation/B49.svg';

//FIN PANNEAUX OBLIGATION

//DEBUT PANNEAUX INDICATION

import Logo84 from '../assets/panneaux-svg/5_indication/C1a.svg';
import Logo85 from '../assets/panneaux-svg/5_indication/C1b.svg';
import Logo86 from '../assets/panneaux-svg/5_indication/C1c.svg';
import Logo87 from '../assets/panneaux-svg/5_indication/C3.svg';

import Logo88 from '../assets/panneaux-svg/5_indication/C4a_50.svg';
import Logo89 from '../assets/panneaux-svg/5_indication/C4b_50.svg';
import Logo90 from '../assets/panneaux-svg/5_indication/C5.svg';
import Logo91 from '../assets/panneaux-svg/5_indication/C6.svg';

import Logo92 from '../assets/panneaux-svg/5_indication/C8.svg';
import Logo93 from '../assets/panneaux-svg/5_indication/C12.svg';
import Logo94 from '../assets/panneaux-svg/5_indication/C13a.svg';
import Logo95 from '../assets/panneaux-svg/5_indication/C13b.svg';

import Logo96 from '../assets/panneaux-svg/5_indication/C14_1.svg';
import Logo97 from '../assets/panneaux-svg/5_indication/C14_2.svg';
import Logo98 from '../assets/panneaux-svg/5_indication/C18.svg';
import Logo99 from '../assets/panneaux-svg/5_indication/C20a.svg';

import Logo100 from '../assets/panneaux-svg/5_indication/C20c.svg';
import Logo101 from '../assets/panneaux-svg/5_indication/C23.svg';
import Logo102 from '../assets/panneaux-svg/5_indication/C24a_1.svg';
import Logo103 from '../assets/panneaux-svg/5_indication/C24a_4.svg';

import Logo104 from '../assets/panneaux-svg/5_indication/C24b_1.svg';
import Logo105 from '../assets/panneaux-svg/5_indication/C24b_2.svg';
import Logo106 from '../assets/panneaux-svg/5_indication/C24c_1.svg';
import Logo107 from '../assets/panneaux-svg/5_indication/C24c_2.svg';

import Logo108 from '../assets/panneaux-svg/5_indication/C25a.svg';
import Logo109 from '../assets/panneaux-svg/5_indication/C25b.svg';
import Logo110 from '../assets/panneaux-svg/5_indication/C26a.svg';
import Logo111 from '../assets/panneaux-svg/5_indication/C26b.svg';

import Logo112 from '../assets/panneaux-svg/5_indication/C27.svg';
import Logo113 from '../assets/panneaux-svg/5_indication/C28_1.svg';
import Logo114 from '../assets/panneaux-svg/5_indication/C28_3.svg';
import Logo115 from '../assets/panneaux-svg/5_indication/C29a.svg';

import Logo116 from '../assets/panneaux-svg/5_indication/C29b.svg';
import Logo117 from '../assets/panneaux-svg/5_indication/C30.svg';
import Logo118 from '../assets/panneaux-svg/5_indication/C50.svg';
import Logo119 from '../assets/panneaux-svg/5_indication/C62.svg';

import Logo120 from '../assets/panneaux-svg/5_indication/C64a.svg';
import Logo121 from '../assets/panneaux-svg/5_indication/C64b.svg';
import Logo122 from '../assets/panneaux-svg/5_indication/C64c.svg';
import Logo123 from '../assets/panneaux-svg/5_indication/C64d_1.svg';

import Logo124 from '../assets/panneaux-svg/5_indication/C64d_2.svg';
import Logo125 from '../assets/panneaux-svg/5_indication/C107.svg';
import Logo126 from '../assets/panneaux-svg/5_indication/C108.svg';
import Logo127 from '../assets/panneaux-svg/5_indication/C111.svg';

import Logo128 from '../assets/panneaux-svg/5_indication/C112.svg';
import Logo129 from '../assets/panneaux-svg/5_indication/C113.svg';
import Logo130 from '../assets/panneaux-svg/5_indication/C114.svg';
import Logo131 from '../assets/panneaux-svg/5_indication/C115.svg';

import Logo132 from '../assets/panneaux-svg/5_indication/C116.svg';
import Logo133 from '../assets/panneaux-svg/5_indication/C207.svg';
import Logo134 from '../assets/panneaux-svg/5_indication/C208.svg';

//FIN PANNEAUX INDICATION

//DEBUT PANNEAUX INTERSECTION ET PRIORITE

import Logo135 from '../assets/panneaux-svg/2_intersection-priorite/AB1.svg';
import Logo136 from '../assets/panneaux-svg/2_intersection-priorite/AB2.svg';
import Logo137 from '../assets/panneaux-svg/2_intersection-priorite/AB3a.svg';
import Logo138 from '../assets/panneaux-svg/2_intersection-priorite/AB3b.svg';

import Logo139 from '../assets/panneaux-svg/2_intersection-priorite/AB4.svg';
import Logo140 from '../assets/panneaux-svg/2_intersection-priorite/AB5.svg';
import Logo141 from '../assets/panneaux-svg/2_intersection-priorite/AB6.svg';
import Logo142 from '../assets/panneaux-svg/2_intersection-priorite/AB7.svg';

import Logo143 from '../assets/panneaux-svg/2_intersection-priorite/AB25.svg';

//FIN PANNEAUX INTERSECTION ET PRIORITE

//DEBUT PANNEAUX DANGER

import Logo144 from '../assets/panneaux-svg/1_danger/A1a.svg';
import Logo145 from '../assets/panneaux-svg/1_danger/A1b.svg';
import Logo146 from '../assets/panneaux-svg/1_danger/A1c.svg';
import Logo147 from '../assets/panneaux-svg/1_danger/A1d.svg';

import Logo148 from '../assets/panneaux-svg/1_danger/A2a.svg';
import Logo149 from '../assets/panneaux-svg/1_danger/A2b.svg';
import Logo150 from '../assets/panneaux-svg/1_danger/A3.svg';
import Logo151 from '../assets/panneaux-svg/1_danger/A3a.svg';

import Logo152 from '../assets/panneaux-svg/1_danger/A3b.svg';
import Logo153 from '../assets/panneaux-svg/1_danger/A4.svg';
import Logo154 from '../assets/panneaux-svg/1_danger/A6.svg';
import Logo155 from '../assets/panneaux-svg/1_danger/A7.svg';

import Logo156 from '../assets/panneaux-svg/1_danger/A8.svg';
import Logo157 from '../assets/panneaux-svg/1_danger/A9.svg';
import Logo158 from '../assets/panneaux-svg/1_danger/A13a.svg';
import Logo159 from '../assets/panneaux-svg/1_danger/A13b.svg';

import Logo160 from '../assets/panneaux-svg/1_danger/A14.svg';
import Logo161 from '../assets/panneaux-svg/1_danger/A15a1.svg';
import Logo162 from '../assets/panneaux-svg/1_danger/A15a2.svg';
import Logo163 from '../assets/panneaux-svg/1_danger/A15b.svg';

import Logo164 from '../assets/panneaux-svg/1_danger/A15c.svg';
import Logo165 from '../assets/panneaux-svg/1_danger/A16.svg';
import Logo166 from '../assets/panneaux-svg/1_danger/A17.svg';
import Logo167 from '../assets/panneaux-svg/1_danger/A18.svg';

import Logo168 from '../assets/panneaux-svg/1_danger/A19.svg';
import Logo169 from '../assets/panneaux-svg/1_danger/A20.svg';
import Logo170 from '../assets/panneaux-svg/1_danger/A21a.svg';
import Logo171 from '../assets/panneaux-svg/1_danger/A23.svg';

import Logo172 from '../assets/panneaux-svg/1_danger/A24.svg';

//FIN PANNEAUX DANGER

//DEBUT PANNEAUX SERVICES

import Logo173 from '../assets/panneaux-svg/6_services/CE1.svg';
import Logo174 from '../assets/panneaux-svg/6_services/CE2a.svg';
import Logo175 from '../assets/panneaux-svg/6_services/CE2b.svg';
import Logo176 from '../assets/panneaux-svg/6_services/CE3a.svg';

import Logo177 from '../assets/panneaux-svg/6_services/CE4a.svg';
import Logo178 from '../assets/panneaux-svg/6_services/CE4b.svg';
import Logo179 from '../assets/panneaux-svg/6_services/CE4c.svg';
import Logo180 from '../assets/panneaux-svg/6_services/CE5a.svg';

import Logo181 from '../assets/panneaux-svg/6_services/CE5b.svg';
import Logo182 from '../assets/panneaux-svg/6_services/CE6a.svg';
import Logo183 from '../assets/panneaux-svg/6_services/CE6b.svg';
import Logo184 from '../assets/panneaux-svg/6_services/CE7.svg';

import Logo185 from '../assets/panneaux-svg/6_services/CE8.svg';
import Logo186 from '../assets/panneaux-svg/6_services/CE9.svg';
import Logo187 from '../assets/panneaux-svg/6_services/CE10.svg';
import Logo188 from '../assets/panneaux-svg/6_services/CE12.svg';

import Logo189 from '../assets/panneaux-svg/6_services/CE14.svg';
import Logo190 from '../assets/panneaux-svg/6_services/CE15a.svg';
import Logo191 from '../assets/panneaux-svg/6_services/CE15c.svg';
import Logo192 from '../assets/panneaux-svg/6_services/CE16.svg';

import Logo193 from '../assets/panneaux-svg/6_services/CE17.svg';
import Logo194 from '../assets/panneaux-svg/6_services/CE18.svg';
import Logo195 from '../assets/panneaux-svg/6_services/CE19.svg';
import Logo196 from '../assets/panneaux-svg/6_services/CE20a.svg';

import Logo197 from '../assets/panneaux-svg/6_services/CE20b.svg';
import Logo198 from '../assets/panneaux-svg/6_services/CE21.svg';
import Logo199 from '../assets/panneaux-svg/6_services/CE22.svg';
import Logo200 from '../assets/panneaux-svg/6_services/CE23.svg';

import Logo201 from '../assets/panneaux-svg/6_services/CE24.svg';
import Logo202 from '../assets/panneaux-svg/6_services/CE25.svg';
import Logo203 from '../assets/panneaux-svg/6_services/CE26.svg';
import Logo204 from '../assets/panneaux-svg/6_services/CE27.svg';

import Logo205 from '../assets/panneaux-svg/6_services/CE28.svg';
import Logo206 from '../assets/panneaux-svg/6_services/CE29.svg';
import Logo207 from '../assets/panneaux-svg/6_services/CE30a.svg';
import Logo208 from '../assets/panneaux-svg/6_services/CE30b.svg';

import Logo209 from '../assets/panneaux-svg/6_services/CE50.svg';

//FIN PANNEAUX SERVICES

const ToutPanneaux = ({ id, width = 120, height = 55 }) => (
    <View style={styles.container}>
        {
            //Interdiction
            id === 1 ? <Logo1 width={width} height={height}/> :
            id === 2 ? <Logo2 width={width} height={height}/> :
            id === 3 ? <Logo3 width={width} height={height}/> :
            id === 4 ? <Logo4 width={width} height={height}/> :
            id === 5 ? <Logo5 width={width} height={height}/> :
            id === 6 ? <Logo6 width={width} height={height}/> :
            id === 7 ? <Logo7 width={width} height={height}/> :
            id === 8 ? <Logo8 width={width} height={height}/> :
            id === 9 ? <Logo9 width={width} height={height}/> :
            id === 10 ? <Logo10 width={width} height={height}/> :
            id === 11 ? <Logo11 width={width} height={height}/> :
            id === 12 ? <Logo12 width={width} height={height}/> :
            id === 13 ? <Logo13 width={width} height={height}/> :
            id === 14 ? <Logo14 width={width} height={height}/> :
            id === 15 ? <Logo15 width={width} height={height}/> :
            id === 16 ? <Logo16 width={width} height={height}/> :
            id === 17 ? <Logo17 width={width} height={height}/> :
            id === 18 ? <Logo18 width={width} height={height}/> :
            id === 19 ? <Logo19 width={width} height={height}/> :
            id === 20 ? <Logo20 width={width} height={height}/> :
            id === 21 ? <Logo21 width={width} height={height}/> :
            id === 22 ? <Logo22 width={width} height={height}/> :
            id === 23 ? <Logo23 width={width} height={height}/> :
            id === 24 ? <Logo24 width={width} height={height}/> :
            id === 25 ? <Logo25 width={width} height={height}/> :
            id === 26 ? <Logo26 width={width} height={height}/> :
            id === 27 ? <Logo27 width={width} height={height}/> :
            id === 28 ? <Logo28 width={width} height={height}/> :
            id === 29 ? <Logo29 width={width} height={height}/> :
            id === 30 ? <Logo30 width={width} height={height}/> :
            id === 31 ? <Logo31 width={width} height={height}/> :
            id === 32 ? <Logo32 width={width} height={height}/> :
            id === 33 ? <Logo33 width={width} height={height}/> :
            id === 34 ? <Logo34 width={width} height={height}/> :
            id === 35 ? <Logo35 width={width} height={height}/> :
            id === 36 ? <Logo36 width={width} height={height}/> :
            id === 37 ? <Logo37 width={width} height={height}/> :
            id === 38 ? <Logo38 width={width} height={height}/> :
            id === 39 ? <Logo39 width={width} height={height}/> :
            id === 40 ? <Logo40 width={width} height={height}/> :
            id === 41 ? <Logo41 width={width} height={height}/> :
            id === 42 ? <Logo42 width={width} height={height}/> :
            id === 43 ? <Logo43 width={width} height={height}/> :
            id === 44 ? <Logo44 width={width} height={height}/> :
            id === 45 ? <Logo45 width={width} height={height}/> :
            id === 46 ? <Logo46 width={width} height={height}/> :
            id === 47 ? <Logo47 width={width} height={height}/> :
            id === 48 ? <Logo48 width={width} height={height}/> :
            id === 49 ? <Logo49 width={width} height={height}/> :
            id === 50 ? <Logo50 width={width} height={height}/> :
            id === 51 ? <Logo51 width={width} height={height}/> :
            id === 52 ? <Logo52 width={width} height={height}/> :
            id === 53 ? <Logo53 width={width} height={height}/> :
            id === 54 ? <Logo54 width={width} height={height}/> :
            id === 55 ? <Logo55 width={width} height={height}/> :
            id === 56 ? <Logo56 width={width} height={height}/> :
            id === 57 ? <Logo57 width={width} height={height}/> :
            id === 58 ? <Logo58 width={width} height={height}/> :
            //Obligation
            id === 59 ? <Logo59 width={width} height={height}/> :
            id === 60 ? <Logo60 width={width} height={height}/> :
            id === 61 ? <Logo61 width={width} height={height}/> :
            id === 62 ? <Logo62 width={width} height={height}/> :
            id === 63 ? <Logo63 width={width} height={height}/> :
            id === 64 ? <Logo64 width={width} height={height}/> :
            id === 65 ? <Logo65 width={width} height={height}/> :
            id === 66 ? <Logo66 width={width} height={height}/> :
            id === 67 ? <Logo67 width={width} height={height}/> :
            id === 68 ? <Logo68 width={width} height={height}/> :
            id === 69 ? <Logo69 width={width} height={height}/> :
            id === 70 ? <Logo70 width={width} height={height}/> :
            id === 71 ? <Logo71 width={width} height={height}/> :
            id === 72 ? <Logo72 width={width} height={height}/> :
            id === 73 ? <Logo73 width={width} height={height}/> :
            id === 74 ? <Logo74 width={width} height={height}/> :
            id === 75 ? <Logo75 width={width} height={height}/> :
            id === 76 ? <Logo76 width={width} height={height}/> :
            id === 77 ? <Logo77 width={width} height={height}/> :
            id === 78 ? <Logo78 width={width} height={height}/> :
            id === 79 ? <Logo79 width={width} height={height}/> :
            id === 80 ? <Logo80 width={width} height={height}/> :
            id === 81 ? <Logo81 width={width} height={height}/> :
            id === 82 ? <Logo82 width={width} height={height}/> :
            id === 83 ? <Logo83 width={width} height={height}/> :
            //Indication
            id === 84 ? <Logo84 width={width} height={height}/> :
            id === 85 ? <Logo85 width={width} height={height}/> :
            id === 86 ? <Logo86 width={width} height={height}/> :
            id === 87 ? <Logo87 width={width} height={height}/> :
            id === 88 ? <Logo88 width={width} height={height}/> :
            id === 89 ? <Logo89 width={width} height={height}/> :
            id === 90 ? <Logo90 width={width} height={height}/> :
            id === 91 ? <Logo91 width={width} height={height}/> :
            id === 92 ? <Logo92 width={width} height={height}/> :
            id === 93 ? <Logo93 width={width} height={height}/> :
            id === 94 ? <Logo94 width={width} height={height}/> :
            id === 95 ? <Logo95 width={width} height={height}/> :
            id === 96 ? <Logo96 width={width} height={height}/> :
            id === 97 ? <Logo97 width={width} height={height}/> :
            // id === 98 ? <Logo98 width={width} height={height}/> : //c18
            id === 98 ? <Image source={require('../assets/panneaux/indication/C18.png')} style={styles.panneauxImage}/>  : //c18
            id === 99 ? <Logo99 width={width} height={height}/> :
            id === 100 ? <Logo100 width={width} height={height}/> :
            id === 101 ? <Logo101 width={width} height={height}/> :
            id === 102 ? <Logo102 width={width} height={height}/> :
            id === 103 ? <Logo103 width={width} height={height}/> :
            id === 104 ? <Logo104 width={width} height={height}/> :
            id === 105 ? <Log105 width={width} height={height}/> :
            id === 106 ? <Logo106 width={width} height={height}/> :
            id === 107 ? <Logo107 width={width} height={height}/> :
            id === 108 ? <Logo108 width={width} height={height}/> :
            id === 109 ? <Logo109 width={width} height={height}/> :
            id === 110 ? <Logo110 width={width} height={height}/> :
            id === 111 ? <Logo111 width={width} height={height}/> :
            // id === 112 ? <Logo112 width={width} height={height}/> : // ralentisseur
            id === 112 ?  <Image source={require('../assets/panneaux/indication/C27.png')} style={styles.panneauxImage}/> : // ralentisseur
            id === 113 ? <Logo113 width={width} height={height}/> :
            id === 114 ? <Logo114 width={width} height={height}/> :
            id === 115 ? <Logo115 width={width} height={height}/> :
            id === 116 ? <Logo116 width={width} height={height}/> :
            id === 117 ? <Logo117 width={width} height={height}/> :
            id === 118 ? <Logo118 width={width} height={height}/> :
            id === 119 ? <Logo119 width={width} height={height}/> :
            id === 120 ? <Logo120 width={width} height={height}/> :
            id === 121 ? <Logo121 width={width} height={height}/> :
            id === 122 ? <Logo122 width={width} height={height}/> :
            id === 123 ? <Logo123 width={width} height={height}/> :
            id === 124 ? <Logo124 width={width} height={height}/> :
            // id === 125 ? <Logo125 width={width} height={height}/> : // route acc regl
            id === 125 ? <Image source={require('../assets/panneaux/indication/C107.png')} style={styles.panneauxImage}/> : // route acc regl
            id === 126 ? <Logo126 width={width} height={height}/> :
            id === 127 ? <Logo127 width={width} height={height}/> :
            id === 128 ? <Logo128 width={width} height={height}/> :
            id === 129 ? <Logo129 width={width} height={height}/> :
            id === 130 ? <Logo130 width={width} height={height}/> :
            id === 131 ? <Logo131 width={width} height={height}/> :
            id === 132 ? <Logo132 width={width} height={height}/> :
            id === 133 ? <Logo133 width={width} height={height}/> :
            id === 134 ? <Logo134 width={width} height={height}/> :
            //Intersection et priorité
            id === 135 ? <Logo135 width={width} height={height}/> :
            id === 136 ? <Logo136 width={width} height={height}/> :
            id === 137 ? <Logo137 width={width} height={height}/> :
            id === 138 ? <Logo138 width={width} height={height}/> :
            id === 139 ? <Logo139 width={width} height={height}/> :
            id === 140 ? <Logo140 width={width} height={height}/> :
            id === 141 ? <Logo141 width={width} height={height}/> :
            id === 142 ? <Logo142 width={width} height={height}/> :
            id === 143 ? <Logo143 width={width} height={height}/> :
            //Danger
            id === 144 ? <Logo144 width={width} height={height}/> :
            id === 145 ? <Logo145 width={width} height={height}/> :
            id === 146 ? <Logo146 width={width} height={height}/> :
            id === 147 ? <Logo147 width={width} height={height}/> :
            id === 148 ? <Logo148 width={width} height={height}/> :
            id === 149 ? <Logo149 width={width} height={height}/> :
            id === 150 ? <Logo150 width={width} height={height}/> :
            id === 151 ? <Logo151 width={width} height={height}/> :
            id === 152 ? <Logo152 width={width} height={height}/> :
            id === 153 ? <Logo153 width={width} height={height}/> :
            id === 154 ? <Logo154 width={width} height={height}/> :
            id === 155 ? <Logo155 width={width} height={height}/> :
            id === 156 ? <Logo156 width={width} height={height}/> :
            id === 157 ? <Logo157 width={width} height={height}/> :
            id === 158 ? <Logo158 width={width} height={height}/> :
            id === 159 ? <Logo159 width={width} height={height}/> :
            id === 160 ? <Logo160 width={width} height={height}/> :
            id === 161 ? <Logo161 width={width} height={height}/> :
            id === 162 ? <Logo162 width={width} height={height}/> :
            id === 163 ? <Logo163 width={width} height={height}/> :
            id === 164 ? <Logo164 width={width} height={height}/> :
            id === 165 ? <Logo165 width={width} height={height}/> :
            id === 166 ? <Logo166 width={width} height={height}/> :
            id === 167 ? <Logo167 width={width} height={height}/> :
            id === 168 ? <Logo168 width={width} height={height}/> :
            id === 169 ? <Logo169 width={width} height={height}/> :
            id === 170 ? <Logo170 width={width} height={height}/> :
            id === 171 ? <Logo171 width={width} height={height}/> :
            id === 172 ? <Logo172 width={width} height={height}/> :
            //Services
            id === 173 ? <Logo173 width={width} height={height}/> :
            id === 174 ? <Logo174 width={width} height={height}/> :
            id === 175 ? <Logo175 width={width} height={height}/> :
            id === 176 ? <Logo176 width={width} height={height}/> :
            id === 177 ? <Logo177 width={width} height={height}/> :
            id === 178 ? <Logo178 width={width} height={height}/> :
            id === 179 ? <Logo179 width={width} height={height}/> :
            id === 180 ? <Logo180 width={width} height={height}/> :
            id === 181 ? <Logo181 width={width} height={height}/> :
            id === 182 ? <Logo182 width={width} height={height}/> :
            id === 183 ? <Logo183 width={width} height={height}/> :
            id === 184 ? <Logo184 width={width} height={height}/> :
            id === 185 ? <Logo185 width={width} height={height}/> :
            id === 186 ? <Logo186 width={width} height={height}/> :
            id === 187 ? <Logo187 width={width} height={height}/> :
            id === 188 ? <Logo188 width={width} height={height}/> :
            id === 189 ? <Logo189 width={width} height={height}/> :
            id === 190 ? <Logo190 width={width} height={height}/> :
            id === 191 ? <Logo191 width={width} height={height}/> :
            id === 192 ? <Logo192 width={width} height={height}/> :
            id === 193 ? <Logo193 width={width} height={height}/> :
            id === 194 ? <Logo194 width={width} height={height}/> :
            id === 195 ? <Logo195 width={width} height={height}/> :
            id === 196 ? <Logo196 width={width} height={height}/> :
            id === 197 ? <Logo197 width={width} height={height}/> :
            id === 198 ? <Logo198 width={width} height={height}/> :
            id === 199 ? <Logo199 width={width} height={height}/> :
            id === 200 ? <Logo200 width={width} height={height}/> :
            id === 201 ? <Logo201 width={width} height={height}/> :
            id === 202 ? <Logo202 width={width} height={height}/> :
            id === 203 ? <Logo203 width={width} height={height}/> :
            id === 204 ? <Logo204 width={width} height={height}/> :
            id === 205 ? <Logo205 width={width} height={height}/> :
            id === 206 ? <Logo206 width={width} height={height}/> :
            id === 207 ? <Logo207 width={width} height={height}/> :
            id === 208 ? <Logo208 width={width} height={height}/> :
            id === 209 ? <Logo209 width={width} height={height}/> : <Text>Rien</Text>
        }
    </View>
);

const styles = StyleSheet.create({    
    container: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       aspectRatio: 1/1
    },
    panneauxImage: {
      height: 55,
      width: 55,
      resizeMode:'contain',
    },
  });

export default ToutPanneaux;