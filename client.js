const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('code'))
    $("#code").val(urlParams.get('code'));
else
    $("#code").val(urlParams.get('access_token'));
