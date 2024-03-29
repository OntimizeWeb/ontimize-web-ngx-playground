import { Component, ViewEncapsulation } from '@angular/core';

const TREE_HTML_DATA = `
<o-tree #treeview fxFlex service="customers" entity="customerRecursive" keys="CUSTOMERID"
  columns="CUSTOMERID;SURNAME;NAME;PARENT" description-columns="SURNAME;NAME" separator=", "
  recursive="yes" parent-column="PARENT" query-on-init="true" service-type="DummyService" root-title="CUSTOMERS">
</o-tree>
`;

const TREE_TS_DATA = `

`;

const TABLE_DATA = `
[
  {
    "SURNAME": "Lawrence",
    "CUSTOMERID": 7511,
    "NAME": "Daisy"
  },
  {
    "SURNAME": "Alan",
    "CUSTOMERID": 10602,
    "NAME": "James"
  },
  {
    "SURNAME": "Smith",
    "CUSTOMERID": 10603,
    "NAME": "Lucie"
  },
  {
    "SURNAME": "Bugle",
    "CUSTOMERID": 10604,
    "NAME": "Mark"
  },
  {
    "SURNAME": "Murray",
    "CUSTOMERID": 10605,
    "NAME": "Clarette"
  },
  {
    "SURNAME": "Baños Márqueza",
    "CUSTOMERID": 10606,
    "NAME": "Tomás Miguel"
  },
  {
    "SURNAME": "Buendía Lorente",
    "CUSTOMERID": 10607,
    "NAME": "Lidya Esther"
  },
  {
    "SURNAME": "Buttercup",
    "CUSTOMERID": 10808,
    "NAME": "Billy"
  },
  {
    "SURNAME": "C.Johnson",
    "CUSTOMERID": 10810,
    "NAME": "Marie"
  },
  {
    "SURNAME": "Fernández Blanco",
    "CUSTOMERID": 10811,
    "NAME": "Pablo"
  },
  {
    "SURNAME": "Windflower",
    "CUSTOMERID": 10812,
    "NAME": "Abie"
  },
  {
    "SURNAME": "Poppy",
    "CUSTOMERID": 10813,
    "NAME": "Chistine"
  },
  {
    "SURNAME": "Rose",
    "CUSTOMERID": 10814,
    "NAME": "Bernice"
  },
  {
    "SURNAME": "Corbirock",
    "CUSTOMERID": 10815,
    "NAME": "Bridget"
  },
  {
    "SURNAME": "Green",
    "CUSTOMERID": 10834,
    "NAME": "John"
  },
  {
    "SURNAME": "Schwarzkopf",
    "CUSTOMERID": 19270,
    "NAME": "Adolph",
    "PARENT": 19393
  },
  {
    "SURNAME": "Engels",
    "CUSTOMERID": 19271,
    "NAME": "Aubrey",
    "PARENT": 19393
  },
  {
    "SURNAME": "Schmidt",
    "CUSTOMERID": 19272,
    "NAME": "Egbert",
    "PARENT": 19393
  },
  {
    "SURNAME": "Müller",
    "CUSTOMERID": 19273,
    "NAME": "Frieda",
    "PARENT": 19393
  },
  {
    "SURNAME": "Meyer",
    "CUSTOMERID": 19274,
    "NAME": "Gretchen",
    "PARENT": 19393
  },
  {
    "SURNAME": "Fischer",
    "CUSTOMERID": 19320,
    "NAME": "Heidi",
    "PARENT": 19393
  },
  {
    "SURNAME": "Schneider",
    "CUSTOMERID": 19321,
    "NAME": "Helmuth",
    "PARENT": 19393
  },
  {
    "SURNAME": "Metzger",
    "CUSTOMERID": 19322,
    "NAME": "Lancelot",
    "PARENT": 19331
  },
  {
    "SURNAME": "Töpfer",
    "CUSTOMERID": 19323,
    "NAME": "Luther",
    "PARENT": 19331
  },
  {
    "SURNAME": "Weffer",
    "CUSTOMERID": 19324,
    "NAME": "Erick",
    "PARENT": 19331
  },
  {
    "SURNAME": "Matius",
    "CUSTOMERID": 19325,
    "NAME": "Adelbert",
    "PARENT": 19331
  },
  {
    "SURNAME": "Smit",
    "CUSTOMERID": 19326,
    "NAME": "Hiltrud",
    "PARENT": 19331
  },
  {
    "SURNAME": "Jansen",
    "CUSTOMERID": 19327,
    "NAME": "Kees",
    "PARENT": 19331
  },
  {
    "SURNAME": "van Bruggen",
    "CUSTOMERID": 19328,
    "NAME": "Piet",
    "PARENT": 19331
  },
  {
    "SURNAME": " de Groot",
    "CUSTOMERID": 19329,
    "NAME": "Sjon",
    "PARENT": 19331
  },
  {
    "SURNAME": "Van Rijn",
    "CUSTOMERID": 19330,
    "NAME": "Maikol",
    "PARENT": 19331
  },
  {
    "SURNAME": "van Wijk",
    "CUSTOMERID": 19331,
    "NAME": "Sjaak",
    "PARENT": 19349
  },
  {
    "SURNAME": "van Serooskerken",
    "CUSTOMERID": 19332,
    "NAME": "Petrik",
    "PARENT": 19349
  },
  {
    "SURNAME": "Van Dyck",
    "CUSTOMERID": 19333,
    "NAME": "Steve",
    "PARENT": 19349
  },
  {
    "SURNAME": "Timmerman",
    "CUSTOMERID": 19334,
    "NAME": "Olinda",
    "PARENT": 19349
  },
  {
    "SURNAME": "Van Dijk",
    "CUSTOMERID": 19335,
    "NAME": "Nixie",
    "PARENT": 19349
  },
  {
    "SURNAME": "De Jong",
    "CUSTOMERID": 19336,
    "NAME": "Marlene",
    "PARENT": 19349
  },
  {
    "SURNAME": "Bakker",
    "CUSTOMERID": 19337,
    "NAME": "Louise",
    "PARENT": 19341
  },
  {
    "SURNAME": "Visser",
    "CUSTOMERID": 19338,
    "NAME": "Schmetterling",
    "PARENT": 19340
  },
  {
    "SURNAME": "de Gaulle",
    "CUSTOMERID": 19339,
    "NAME": "Jacques",
    "PARENT": 19340
  },
  {
    "SURNAME": "d'Orléans",
    "CUSTOMERID": 19340,
    "NAME": "Jean",
    "PARENT": 19393
  },
  {
    "SURNAME": "d'Estaing",
    "CUSTOMERID": 19341,
    "NAME": "Marie",
    "PARENT": 19393
  },
  {
    "SURNAME": "Vieuville ",
    "CUSTOMERID": 19342,
    "NAME": "Julia",
    "PARENT": 19393
  },
  {
    "SURNAME": "Galouzeau",
    "CUSTOMERID": 19343,
    "NAME": "Jeanne",
    "PARENT": 19393
  },
  {
    "SURNAME": "al-Fulan",
    "CUSTOMERID": 19344,
    "NAME": "Abbud",
    "PARENT": 10606
  },
  {
    "SURNAME": "Khalid",
    "CUSTOMERID": 19345,
    "NAME": "Abdel Khâliq",
    "PARENT": 10606
  },
  {
    "SURNAME": "Sharifah",
    "CUSTOMERID": 19346,
    "NAME": "Baraka",
    "PARENT": 10606
  },
  {
    "SURNAME": "Khalid",
    "CUSTOMERID": 19347,
    "NAME": "Jawhar",
    "PARENT": 10606
  },
  {
    "SURNAME": "Papamakarios",
    "CUSTOMERID": 19348,
    "NAME": "Adelphos",
    "PARENT": 10606
  },
  {
    "SURNAME": "Thalassinos",
    "CUSTOMERID": 19349,
    "NAME": "Ambrosine",
    "PARENT": 10606
  },
  {
    "SURNAME": "Nikopolidis",
    "CUSTOMERID": 19350,
    "NAME": "Andromeda",
    "PARENT": 10606
  },
  {
    "SURNAME": "Kirgyakos",
    "CUSTOMERID": 19351,
    "NAME": "Adonis",
    "PARENT": 10606
  },
  {
    "SURNAME": "Christopoulos",
    "CUSTOMERID": 19352,
    "NAME": "Elektra",
    "PARENT": 10605
  },
  {
    "SURNAME": "Mao",
    "CUSTOMERID": 19353,
    "NAME": "Tsang",
    "PARENT": 10605
  },
  {
    "SURNAME": "Qian",
    "CUSTOMERID": 19354,
    "NAME": "Zedong",
    "PARENT": 10605
  },
  {
    "SURNAME": "Pérez Miguelez",
    "CUSTOMERID": 19355,
    "NAME": "Paco",
    "PARENT": 10605
  },
  {
    "SURNAME": "Vazquez Santos",
    "CUSTOMERID": 19356,
    "NAME": "Paula",
    "PARENT": 10604
  },
  {
    "SURNAME": "Míguez Martinez",
    "CUSTOMERID": 19357,
    "NAME": "Ana",
    "PARENT": 10603
  },
  {
    "SURNAME": "López Piñeiro",
    "CUSTOMERID": 19358,
    "NAME": "Jose",
    "PARENT": 10603
  },
  {
    "SURNAME": "Dominguez ",
    "CUSTOMERID": 19359,
    "NAME": "Juan",
    "PARENT": 10603
  },
  {
    "SURNAME": "Nuñez Fernandez",
    "CUSTOMERID": 19360,
    "NAME": "Maria",
    "PARENT": 10602
  },
  {
    "SURNAME": "Santos Rodríguez",
    "CUSTOMERID": 19361,
    "NAME": "Carlos Manuel",
    "PARENT": 10602
  },
  {
    "SURNAME": "Brown",
    "CUSTOMERID": 19362,
    "NAME": "Philippe",
    "PARENT": 10602
  },
  {
    "SURNAME": "Calaghan",
    "CUSTOMERID": 19363,
    "NAME": "Michael",
    "PARENT": 10602
  },
  {
    "SURNAME": "Ashworth",
    "CUSTOMERID": 19364,
    "NAME": "Sue",
    "PARENT": 10602
  },
  {
    "SURNAME": "Andersen",
    "CUSTOMERID": 19365,
    "NAME": "Wing",
    "PARENT": 10602
  },
  {
    "SURNAME": "Martínez Kirsten",
    "CUSTOMERID": 19381,
    "NAME": "Pablo",
    "PARENT": 10602
  },
  {
    "SURNAME": "Londhe",
    "CUSTOMERID": 19387,
    "NAME": "vikas",
    "PARENT": 10602
  },
  {
    "SURNAME": "Ignacio",
    "CUSTOMERID": 19393,
    "NAME": "Salinas",
    "PARENT": 7511
  },
  {
    "SURNAME": "Genaro",
    "CUSTOMERID": 19395,
    "NAME": "Iglesias",
    "PARENT": 7511
  },
  {
    "SURNAME": "Rogelia",
    "CUSTOMERID": 19397,
    "NAME": "Fecha",
    "PARENT": 7511
  },
  {
    "SURNAME": "Eladio",
    "CUSTOMERID": 19398,
    "NAME": "Martínez",
    "PARENT": 7511
  },
  {
    "SURNAME": "Agustín",
    "CUSTOMERID": 19399,
    "NAME": "Lorenzo",
    "PARENT": 7511
  },
  {
    "SURNAME": "Jacinto",
    "CUSTOMERID": 19400,
    "NAME": "Villar",
    "PARENT": 7511
  },
  {
    "SURNAME": "Eudaldo",
    "CUSTOMERID": 19401,
    "NAME": "Hernandez",
    "PARENT": 7511
  },
  {
    "SURNAME": "Cristina",
    "CUSTOMERID": 19403,
    "NAME": "Cifuentes",
    "PARENT": 7511
  },
  {
    "SURNAME": "Jesucristo",
    "CUSTOMERID": 19404,
    "NAME": "Pérez",
    "PARENT": 7511
  },
  {
    "SURNAME": "Plácido",
    "CUSTOMERID": 19405,
    "NAME": "Domingo",
    "PARENT": 7511
  },
  {
    "SURNAME": "Gonzalo",
    "CUSTOMERID": 19406,
    "NAME": "López",
    "PARENT": 7511
  },
  {
    "SURNAME": "Carlos",
    "CUSTOMERID": 19407,
    "NAME": "Puente",
    "PARENT": 7511
  },
  {
    "SURNAME": "Martínez",
    "CUSTOMERID": 19421,
    "NAME": "Gonzalo",
    "PARENT": 7511
  }
]
`;

@Component({
  selector: 'tree-recursive',
  templateUrl: './tree-recursive.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.tree-basic]': 'true'
  }
})
export class TreeRecursiveComponent {
  files = {
    html: {
      data: TREE_HTML_DATA
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: undefined
    },
    files: [{
      label: 'data',
      type: 'typescript',
      data: TABLE_DATA
    }]
  };

}
