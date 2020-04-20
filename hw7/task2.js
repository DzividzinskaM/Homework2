let tabsContent = '.tabs__content';
let tabsControl = '.tabs-control';
let tabs = '.tab'
let tabAttr = 'data-tab';
let active = 'active';

$(tabsControl).on('click', function() {
    $(tabsControl).removeClass(active);
    $(tabs).removeClass(active);
    let Number = $(this).attr(tabAttr);

    let activeTab = `${tabs}[${tabAttr}=${Number}]`;
    let activeControl = `${tabsControl}[${tabAttr}=${Number}]`;

    console.log(activeTab);
    $(activeTab).addClass(active);
    $(activeControl).addClass(active);
});

