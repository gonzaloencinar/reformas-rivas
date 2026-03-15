(function () {
  var LEADX_API_KEY = '3d3016f3-5d5f-42c6-a5c6-83bd53c77978';
  var LEADX_URL = 'https://www.weleadx.com/api/v1/leads';

  var SERVICE_LABELS = {
    integral: 'Reforma Integral',
    cocina: 'Reforma de Cocina',
    bano: 'Reforma de Baño',
    piso: 'Reforma de Piso',
    local: 'Reforma de Local Comercial',
    fontaneria: 'Fontanería',
    electricidad: 'Electricidad',
    pintura: 'Pintura',
    pladur: 'Pladur',
    aislamiento: 'Aislamiento',
    otro: 'Otro servicio',
  };

  function val(form, fieldName) {
    var el = form.querySelector('[name="' + fieldName + '"]');
    return el ? el.value : '';
  }

  function initForms() {
    var forms = document.querySelectorAll('form[name="contact"]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn ? btn.textContent : '';
        if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }

        var service = val(form, 'service');
        var payload = {
          client_phone: val(form, 'phone'),
          client_name: val(form, 'name') || undefined,
          client_email: val(form, 'email') || undefined,
          client_city: val(form, 'location') || undefined,
          service_type: service ? (SERVICE_LABELS[service] || service) : undefined,
          description: val(form, 'message') || undefined,
          source_metadata: { page: window.location.pathname },
        };

        // Añadir UTM params si existen
        var search = new URLSearchParams(window.location.search);
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
          if (search.get(k)) payload.source_metadata[k] = search.get(k);
        });

        // Eliminar keys undefined
        Object.keys(payload).forEach(function (k) {
          if (payload[k] === undefined) delete payload[k];
        });

        // Enviar a LeadX
        fetch(LEADX_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-API-Key': LEADX_API_KEY },
          body: JSON.stringify(payload),
        })
          .then(function () {
            // También enviar a Netlify de forma silenciosa
            try {
              var fd = new FormData(form);
              var parts = [];
              fd.forEach(function (v, k) { parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(v)); });
              fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: parts.join('&'),
              }).catch(function () {});
            } catch (err) {}

            form.reset();
            if (btn) { btn.disabled = false; btn.textContent = originalText; }
            var msg = document.createElement('div');
            msg.style.cssText = 'margin-top:1rem;padding:1rem;background:#f0fdf4;border:1px solid #86efac;border-radius:8px;color:#166534;font-size:.875rem;text-align:center;';
            msg.textContent = '¡Solicitud enviada! Nos pondremos en contacto contigo lo antes posible.';
            form.appendChild(msg);
            setTimeout(function () { if (msg.parentNode) msg.parentNode.removeChild(msg); }, 8000);
          })
          .catch(function () {
            if (btn) { btn.disabled = false; btn.textContent = originalText; }
            var msg = document.createElement('div');
            msg.style.cssText = 'margin-top:1rem;padding:1rem;background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;color:#991b1b;font-size:.875rem;text-align:center;';
            msg.textContent = 'Ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos directamente.';
            form.appendChild(msg);
            setTimeout(function () { if (msg.parentNode) msg.parentNode.removeChild(msg); }, 8000);
          });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
})();
