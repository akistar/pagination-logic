## pagination-logic
Pure Javascript pagination logic without UI component
### Installation
```
npm install pagination-logic
```
### Usage
```js
/*
Provide a pageObject
(total -- Number of items that will be paginated
 single -- Number of items per page
 pageSize -- Number of pageItem that will be shown
 currentPage -- Number of the page you want to get
 pageLinkRule -- a funtion you link to the page you want, param is pageNumber
)
function logicPaginate (pageObject){
}
*/
```

###Example
'''js
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
        previousPage: 5,
        nextPage:7,
        pageSize:4

    };
    t.deepEqual(logicPaginate(input), expectedOutput)
});
'''

