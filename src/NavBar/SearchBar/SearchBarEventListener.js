export const addSearchBarEventListener = (callback) => {
    const closeSearchBarIfClickOutside = (event) => {
        const searchBar = document.querySelector('.search-bar');
        if(!searchBar.contains(event.target)) {
            callback(false);
        }
    };

    document.addEventListener('click', closeSearchBarIfClickOutside);

    return () => {
        document.removeEventListener('click', closeSearchBarIfClickOutside);
    };
};