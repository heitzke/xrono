//hide/show work unit description
$('.expand').click(function() {
  $(this).parents('.calendar').find('a').siblings('.description').each(function() {
    $(this).toggle('fast');
    $(this).toggleClass("expand");
  });
  return false;
});

function show_by_default(status)
{
  if (status == true)
  {
    $('.calendar').find('a').siblings('.description').each(function() {
      $(this).show();
      $(this).toggleClass("expand");
    });
  }
}

console.log(calendar_expansion_default);
if (typeof calendar_expansion_default === 'undefined') { 
  calendar_expansion_default = false;
}

show_by_default(calendar_expansion_default);
