const FAKE_DATA = [
  {
    id: 1,
    name: 'TechNova Solutions',
    sector: 'Tecnología',
    country: 'España',
    employees: 250,
    annualRevenue: 32.5,
    rating: 4.6,
    foundedYear: 2012
  },
  {
    id: 2,
    name: 'GreenFields Agro',
    sector: 'Agroalimentario',
    country: 'Francia',
    employees: 120,
    annualRevenue: 18.2,
    rating: 4.1,
    foundedYear: 2005
  },
  {
    id: 3,
    name: 'BlueOcean Logistics',
    sector: 'Logística',
    country: 'Países Bajos',
    employees: 430,
    annualRevenue: 54.7,
    rating: 4.3,
    foundedYear: 1998
  },
  {
    id: 4,
    name: 'Horizon HealthCare',
    sector: 'Sanidad',
    country: 'Alemania',
    employees: 980,
    annualRevenue: 210.0,
    rating: 4.8,
    foundedYear: 1987
  },
  {
    id: 5,
    name: 'UrbanBuild Group',
    sector: 'Construcción',
    country: 'España',
    employees: 350,
    annualRevenue: 76.4,
    rating: 4.0,
    foundedYear: 2001
  },
  {
    id: 6,
    name: 'SkyLine Airlines',
    sector: 'Transporte',
    country: 'Estados Unidos',
    employees: 2200,
    annualRevenue: 520.3,
    rating: 4.2,
    foundedYear: 1993
  },
  {
    id: 7,
    name: 'BrightEdu Services',
    sector: 'Educación',
    country: 'Reino Unido',
    employees: 190,
    annualRevenue: 24.1,
    rating: 4.5,
    foundedYear: 2010
  },
  {
    id: 8,
    name: 'SolarEdge Energy',
    sector: 'Energía',
    country: 'Suecia',
    employees: 410,
    annualRevenue: 95.8,
    rating: 4.7,
    foundedYear: 2008
  },
  {
    id: 9,
    name: 'FinTrust Capital',
    sector: 'Finanzas',
    country: 'Suiza',
    employees: 150,
    annualRevenue: 68.9,
    rating: 4.4,
    foundedYear: 1999
  },
  {
    id: 10,
    name: 'MediArt Studios',
    sector: 'Media',
    country: 'Italia',
    employees: 80,
    annualRevenue: 9.6,
    rating: 4.1,
    foundedYear: 2016
  }];

const HTML_DATA_VIEW = `
  <o-data-view #dv attr="dataView" [static-data]="staticData" keys="id" columns="id;name;sector;employees;annualRevenue;rating;foundedYear"
    query-rows="5" [table-config]="tableCfg" [grid-config]="gridCfg" query-on-init="false">

    <ng-template oDataViewTableColumns>
      <o-table-column attr="annualRevenue" type="currency" thousand-separator="." decimal-separator="," currency-symbol="€"
        currency-symbol-position="right"></o-table-column>
    </ng-template>

    <ng-template oDataViewGridItem let-item>
      {{ item.name }}
    </ng-template>

  </o-data-view>`;

const TYPESCRIPT_DATA = `
  @Component({
    selector: 'data-view-basic',
    templateUrl: './data-view-basic.component.html'
  })
  export class DataViewBasicComponent {

    public staticData =  ${JSON.stringify(FAKE_DATA)};

  }
  `

export class DataViewUtils {

  public static getData(): Array<any> {
    return FAKE_DATA;
  }

  public static getFiles(key: string) {
    let result: any = {
      'typescript': {
        'data': DataViewUtils.getTypescript(key)
      }
    };
    const html = DataViewUtils.getHtml(key);
    if (html) {
      result.html = {
        'data': html
      }
    }
    return result;
  }

  public static getTypescript(key: string) {
    let code = '';
    switch (key) {
      case 'o-table':
        code = TYPESCRIPT_DATA;
        break;
      case 'o-data-view-toggle':
        code = TYPESCRIPT_DATA;
        break;
    }
    return code;
  }

  public static getHtml(key: string) {
    let code = '';
    switch (key) {
      case 'o-table':
        code = HTML_DATA_VIEW;
        break;
      case 'o-data-view-toggle':
        code = HTML_DATA_VIEW;
        break;
    }
    return code;
  }
}