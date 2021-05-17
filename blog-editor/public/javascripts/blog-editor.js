var testEditor;

$(function() {
    testEditor = editormd('test-editormd', {
        width   : '100%',
        height  : '100%',
        path    : '../lib/',
        onchange: function() {
          let data = {
            'content': document.getElementById('md-textarea').value
          };

          // post article
          $.ajax({
              type: 'POST',
              url: '/write',
              data: JSON.stringify(data),
              datatype: 'json',
              contentType:    'application/json',
              scriptCharset:  'utf-8'
          })
          .then((result) => {
              setTimeout(() => {
                  // reload iframe
                  var iframe = document.getElementById('preview-iframe');
                  iframe.src = iframe.src;
              }, 1000)
          });
        }
    });

    // Hide default preview
    var editormdPreview = $('.editormd-preview');
    editormdPreview[0].innerHTML = '';

    // Show iframe
    var iframe = document.createElement('iframe');
    iframe.id = 'preview-iframe';
    iframe.src = 'http://localhost:4000/blog/information/test/';
    editormdPreview[0].appendChild(iframe);
});
