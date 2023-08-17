// Applying datatables to all tables on the page (with some exceptions)
const applyDatatables = () => {
    // Any table with headers
    $('.table:has(thead)').each((i, element) => {
        try {
            const rows = element.getElementsByTagName('tr').length;
            // Don't process these as datatables cannot handle them
            const doNotProcess = element.querySelectorAll('[colspan],[rowspan]').length;

            // Don't process anything with less than 40 rows
            if (doNotProcess) return;

            // Bootstrap style tables, with responsive table
            let dom = `<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row table-responsive'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 text-center'p>>`;
                // How many items per page
            let pageLength = 25;
            // How to order our pages
            let order = [[0, 'asc']];

            // If we have less than 40 rows, we don't need pagination, but table will still be sortable
            if (rows < 40) {
                pageLength = 40;
                dom = `<'row'<'col-sm-12 col-md-6'><'col-sm-12 col-md-6'>><'row table-responsive'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'><'col-sm-12 col-md-7 text-center'>>`
                order = [];
            }

            $(element).DataTable({
                // Remember page/search/order
                stateSave: true,
                stateSaveCallback: function(settings, data) {
                    sessionStorage.setItem(`DataTables_${Wiki.pageType()}_${Wiki.pageName()}_${i}`, JSON.stringify(data));
                    // Only keep tables position if on same page type/parent
                    Object.keys(sessionStorage).forEach((key) => {
                        if (key.startsWith('DataTables') && !key.includes(Wiki.pageType())) {
                            delete sessionStorage[key];
                        }
                    })
                },
                stateLoadCallback: function(settings) {
                    return JSON.parse(sessionStorage.getItem(`DataTables_${Wiki.pageType()}_${Wiki.pageName()}_${i}`) || '{}');
                },
                dom,
                pageLength,
                order,
                // Our custom page implementation
                pagingType: 'simple_numbers_no_ellipses',
                // Adjust text
                language: {
                  paginate: {
                    previous: '←',
                    next: '→',
                  }
                }
            });
        } catch(e){}
    });
}

/* CUSTOM DATA TABLES STUFF */

// Hide any error messages that may appear (remove this line for debugging)
$.fn.dataTable.ext.errMode = 'none';

// Adjust how page numbers are shown
$.fn.DataTable.ext.pager.simple_numbers_no_ellipses = (page, pages) => {
    // how many buttons total (excluding next/prev buttons)
    const buttons = 5; // Limit to 5 so it should be fine on mobile
    const half = Math.floor( buttons / 2 );

    page = Math.max(0, page - half);
    const count = Math.min(pages - page, buttons);
    const numbers = [];
    for (let i = 0; i < count; i++){
        numbers.push(page++);
    }

    numbers.DT_el = 'span';

    return [ 'previous', numbers, 'next' ];
};

module.exports = {
    applyDatatables,
}
