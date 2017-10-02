// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/serviceworker.js')
    .then(function(reg) {
      console.log('Service worker change, registered the service worker');
    });
  }
  // Otherwise, no push notifications :(
  else {
    console.error('Service worker is not supported in this browser');
  }



  if (!("Notification" in window)) {
    console.error("This browser does not support desktop notification");
  }
  
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    console.log("Permission to receive notifications has been granted");
  }
  
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
    // If the user accepts, let's create a notification
      if (permission === "granted") {
        console.log("Permission to receive notifications has been granted");
      }
    });
  }
  
  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey:  urlB64ToUint8Array('BChDsFyOTBDgeApiZ7FtbKMMZT-cRkQmTAf_G9w_e4PQOlEoVGK0ED3SOsdcaPd1hqKWvPFdegbXE6GOFZEkPVc=') 
    });
  });

  $('.webpush-button').on('click', (e) => {
    navigator.serviceWorker.ready
    .then((serviceWorkerRegistration) => {
      serviceWorkerRegistration.pushManager.getSubscription()
      .then((subscription) => {
        $.post('/push', {
          subscription: subscription.toJSON(),
          message: 'You clicked a button!'
        });
      });
    });
  });

  function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
 
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
 
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }