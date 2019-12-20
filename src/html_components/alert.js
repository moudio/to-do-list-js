export default function alert(message) {
    const nav = document.querySelector('nav')
    const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show')
        alertDiv.setAttribute('role', 'alert'); 
        alertDiv.innerHTML = `${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
        nav.after(alertDiv);
}