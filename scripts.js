
$(function () {

  // konstansok
  const validClass = 'is-valid';
  const invalidClass = 'is-invalid';

  // elemek összegyűjtése
  let $button = $('button');
  let $checkbox = $('input[type="checkbox"]');
  let $invalidFieldsList = $('div.alert-danger ul');
  let $alert = $('div.alert-danger' );
  let $success = $('div#successText');
  let $form = $('form');
  let $userName = $('input#username');
  let $password = $('input#password');

  // gombnyomásra reagálás
  $button.click( function( event ) {

    // alapértemezett működés megakasztás
    event.preventDefault();
    // console.log(event);
    // console.log('('+event.clientX + ',' + event.clientY + ')');

    // nem megfelelő mezők
    let invalidFields = [];
    $invalidFieldsList.html('');

    // mezők ellenőrzése
    // felhasználónév
    let userName = $userName.val();
    if( userName.length === 0 ) {
      // hibás kitöltés
      invalidFields.push('Felhasználónév');
      $userName.addClass(invalidClass);
      $userName.removeClass(validClass);
    } else {
      // helyes kitöltése
      $userName.addClass(validClass);
      $userName.removeClass(invalidClass);
    }

    // jelszó
    let password = $password.val();
    if ( password.length <= 5 ) {
      // hibás kitöltés
      invalidFields.push('Jelszó');
      $password.addClass(invalidClass);
      $password.removeClass(validClass);

    } else {
      // helyes kitöltés
      $password.addClass(validClass);
      $password.removeClass(invalidClass);
    }


    // ha nincs bepipálva
    let isChecked = $checkbox.prop('checked');
    if( !isChecked ) {
      // hibás kitöltés
      invalidFields.push('ÁSZF');
      $checkbox.removeClass(validClass);
      $checkbox.addClass(invalidClass);
    } else {
      // helyes kitöltés
      $checkbox.addClass(validClass);
      $checkbox.removeClass(invalidClass);
    }

    // sikeres sikertelen elágazáswitch
    if ( invalidFields.length === 0) {

      //  sikeres kitöltés
      $success.show();
      $form.hide();
      $alert.hide();
    } else {

      // sikertelen kitöltés
     $alert.show();

      // hibák kiírása
      $.each( invalidFields, function ( index, field) {
        $invalidFieldsList.append('<li>' + field + '</li>');
      });

    }


  });
});
