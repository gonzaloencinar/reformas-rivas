(function () {
  const LEADX_API_KEY = '3d3016f3-5d5f-42c6-a5c6-83bd53c77978';
  const LEADX_URL = 'https://www.weleadx.com/api/v1/leads';

  const SERVICE_LABELS = {
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

  function getUtmParams() {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (key) {
      if (params.get(key)) utm[key] = params.get(key);
    });
    return utm;
  }

  function sendToLeadX(data) {
    var payload = {
      client_phone: data.phone,
      client_name: data.name || undefined,
      client_email: data.email || undefined,
      client_city: data.location || undefined,
      service_type: data.service ? (SERVICE_LABELS[data.service] || data.service) : undefined,
      description: data.message || undefined,
      source_metadata: Object.assign({ page: window.location.pathname }, getUtmParams()),
    };

    // Remove undefined keys
    Object.keys(payload).forEach(function (k) {
      if (payload[k] === undefined) delete payload[k];
    });

    return fetch(LEADX_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': LEADX_API_KEY,
      },
      body: JSON.stringify(payload),
    }).catch(function (err) {
      console.error('LeadX error:', err);
    });
  }

  function submitToNetlify(form) {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
  }

  function showSuccess(form, btn, originalBtnText) {
    btn.disabled = false;
    btn.textContent = originalBtnText;
    form.reset();

    var msg = document.createElement('div');
    msg.className = 'mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm font-medium text-center';
    msg.textContent = '¡Solicitud enviada! Nos pondremos en contacto contigo lo antes posible.';
    form.appendChild(msg);

    setTimeout(function () {
      if (msg.parentNode) msg.parentNode.removeChild(msg);
    }, 8000);
  }

  function showError(form, btn, originalBtnText) {
    btn.disabled = false;
    btn.textContent = originalBtnText;

    var msg = document.createElement('div');
    msg.className = 'mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm font-medium text-center';
    msg.textContent = 'Ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos directamente.';
    form.appendChild(msg);

    setTimeout(function () {
      if (msg.parentNode) msg.parentNode.removeChild(msg);
    }, 8000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var forms = document.querySelectorAll('form[data-netlify="true"]');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var btn = form.querySelector('button[type="submit"]');
        var originalBtnText = btn ? btn.textContent : '';
        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Enviando...';
        }

        var data = {
          name: (form.querySelector('[name="name"]') || {}).value,
          phone: (form.querySelector('[name="phone"]') || {}).value,
          email: (form.querySelector('[name="email"]') || {}).value,
          location: (form.querySelector('[name="location"]') || {}).value,
          service: (form.querySelector('[name="service"]') || {}).value,
          message: (form.querySelector('[name="message"]') || {}).value,
        };

        Promise.all([
          sendToLeadX(data),
          submitToNetlify(form),
        ])
          .then(function () {
            showSuccess(form, btn, originalBtnText);
          })
          .catch(function () {
            showError(form, btn, originalBtnText);
          });
      });
    });
  });
})();
