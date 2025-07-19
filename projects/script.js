<script>
  $(document).ready(function () {
    $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
      } else {
        document.querySelector('#scroll-top').classList.remove('active');
      }
    });
  });

  // Dynamic favicon + title
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
      document.title = "Projects | Fahad Khan";
      $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
      document.title = "Come Back To Portfolio";
      $("#favicon").attr("href", "/assets/images/favhand.png");
    }
  });

  // Tawk.to live chat
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();

  // Disable developer mode keys
  document.onkeydown = function (e) {
    if (
      e.keyCode == 123 || // F12
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    ) {
      return false;
    }
  };
</script>
