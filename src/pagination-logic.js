module.exports = function logicPaginate(pageObject) {
    var pageInfo = {};
    pageInfo.pageCount = Math.ceil((pageObject.total) / (pageObject.single));
    pageInfo.currentPage = pageObject.currentPage;
    pageInfo.hasPrevious = pageInfo.currentPage !== 1;
    pageInfo.hasNext = pageInfo.currentPage != pageInfo.pageCount;
    if (pageInfo.hasPrevious == true) {
        pageInfo.previousPage =
        {
            number: pageInfo.currentPage - 1,
            link: pageObject.pageLinkRule(pageInfo.currentPage - 1),
            isActive: false
        }
    } else {
        pageInfo.previousPage = null
    }
    if (pageInfo.hasNext == true) {
        pageInfo.nextPage = {
            number: pageInfo.currentPage + 1,
            link: pageObject.pageLinkRule(pageInfo.currentPage + 1),
            isActive: false
        }
    } else {
        pageInfo.nextPage = null
    }
    pageInfo.pageSize = pageObject.pageSize;
    pageInfo.pages = [];
    pageInfo.firstPage = {number: 1, link: pageObject.pageLinkRule(1)};
    pageInfo.lastPage = {number: pageInfo.pageCount, link: pageObject.pageLinkRule(pageInfo.pageCount)}

    if (pageInfo.currentPage < pageInfo.pageSize) {
        if (pageInfo.pageCount >= pageInfo.pageSize) {
            pageInfo.firstPage.isEllipsis = false;
            pageInfo.lastPage.isEllipsis = true; //1,2,3..10
            for (var i = 1; i <= pageInfo.pageSize; i++) {
                pageInfo.pages.push({number: i, link: pageObject.pageLinkRule(i), isActive: i == pageInfo.currentPage})
            }
        } else {
            pageInfo.firstPage.isEllipsis = false;
            pageInfo.lastPage.isEllipsis = false;
            for (var l = 1; l <= pageInfo.pageCount; l++) {
                pageInfo.pages.push({number: l, link: pageObject.pageLinkRule(l), isActive: l == pageInfo.currentPage})
            }
        }
    }

    if (pageInfo.currentPage >= pageInfo.pageSize) {
        var count = Math.floor(pageInfo.pageSize / 2);
        pageInfo.firstPage.isEllipsis = (pageInfo.currentPage - count > 1);
        if ((pageInfo.currentPage - count) + pageInfo.pageSize <= pageInfo.pageCount) {
            pageInfo.lastPage.isEllipsis = ((pageInfo.currentPage - count) + pageInfo.pageSize < pageInfo.pageCount);
            for (var j = (pageInfo.currentPage - count); j < (pageInfo.currentPage - count) + pageInfo.pageSize; j++) {
                pageInfo.pages.push({number: j, link: pageObject.pageLinkRule(j), isActive: j == pageInfo.currentPage})
            }
        }
        else {
            pageInfo.lastPage.isEllipsis = false;
            for (var k = (pageInfo.pageCount - pageInfo.pageSize + 1); k <= pageInfo.pageCount; k++) {
                pageInfo.pages.push({number: k, link: pageObject.pageLinkRule(k), isActive: k == pageInfo.currentPage})
            }
        }
    }


    return pageInfo
};


