function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}

// Her finder jeg alle pil ned knapper
var toggleButtons = document.querySelectorAll('.toggle_label');

// Her laver jeg en listener der lytter efter klikbegivenheder på alle knapper
toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        var targetId = this.getAttribute('data-target');
        var targetSvar = document.getElementById(targetId);

       
        if (targetSvar.style.display === 'none') {
            targetSvar.style.display = 'block';
        } else {
            targetSvar.style.display = 'none';
        }
    });
});

//Her laver jeg en listener til headeren når der scrolles.
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

