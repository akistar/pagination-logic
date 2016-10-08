## pagination-logic
Pure Javascript pagination logic without UI component
### Installation
```
npm install pagination-logic
```
### Usage
```js

var pagination = require('pagination-logic');

/*
Provide a pageObject
(total -- Number of items that will be paginated
 single -- Number of items per page
 pageSize -- Number of pageItem that will be shown
 currentPage -- Number of the page you want to get
 pageLinkRule -- a funtion you link to the page you want, param is pageNumber
)
*/
var paginationResult = pagination(pageObject)

```

### Result Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>pages</td>
      <td>A list about the elements showed in current page,
      each elements contains {number, link, isActive} </td>
    </tr>
    <tr>
      <td>pageCount</td>
      <td>total page number</td>
    </tr>
    <tr>
      <td>currentPage</td>
      <td>the currently active page</td>
    </tr>
    <tr>
      <td>hasPrevious</td>
      <td>whether the current page has previous page</td>
    </tr>
    <tr>
      <td>hasNext</td>
      <td>whether the current page has next page</td>
    </tr>
    <tr>
      <td>pageSize</td>
      <td>Number of elements showing in the current page</td>
    </tr>
    <tr>
      <td>previousPage</td>
      <td>the previous page object which contains {number, link, isActive}</td>
    </tr>
    <tr>
      <td>nextPage</td>
      <td>the next page object which contains {number, link, isActive}</td>
    </tr>
    <tr>
      <td>firstPage</td>
      <td>the first page object which contains {number, link, isEllipsis}.
      ps: isEllipsis means whether you need '......', like 1...5,6,7,8...100</td>
    </tr>
    <tr>
      <td>lastPage</td>
      <td>the final page object which contains {number, link, isEllipsis}.
       ps: isEllipsis means whether you need '......', like 1...5,6,7,8...100</td>
    </tr>
  </tbody>
</table>

###Example
```js
const test = require('ava');
const logicPaginate = require('../src/pagination-logic');


test('middle', function(t) {
    const input = {
        total: 50,
        single:6,
        pageSize:4,
        currentPage: 6,
        pageLinkRule: (pageNumber) => {
            return `/page/${pageNumber}`;
        }
    };
    const expectedOutput = {
           pages: [
                      {
                          number: 4,
                          link: '/page/4',
                          isActive: false,
                      },
                      {
                          number: 5,
                          link: '/page/5',
                          isActive: false,
                      },
                      {
                          number: 6,
                          link: '/page/6',
                          isActive: true,
                      },
                      {
                          number: 7,
                          link: '/page/7',
                          isActive: false,
                      }
                  ],
                  pageCount: 9,
                  currentPage: 6,
                  hasPrevious: true,
                  hasNext: true,
                  previousPage: {
                      number: 5,
                      link: '/page/5',
                      isActive: false,
                  },
                  nextPage: {
                      number: 7,
                      link: '/page/7',
                      isActive: false,
                  },
                  pageSize: 4,
                  firstPage:{
                      number:1,
                      link: '/page/1',
                      isEllipsis: true
                  },
                  lastPage:{
                      number:9,
                      link: '/page/9',
                      isEllipsis: true
                  },

       };
    t.deepEqual(logicPaginate(input), expectedOutput)
});
```

