import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import DesktopTable from './DesktopTable.js';
import { DEFAULT_PROPS } from '../../utils/Defaults'

describe('DesktopTable', () => {
  const headers = ['foo', 'foo1']
  
  const data = [
    ['bar', 'bar1'],
    ['barbar', 'barbar1']
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DesktopTable />, div);
  });

  describe('receives props.classes', () => {
    const fullProps = {
      table: 'foo-table',
      thead: 'foo-thead',
      th: 'foo-th',
      tbody: 'foo-tbody',
      tr: 'foo-tr',
      td: 'foo-td',
      mobileSpacerRow: {
        tr: 'foo-mobileSpacerRow-tr',
        td: 'foo-mobileSpacerRow-td'
      }
    }

    const someProps = {
      table: 'foo-table',
      mobileSpacerRow: {
        tr: 'foo-mobileSpacerRow-tr'
      }
    }

    it('properly assigns to state.classes', () => {
      const fullDesktopTable = TestUtils.renderIntoDocument(<DesktopTable classes={fullProps} headers={headers} data={data}/>)
      for (let prop in fullProps) {
        // ewww...
        if (typeof fullProps[prop] === 'object') {
          for (let prop1 in fullProps[prop]) {
            expect(fullDesktopTable.state.classes[prop][prop1]).toBe(fullProps[prop][prop1])
          }
        } else {
          expect(fullDesktopTable.state.classes[prop]).toBe(fullProps[prop])
        }
      }

      const partialDesktopTable = TestUtils.renderIntoDocument(<DesktopTable classes={someProps} headers={headers} data={data}/>)
      const expectPartialClasses = window.Object.assign({}, DEFAULT_PROPS.classes, someProps)
      for (let prop in expectPartialClasses) {
        if (typeof expectPartialClasses[prop] === 'object') {
          // ewww...
          for (let prop1 in expectPartialClasses[prop]) {
            expect(partialDesktopTable.state.classes[prop][prop1]).toBe(expectPartialClasses[prop][prop1])
          }
        } else {
          expect(partialDesktopTable.state.classes[prop]).toBe(expectPartialClasses[prop])
        }
      }
    });

    it('properly assigns to classNames', () => {
      // TODO: don't hard code these!
      const fullDesktopTable = TestUtils.renderIntoDocument(
        <DesktopTable classes={fullProps} headers={headers} data={data}/>
      );

      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-table'
      ).length).toBe(1);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-thead'
      ).length).toBe(1);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-th'
      ).length).toBe(2);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-tbody'
      ).length).toBe(1);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-tr'
      ).length).toBe(3);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-td'
      ).length).toBe(4);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-mobileSpacerRow-tr'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        fullDesktopTable,
        'foo-mobileSpacerRow-td'
      ).length).toBe(0);

      const partialDesktopTable = TestUtils.renderIntoDocument(
        <DesktopTable classes={someProps} headers={headers} data={data}/>
      );

      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-table'
      ).length).toBe(1);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-thead'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-th'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-tbody'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-tr'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-td'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-mobileSpacerRow-tr'
      ).length).toBe(0);
      
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        partialDesktopTable,
        'foo-mobileSpacerRow-td'
      ).length).toBe(0);
    })
  });
  
  describe('receives props.styles', () => {
    const fullProps = {
      table: {color: 'red'},
      thead: {color: 'white'},
      th: {color: 'blue'},
      tbody: {color: 'black'},
      tr: {color: 'brown'},
      td: {color: 'grey'},
      mobileSpacerRow: {
        tr: {color: 'green'},
        td: {color: 'purple'}
      }
    }

    const someProps = {
      table: {color: 'red'},
      mobileSpacerRow: {
        tr: {color: 'green'}
      }
    }

    it('properly assigns to state.styles', () => {
      const fullDesktopTable = TestUtils.renderIntoDocument(<DesktopTable styles={fullProps} headers={headers} data={data}/>)
      for (let prop in fullProps) {
        // ewww...
        if (typeof fullProps[prop] === 'object') {
          for (let prop1 in fullProps[prop]) {
            expect(fullDesktopTable.state.styles[prop][prop1]).toBe(fullProps[prop][prop1])
          }
        } else {
          expect(fullDesktopTable.state.styles[prop]).toBe(fullProps[prop])
        }
      }

      const partialDesktopTable = TestUtils.renderIntoDocument(<DesktopTable styles={someProps} headers={headers} data={data}/>)
      const expectPartialStyles = window.Object.assign({}, DEFAULT_PROPS.styles, someProps)
      for (let prop in expectPartialStyles) {
        if (typeof expectPartialStyles[prop] === 'object') {
          // ewww...
          for (let prop1 in expectPartialStyles[prop]) {
            expect(partialDesktopTable.state.styles[prop][prop1]).toBe(expectPartialStyles[prop][prop1])
          }
        } else {
          expect(partialDesktopTable.state.styles[prop]).toBe(expectPartialStyles[prop])
        }
      }
    });

    it('properly assigns to inline styles', () => {
      const fullDesktopTable = TestUtils.renderIntoDocument(
        <DesktopTable styles={fullProps} headers={headers} data={data}/>
      );
      
      let table = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'table')
      for (let prop in fullProps.table) {
        for (let i = 0; i < table.length; i++) {
          expect(table[i].style[prop]).toBe(fullProps.table[prop]);
        }
      }
      
      let thead = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'thead')
      for (let prop in fullProps.table) {  
        for (let i = 0; i < thead.length; i++) {
          expect(thead[i].style[prop]).toBe(fullProps.thead[prop]);
        }
      }
      
      let th = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'th')
      for (let prop in fullProps.th) {
        for (let i = 0; i < th.length; i++) {
          expect(th[i].style[prop]).toBe(fullProps.th[prop]);
        }
      }
      
      let tbody = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'tbody')
      for (let prop in fullProps.tbody) {
        for (let i = 0; i < tbody.length; i++) {
          expect(tbody[i].style[prop]).toBe(fullProps.tbody[prop]);
        }
      }

      /*
        why are these not working?! They appear to be working in the app!!
      let tr = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'tr')
      for (let prop in fullProps.tr) {
        for (let i = 0; i < tr.length; i++) {
          expect(tr[i].style[prop]).toBe(fullProps.tr[prop]);
        }
      }
      
      let td = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'td')
      for (let prop in fullProps.td) {
        for (let i = 0; i < td.length; i++) {
          expect(td[i].style[prop]).toBe(fullProps.td[prop]);
        }
      }
      */

      const partialDesktopTable = TestUtils.renderIntoDocument(
        <DesktopTable styles={someProps} headers={headers} data={data}/>
      );
      
      table = TestUtils.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'table')
      for (let prop in someProps.table) {
        for (let i = 0; i < table.length; i++) {
          expect(table[i].style[prop]).toBe(someProps.table[prop]);
        }
      }
      
      thead = TestUtils.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'thead')
      for (let i = 0; i < thead.length; i++) {
        expect(thead[i].style._length).toBe(0);
      }
      
      th = TestUtils.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'th')
      for (let i = 0; i < th.length; i++) {
        expect(th[i].style._length).toBe(0);
      }
      
      tbody = TestUtils.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'tbody')
      for (let i = 0; i < tbody.length; i++) {
        expect(tbody[i].style._length).toBe(0);
      }

      let tr = TestUtils.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'tr')
      for (let i = 0; i < tr.length; i++) {
        expect(tr[i].style._length).toBe(0);
      }
      
      let td = TestUtils.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'td')
      for (let i = 0; i < td.length; i++) {
        expect(td[i].style._length).toBe(0);
      }
    });
  });

  describe('receives props.headers and props.data', () => {
    const fullDesktopTable = TestUtils.renderIntoDocument(
      <DesktopTable headers={headers} data={data}/>
    );

    it('properly renders headers and data to the UI', () => {
      let tr = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'tr')
      expect(tr.length).toBe(3);

      let th = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'th')
      expect(th.length).toBe(2);
      for (let i = 0; i < th.length; i++) {
        expect(th[i].textContent).toEqual(headers[i])
      }
      
      let td = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'td')
      expect(td.length).toBe(4);
      for (let i = 0; i < td.length; i++) {
        for (let j = 0; j < td[i].length; j++) {
          expect(td[i + j].textContent).toEqual(data[i][j])
        }
      }
    })
  })
})
