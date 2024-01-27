const ClassCard = () => {
    return (
        <div class="card">
            <header class="card-header">
                <a class="card-sigle">IFT123</a>
            </header>
            <div class="card-body">

                <a class="card-name">Développement de site web</a>
                <a class="card-nom-prof">Étienne Toupin</a>
            </div>
            <footer class="card-footer">
                <i class="fa-regular fa-clock"></i>
                <span>Prochain travail dû dans 10 jours</span>
            </footer>
        </div>
    )
}