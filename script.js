document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to show a specific page
    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
                page.classList.remove('fade-out');
            } else {
                page.classList.remove('active');
                page.classList.add('fade-out');
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showPage(targetId);
        });
    });

    // Show the default page
    showPage('user-data-entry');

    // Handle User Data Entry Form Submission
    document.getElementById('dataEntryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Data submitted successfully!');
    });

    // Handle Data Management Form Submission
    document.getElementById('dataManagementForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Action performed successfully!');
    });

    // Handle Data Request Button Click
    document.getElementById('requestDataButton').addEventListener('click', function() {
        alert('Data request simulated!');
    });

    // Handle Refresh Balance Button Click
    document.getElementById('refreshBalance').addEventListener('click', function() {
        document.getElementById('tokenBalance').innerText = '100 Tokens'; // Simulate token balance
    });

    // Handle Withdraw Tokens Button Click
    document.getElementById('withdrawTokens').addEventListener('click', function() {
        alert('Token withdrawal simulated!');
    });

    // Handle Data Monetization Form Submission
    document.getElementById('monetizationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const dataId = document.getElementById('dataIdMonetize').value;
        const price = document.getElementById('price').value;
        alert(`Price for data ID ${dataId} set to ${price} tokens!`);
    });
});
