/**
 * DataTables Basic
 */

'use strict';

let fv, offCanvasEl;
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const formAddNewRecord = document.getElementById('form-add-new-record');

    setTimeout(() => {
      const newRecord = document.querySelector('.create-new'),
        offCanvasElement = document.querySelector('#add-new-record');

      // To open offCanvas, to add new record
      if (newRecord) {
        newRecord.addEventListener('click', function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          // Empty fields on offCanvas open
          (offCanvasElement.querySelector('.dt-field-1').value = ''),
            (offCanvasElement.querySelector('.dt-field-2').value = ''),
            (offCanvasElement.querySelector('.dt-field-3').value = ''),
            (offCanvasElement.querySelector('.dt-field-4').value = ''),
            (offCanvasElement.querySelector('.dt-field-5').value = ''),
            (offCanvasElement.querySelector('.dt-field-6').value = ''),
            (offCanvasElement.querySelector('.dt-field-7').value = ''),
            (offCanvasElement.querySelector('.dt-field-8').value = ''),
            (offCanvasElement.querySelector('.dt-field-9').value = ''),
            (offCanvasElement.querySelector('.dt-field-10').value = ''),
            (offCanvasElement.querySelector('.dt-field-11').value = ''),
            (offCanvasElement.querySelector('.dt-field-12').value = ''),
            (offCanvasElement.querySelector('.dt-field-13').value = '');
          // Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    // Form validation for Add new record
    /* fv = FormValidation.formValidation(formAddNewRecord, {
      fields: {
        basicField1: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField2: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField3: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField4: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField5: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField6: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField7: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField8: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField9: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField10: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField11: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField12: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        },
        basicField13: {
          validators: {
            notEmpty: {
              message: 'هذا الحقل مطلوب'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        autoFocus: new FormValidation.plugins.AutoFocus()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          if (e.element.parentElement.classList.contains('input-group')) {
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    }); */


    
    // FlatPickr Initialization & Validation
    /* const flatpickrDate = document.querySelector('[name="basicDate"]');

    if (flatpickrDate) {
      flatpickrDate.flatpickr({
        enableTime: false,
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'm/d/Y',
        // After selecting a date, we need to revalidate the field
        onChange: function () {
          fv.revalidateField('basicDate');
        }
      });
    } */
  })();
});

// datatable (jquery)
$(function () {
  var dt_basic_table = $('.datatables-basic'),
    dt_complex_header_table = $('.dt-complex-header'),
    dt_row_grouping_table = $('.dt-row-grouping'),
    dt_multilingual_table = $('.dt-multilingual'),
    dt_basic;

  // DataTable with buttons
  // --------------------------------------------------------------------

  if (dt_basic_table.length) {
    dt_basic = dt_basic_table.DataTable({
      /* ajax: assetsPath + 'json/table-datatable.json', */
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'field_1' },
        { data: 'field_2' },
        { data: 'field_3' },
        { data: 'field_4' },
        { data: 'field_5' },
        { data: 'field_6' },
        { data: 'field_7' },
        { data: 'field_8' },
        { data: 'field_9' },
        { data: 'field_10' },
        { data: 'field_11' },
        { data: 'field_12' },
        { data: 'field_13' },
        { data: '' }
      ],/* 
      columnDefs: [
        {
          // For Responsive
          className: 'control',
          orderable: false,
          searchable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          targets: 1,
          searchable: false,
          visible: false
        },
        {
          targets: 2,
          searchable: false,
          visible: false
        },
        {
          targets: 3,
          searchable: false,
          visible: false
        },
        {
          targets: 4,
          searchable: false,
          visible: false
        },
        {
          targets: 5,
          searchable: false,
          visible: false
        },
        {
          targets: 6,
          searchable: false,
          visible: false
        },
        {
          targets: 7,
          searchable: false,
          visible: false
        },
        {
          targets: 8,
          searchable: false,
          visible: false
        },
        {
          targets: 9,
          searchable: false,
          visible: false
        },
        {
          targets: 10,
          searchable: false,
          visible: false
        },
        {
          targets: 11,
          searchable: false,
          visible: false
        },
        {
          targets: 12,
          searchable: false,
          visible: false
        },
        {
          responsivePriority: 1,
          targets: 13
        },
        {
          targets: -1,
          title: 'عمليات', 
          orderable: false,
          searchable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ri-more-2-line"></i></a>' +
              '<ul class="dropdown-menu dropdown-menu-end m-0">' +
              '<li><a href="javascript:;" class="dropdown-item">Details</a></li>' +
              '<li><a href="javascript:;" class="dropdown-item">Archive</a></li>' +
              '<div class="dropdown-divider"></div>' +
              '<li><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></li>' +
              '</ul>' +
              '</div>' +
              '<a href="javascript:;" class="btn btn-sm btn-text-secondary rounded-pill btn-icon item-edit"><i class="ri-edit-box-line"></i></a>'
            );
          }
        }
      ], */
      order: [[2, 'desc']],
      dom: '<"card-header flex-column flex-md-row border-bottom"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6 mt-5 mt-md-0"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      language: {
        paginate: {
          next: '<i class="ri-arrow-right-s-line"></i>',
          previous: '<i class="ri-arrow-left-s-line"></i>'
        }
      },
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-label-primary dropdown-toggle me-4 waves-effect waves-light',
          text: '<i class="ri-external-link-line me-sm-1"></i> <span class="d-none d-sm-inline-block">تصدير</span>',
          buttons: [
            {
              extend: 'print',
              text: '<i class="ri-printer-line me-1" ></i>طباعة',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              },
              customize: function (win) {
                //customize print view for dark
                $(win.document.body)
                  .css('color', config.colors.headingColor)
                  .css('border-color', config.colors.borderColor)
                  .css('background-color', config.colors.bodyBg);
                $(win.document.body)
                  .find('table')
                  .addClass('compact')
                  .css('color', 'inherit')
                  .css('border-color', 'inherit')
                  .css('background-color', 'inherit');
              }
            },
            {
              extend: 'csv',
              text: '<i class="ri-file-text-line me-1" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'excel',
              text: '<i class="ri-file-excel-line me-1"></i>Excel',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'pdf',
              text: '<i class="ri-file-pdf-line me-1"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            }/* ,
            {
              extend: 'copy',
              text: '<i class="ri-file-copy-line me-1" ></i>Copy',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            } */
          ]
        },
        {
          text: '<i class="ri-add-line ri-16px me-sm-2"></i> <span class="d-none d-sm-inline-block">إضافة صف جديد</span>',
          className: 'create-new btn btn-primary waves-effect waves-light'
        }
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['field_1']; /* full_name */
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      },
      "language": {
          "loadingRecords": "جارٍ التحميل...",
          "lengthMenu": "أظهر _MENU_ مدخلات",
          "zeroRecords": "لم يعثر على أية سجلات",
          "info": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
          "search": "ابحث:",
          "paginate": {
              "first": "الأول",
              "previous": "السابق",
              "next": "التالي",
              "last": "الأخير"
          },
          "aria": {
              "sortAscending": ": تفعيل لترتيب العمود تصاعدياً",
              "sortDescending": ": تفعيل لترتيب العمود تنازلياً"
          },
          "select": {
              "rows": {
                  "_": "%d قيمة محددة",
                  "1": "1 قيمة محددة"
              },
              "cells": {
                  "1": "1 خلية محددة",
                  "_": "%d خلايا محددة"
              },
              "columns": {
                  "1": "1 عمود محدد",
                  "_": "%d أعمدة محددة"
              }
          },
          "buttons": {
              "print": "طباعة",
              "copyKeys": "زر <i>ctrl<\/i> أو <i>⌘<\/i> + <i>C<\/i> من الجدول<br>ليتم نسخها إلى الحافظة<br><br>للإلغاء اضغط على الرسالة أو اضغط على زر الخروج.",
              "pageLength": {
                  "-1": "اظهار الكل",
                  "_": "إظهار %d أسطر",
                  "1": "اظهار سطر واحد"
              },
              "collection": "مجموعة",
              "copy": "نسخ",
              "copyTitle": "نسخ إلى الحافظة",
              "csv": "CSV",
              "excel": "Excel",
              "pdf": "PDF",
              "colvis": "إظهار الأعمدة",
              "colvisRestore": "إستعادة العرض",
              "copySuccess": {
                  "1": "تم نسخ سطر واحد الى الحافظة",
                  "_": "تم نسخ %ds أسطر الى الحافظة"
              },
              "createState": "تكوين حالة",
              "removeAllStates": "ازالة جميع الحالات",
              "removeState": "ازالة حالة",
              "renameState": "تغيير اسم حالة",
              "savedStates": "الحالات المحفوظة",
              "stateRestore": "استرجاع حالة",
              "updateState": "تحديث حالة"
          },
          "searchBuilder": {
              "add": "اضافة شرط",
              "clearAll": "ازالة الكل",
              "condition": "الشرط",
              "data": "المعلومة",
              "logicAnd": "و",
              "logicOr": "أو",
              "value": "القيمة",
              "conditions": {
                  "date": {
                      "after": "بعد",
                      "before": "قبل",
                      "between": "بين",
                      "empty": "فارغ",
                      "equals": "تساوي",
                      "notBetween": "ليست بين",
                      "notEmpty": "ليست فارغة",
                      "not": "ليست "
                  },
                  "number": {
                      "between": "بين",
                      "empty": "فارغة",
                      "equals": "تساوي",
                      "gt": "أكبر من",
                      "lt": "أقل من",
                      "not": "ليست",
                      "notBetween": "ليست بين",
                      "notEmpty": "ليست فارغة",
                      "gte": "أكبر أو تساوي",
                      "lte": "أقل أو تساوي"
                  },
                  "string": {
                      "not": "ليست",
                      "notEmpty": "ليست فارغة",
                      "startsWith": " تبدأ بـ ",
                      "contains": "تحتوي",
                      "empty": "فارغة",
                      "endsWith": "تنتهي ب",
                      "equals": "تساوي",
                      "notContains": "لا تحتوي",
                      "notStartsWith": "لا تبدأ بـ",
                      "notEndsWith": "لا تنتهي بـ"
                  },
                  "array": {
                      "equals": "تساوي",
                      "empty": "فارغة",
                      "contains": "تحتوي",
                      "not": "ليست",
                      "notEmpty": "ليست فارغة",
                      "without": "بدون"
                  }
              },
              "button": {
                  "0": "فلاتر البحث",
                  "_": "فلاتر البحث (%d)"
              },
              "deleteTitle": "حذف فلاتر",
              "leftTitle": "محاذاة يسار",
              "rightTitle": "محاذاة يمين",
              "title": {
                  "0": "البحث المتقدم",
                  "_": "البحث المتقدم (فعال)"
              }
          },
          "searchPanes": {
              "clearMessage": "ازالة الكل",
              "collapse": {
                  "0": "بحث",
                  "_": "بحث (%d)"
              },
              "count": "عدد",
              "countFiltered": "عدد المفلتر",
              "loadMessage": "جارِ التحميل ...",
              "title": "الفلاتر النشطة",
              "showMessage": "إظهار الجميع",
              "collapseMessage": "إخفاء الجميع",
              "emptyPanes": "لا يوجد مربع بحث"
          },
          "infoThousands": ",",
          "datetime": {
              "previous": "السابق",
              "next": "التالي",
              "hours": "الساعة",
              "minutes": "الدقيقة",
              "seconds": "الثانية",
              "unknown": "-",
              "amPm": [
                  "صباحا",
                  "مساءا"
              ],
              "weekdays": [
                  "الأحد",
                  "الإثنين",
                  "الثلاثاء",
                  "الأربعاء",
                  "الخميس",
                  "الجمعة",
                  "السبت"
              ],
              "months": [
                  "يناير",
                  "فبراير",
                  "مارس",
                  "أبريل",
                  "مايو",
                  "يونيو",
                  "يوليو",
                  "أغسطس",
                  "سبتمبر",
                  "أكتوبر",
                  "نوفمبر",
                  "ديسمبر"
              ]
          },
          "editor": {
              "close": "إغلاق",
              "create": {
                  "button": "إضافة",
                  "title": "إضافة جديدة",
                  "submit": "إرسال"
              },
              "edit": {
                  "button": "تعديل",
                  "title": "تعديل السجل",
                  "submit": "تحديث"
              },
              "remove": {
                  "button": "حذف",
                  "title": "حذف",
                  "submit": "حذف",
                  "confirm": {
                      "_": "هل أنت متأكد من رغبتك في حذف السجلات %d المحددة؟",
                      "1": "هل أنت متأكد من رغبتك في حذف السجل؟"
                  }
              },
              "error": {
                  "system": "حدث خطأ ما"
              },
              "multi": {
                  "title": "قيم متعدية",
                  "restore": "تراجع",
                  "info": "القيم المختارة تحتوى على عدة قيم لهذا المدخل. لتعديل وتحديد جميع القيم لهذا المدخل، اضغط او انتقل هنا، عدا ذلك سيبقى نفس القيم",
                  "noMulti": "هذا المدخل مفرد وليس ضمن مجموعة"
              }
          },
          "processing": "جارٍ المعالجة...",
          "emptyTable": "لا يوجد بيانات متاحة في الجدول",
          "infoEmpty": "يعرض 0 إلى 0 من أصل 0 مُدخل",
          "thousands": ".",
          "stateRestore": {
              "creationModal": {
                  "columns": {
                      "search": "إمكانية البحث للعمود",
                      "visible": "إظهار العمود"
                  },
                  "toggleLabel": "تتضمن",
                  "button": "تكوين الحالة",
                  "name": "اسم الحالة",
                  "order": "فرز",
                  "paging": "تصحيف",
                  "scroller": "مكان السحب",
                  "search": "بحث",
                  "searchBuilder": "مكون البحث",
                  "select": "تحديد",
                  "title": "تكوين حالة جديدة"
              },
              "duplicateError": "حالة مكررة بنفس الاسم",
              "emptyError": "لا يسمح بأن يكون اسم الحالة فارغة.",
              "emptyStates": "لا توجد حالة محفوظة",
              "removeConfirm": "هل أنت متأكد من حذف الحالة %s؟",
              "removeError": "لم استطع ازالة الحالة.",
              "removeJoiner": "و",
              "removeSubmit": "حذف",
              "removeTitle": "حذف حالة",
              "renameButton": "تغيير اسم حالة",
              "renameLabel": "الاسم الجديد للحالة %s:",
              "renameTitle": "تغيير اسم الحالة"
          },
          "autoFill": {
              "cancel": "إلغاء الامر",
              "fill": "املأ كل الخلايا بـ <i>%d<\/i>",
              "fillHorizontal": "تعبئة الخلايا أفقيًا",
              "fillVertical": "تعبئة الخلايا عموديا",
              "info": "تعبئة تلقائية"
          },
          "decimal": ",",
          "infoFiltered": "(مرشحة من مجموع _MAX_ مُدخل)",
          "searchPlaceholder": "مثال بحث"
      },
    });
    /* $('div.head-label').html('<h5 class="card-title mb-0">DataTable with Buttons</h5>'); */
  }

  // Add New record
  // ? Remove/Update this code as per your requirements
  var count = 101;
  // On form submit, if form is valid
  /* fv.on('core.form.valid', function () {
    var $new_field_1 = $('.add-new-record .dt-field-1').val(),
      $new_field_2 = $('.add-new-record .dt-field-2').val(),
      $new_field_3 = $('.add-new-record .dt-field-3').val(),
      $new_field_4 = $('.add-new-record .dt-field-4').val(),
      $new_field_5 = $('.add-new-record .dt-field-5').val(),
      $new_field_6 = $('.add-new-record .dt-field-6').val(),
      $new_field_7 = $('.add-new-record .dt-field-7').val(),
      $new_field_8 = $('.add-new-record .dt-field-8').val(),
      $new_field_9 = $('.add-new-record .dt-field-9').val(),
      $new_field_10 = $('.add-new-record .dt-field-10').val(),
      $new_field_11 = $('.add-new-record .dt-field-11').val(),
      $new_field_12 = $('.add-new-record .dt-field-12').val(),
      $new_field_13 = $('.add-new-record .dt-field-13').val();

    if ($new_field_1 != '') {
      dt_basic.row
        .add({
          id: count,
          field_1: $new_field_1,
          field_2: $new_field_2,
          field_3: $new_field_3,
          field_4: $new_field_4,
          field_5: $new_field_5,
          field_6: $new_field_6,
          field_7: $new_field_7,
          field_8: $new_field_8,
          field_9: $new_field_9,
          field_10: $new_field_10,
          field_11: $new_field_11,
          field_12: $new_field_12,
          field_13: $new_field_13,
          status: 5
        })
        .draw();
      count++;

      // Hide offcanvas using javascript method
      offCanvasEl.hide();
    }
  }); */


  
  // Delete Record
  $('.datatables-basic tbody').on('click', '.delete-record', function () {
    dt_basic.row($(this).parents('tr')).remove().draw();
  });


});
