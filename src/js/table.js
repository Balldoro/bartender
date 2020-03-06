class Table {
  constructor() {
    this.tableIGrade;
    this.tableIIGrade;
    this.tableInstructors;
    this.tableParty;
  }
  createTableIGrade() {
    return (this.tableIGrade = `
    <table class="terms__table is-visible">
    <thead class="terms__table-head">
      <tr>
        <th class="terms__table-head-cell subtitle">
          Lokalizacja
        </th>
        <th class="terms__table-head-cell subtitle">Od kiedy?</th>
        <th class="terms__table-head-cell subtitle">Do kiedy?</th>
        <th class="terms__table-head-cell subtitle">Godzina</th>
      </tr>
    </thead>
    <tbody>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell  terms__table-city">
          Katowice
        </td>
        <td class="terms__table-body-cell terms__table-from">
          16.12.2019r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          20.12.2019r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Katowice
        </td>
        <td class="terms__table-body-cell terms__table-from">
          20.01.2019r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          28.01.2019r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Katowice
        </td>
        <td class="terms__table-body-cell terms__table-from">
          03.02.2019r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          11.02.2019r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Opole
        </td>
        <td class="terms__table-body-cell terms__table-from">
          03.02.2019r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          11.02.2020r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Katowice
        </td>
        <td class="terms__table-body-cell terms__table-from">
          24.03.2020r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          30.03.2020r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Warszawa
        </td>
        <td class="terms__table-body-cell terms__table-from">
          24.03.2020r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          30.03.2020r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Katowice
        </td>
        <td class="terms__table-body-cell terms__table-from">
          23.03.2020r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          31.03.2020r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
      <tr class="terms__table-body-row">
        <td class="terms__table-body-cell terms__table-city">
          Warszawa
        </td>
        <td class="terms__table-body-cell terms__table-from">
          20.04.2020r
        </td>
        <td class="terms__table-body-cell terms__table-to">
          28.04.2020r
        </td>
        <td class="terms__table-body-cell">10:00</td>
      </tr>
    </tbody>
  </table>`);
  }

  createTableIIGrade() {
    return (this.tableIIGrade = `
        <table class="terms__table">
              <thead class="terms__table-head">
                <tr>
                  <th class="terms__table-head-cell subtitle">
                    Lokalizacja
                  </th>
                  <th class="terms__table-head-cell subtitle">Od kiedy?</th>
                  <th class="terms__table-head-cell subtitle">Do kiedy?</th>
                  <th class="terms__table-head-cell subtitle">Godzina</th>
                </tr>
              </thead>
              <tbody>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell  terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    04.05.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    12.05.2020r
                  </td>
                  <td class="terms__table-body-cell">10:00</td>
                </tr>
              </tbody>
            </table>
            `);
  }

  createTableInstructors() {
    return (this.tableInstructors = `
        <table class="terms__table">
        <thead class="terms__table-head">
          <tr>
            <th class="terms__table-head-cell subtitle">
              Lokalizacja
            </th>
            <th class="terms__table-head-cell subtitle">Od kiedy?</th>
            <th class="terms__table-head-cell subtitle">Do kiedy?</th>
            <th class="terms__table-head-cell subtitle">Godzina</th>
          </tr>
        </thead>
        <tbody>
          <tr class="terms__table-body-row">
            <td class="terms__table-body-cell  terms__table-city">
              Katowice - Wiedeń
            </td>
            <td class="terms__table-body-cell terms__table-from">
              01.06.2020r
            </td>
            <td class="terms__table-body-cell terms__table-to">
              ---
            </td>
            <td class="terms__table-body-cell">Do ustalenia</td>
          </tr>
        </tbody>
      </table>
        `);
  }

  createTableParty() {
    return (this.tableParty = `
        <table class="terms__table">
              <thead class="terms__table-head">
                <tr>
                  <th class="terms__table-head-cell subtitle">
                    Lokalizacja
                  </th>
                  <th class="terms__table-head-cell subtitle">Od kiedy?</th>
                  <th class="terms__table-head-cell subtitle">Do kiedy?</th>
                  <th class="terms__table-head-cell subtitle">Godzina</th>
                </tr>
              </thead>
              <tbody>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell  terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    24.01.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    24.01.2020r
                  </td>
                  <td class="terms__table-body-cell">16:00</td>
                </tr>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    27.03.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    27.03.2020r
                  </td>
                  <td class="terms__table-body-cell">16:00</td>
                </tr>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    08.05.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    08.05.2020r
                  </td>
                  <td class="terms__table-body-cell">16:00</td>
                </tr>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    19.06.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    19.06.2020r
                  </td>
                  <td class="terms__table-body-cell">16:00</td>
                </tr>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    10.07.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    10.07.2020r
                  </td>
                  <td class="terms__table-body-cell">16:00</td>
                </tr>
                <tr class="terms__table-body-row">
                  <td class="terms__table-body-cell terms__table-city">
                    Katowice
                  </td>
                  <td class="terms__table-body-cell terms__table-from">
                    07.08.2020r
                  </td>
                  <td class="terms__table-body-cell terms__table-to">
                    07.08.2020r
                  </td>
                  <td class="terms__table-body-cell">16:00</td>
                </tr>
              </tbody>
            </table>
        `);
  }
}
export default Table;
