const test = require('ava');
const logicPaginate = require('../src/pagination-logic');


test('middle', function (t) {
    const input = {
        total: 50,
        single: 6,
        pageSize: 4,
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

test('firstPage', function (t) {
    const input = {
        total: 66,
        single: 6,
        pageSize: 4,
        currentPage: 1,
        pageLinkRule: (pageNumber) => {
            return `/page/${pageNumber}`;
        }
    };
    const expectedOutput = {
        pages: [
            {
                number: 1,
                link: '/page/1',
                isActive: true,
            },
            {
                number: 2,
                link: '/page/2',
                isActive: false,
            },
            {
                number: 3,
                link: '/page/3',
                isActive: false,
            },
            {
                number: 4,
                link: '/page/4',
                isActive: false,
            }
        ],
        pageCount: 11,
        currentPage: 1,
        hasPrevious: false,
        hasNext: true,
        previousPage: null,
        nextPage: {
            number: 2,
            link: '/page/2',
            isActive: false,
        },
        pageSize: 4,
        firstPage:{
            number:1,
            link: '/page/1',
            isEllipsis: false
        },
        lastPage:{
            number:11,
            link: '/page/11',
            isEllipsis: true
        },

    };
    t.deepEqual(logicPaginate(input), expectedOutput)
});


test('lastSecond', function (t) {
    const input = {
        total: 65,
        single: 6,
        pageSize: 5,
        currentPage: 10,
        pageLinkRule: (pageNumber) => {
            return `/page/${pageNumber}`;
        }
    };
    const expectedOutput = {
        pages: [
            {
                number: 7,
                link: '/page/7',
                isActive: false,
            },
            {
                number: 8,
                link: '/page/8',
                isActive: false,
            },
            {
                number: 9,
                link: '/page/9',
                isActive: false,
            },
            {
                number: 10,
                link: '/page/10',
                isActive: true,
            },
            {
                number: 11,
                link: '/page/11',
                isActive: false,
            },

        ],
        pageCount: 11,
        currentPage: 10,
        hasPrevious: true,
        hasNext: true,
        previousPage: {
            number: 9,
            link: '/page/9',
            isActive: false,
        },
        nextPage: {
            number: 11,
            link: '/page/11',
            isActive: false,
        },
        pageSize: 5,
        firstPage:{
            number:1,
            link: '/page/1',
            isEllipsis: true
        },
        lastPage:{
            number:11,
            link: '/page/11',
            isEllipsis: false
        },
    };
    t.deepEqual(logicPaginate(input), expectedOutput)
});

test('last', function (t) {
    const input = {
        total: 25,
        single: 6,
        pageSize: 4,
        currentPage: 5,
        pageLinkRule: (pageNumber) => {
            return `/page/${pageNumber}`;
        }
    };
    const expectedOutput = {
        pages: [
            {
                number: 2,
                link: '/page/2',
                isActive: false,
            },
            {
                number: 3,
                link: '/page/3',
                isActive: false,
            },
            {
                number: 4,
                link: '/page/4',
                isActive: false,
            },
            {
                number: 5,
                link: '/page/5',
                isActive: true,
            }
        ],
        pageCount: 5,
        currentPage: 5,
        hasPrevious: true,
        hasNext: false,
        previousPage: {
            number: 4,
            link: '/page/4',
            isActive: false,
        },
        nextPage: null,
        pageSize: 4,
        firstPage:{
            number:1,
            link: '/page/1',
            isEllipsis: true
        },
        lastPage:{
            number:5,
            link: '/page/5',
            isEllipsis: false
        },
    };
    t.deepEqual(logicPaginate(input), expectedOutput)
});
test('count<size', function (t) {
    const input = {
        total: 25,
        single: 6,
        pageSize: 6,
        currentPage: 5,
        pageLinkRule: (pageNumber) => {
            return `/page/${pageNumber}`;
        }
    };
    const expectedOutput = {
        pages: [
            {
                number: 1,
                link: '/page/1',
                isActive: false,
            },
            {
                number: 2,
                link: '/page/2',
                isActive: false,
            },
            {
                number: 3,
                link: '/page/3',
                isActive: false,
            },
            {
                number: 4,
                link: '/page/4',
                isActive: false,
            },
            {
                number: 5,
                link: '/page/5',
                isActive: true,
            }
        ],
        pageCount: 5,
        currentPage: 5,
        hasPrevious: true,
        hasNext: false,
        previousPage: {
            number: 4,
            link: '/page/4',
            isActive: false,
        },
        nextPage: null,
        pageSize: 6,
        firstPage:{
            number:1,
            link: '/page/1',
            isEllipsis: false
        },
        lastPage:{
            number:5,
            link: '/page/5',
            isEllipsis: false
        },
    };
    t.deepEqual(logicPaginate(input), expectedOutput)
});